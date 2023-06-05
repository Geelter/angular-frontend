import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as postCategoriesActions from '@core/store/actions/posts/post-categories.actions';
import * as globalActions from '@core/store/actions/global.actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { from, of } from 'rxjs';
import { PostCategoriesService } from '@posts/services/post-categories.service';

export const fetchPostCategories = createEffect(
  (
    actions$ = inject(Actions),
    categoriesService = inject(PostCategoriesService)
  ) => {
    return actions$.pipe(
      ofType(postCategoriesActions.fetchCategories),
      switchMap(action =>
        from(categoriesService.fetchPostCategories()).pipe(
          map(categories =>
            postCategoriesActions.upsertCategories({ categories })
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
