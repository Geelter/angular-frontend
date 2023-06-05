import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as globalActions from '@core/store/actions/global.actions';
import * as postThreadsActions from '@core/store/actions/posts/post-threads.actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { from, of } from 'rxjs';
import { PostThreadsService } from '@posts/services/post-threads.service';

export const fetchPostThreadsForCategory = createEffect(
  (actions$ = inject(Actions), threadsService = inject(PostThreadsService)) => {
    return actions$.pipe(
      ofType(postThreadsActions.fetchThreadsForCategory),
      switchMap(action =>
        from(threadsService.fetchThreadsForCategoryID(action.categoryID)).pipe(
          map(threads => postThreadsActions.upsertThreads({ threads })),
          catchError(err =>
            of(globalActions.actionError({ error: err, action: action }))
          )
        )
      )
    );
  },
  { functional: true }
);
