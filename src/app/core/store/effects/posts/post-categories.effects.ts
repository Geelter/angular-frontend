import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as postCategoriesActions from '@core/store/actions/posts/post-categories.actions';
import * as globalActions from '@core/store/actions/global.actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { from, of } from 'rxjs';
import { PostCategoriesDatabaseService } from '@posts/services/post-categories-database.service';

export const requestCategoryIDs = createEffect(
  (
    actions$ = inject(Actions),
    categoriesService = inject(PostCategoriesDatabaseService)
  ) => {
    return actions$.pipe(
      ofType(postCategoriesActions.requestCategoryIDs),
      switchMap(action =>
        from(categoriesService.fetchCategoryIDs()).pipe(
          map(([categoryIDs, categoryCount]) =>
            postCategoriesActions.receiveCategoryIDs({
              categoryIDs,
              categoryCount,
            })
          ),
          catchError(err =>
            of(globalActions.actionError({ error: err, action: action }))
          )
        )
      )
    );
  },
  { functional: true }
);

export const requestCategoriesForIDs = createEffect(
  (
    actions$ = inject(Actions),
    categoriesService = inject(PostCategoriesDatabaseService)
  ) => {
    return actions$.pipe(
      ofType(postCategoriesActions.requestCategoriesForIDs),
      switchMap(action =>
        from(categoriesService.fetchCategoriesForIDs(action.categoryIDs)).pipe(
          map(categories =>
            postCategoriesActions.receiveCategoriesForIDs({ categories })
          ),
          catchError(err =>
            of(globalActions.actionError({ error: err, action: action }))
          )
        )
      )
    );
  },
  { functional: true }
);
