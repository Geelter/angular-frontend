import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as globalActions from '@core/store/actions/global.actions';
import * as postThreadsActions from '@core/store/actions/posts/post-threads.actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { from, of } from 'rxjs';
import { PostThreadsDatabaseService } from '@posts/services/post-threads-database.service';

export const requestThreadIDsForCategory = createEffect(
  (
    actions$ = inject(Actions),
    postThreadsService = inject(PostThreadsDatabaseService)
  ) => {
    return actions$.pipe(
      ofType(postThreadsActions.requestThreadIDsForCategory),
      switchMap(action => {
        const categoryID = action.categoryID;
        return from(
          postThreadsService.fetchThreadIDsForCategoryID(categoryID)
        ).pipe(
          map(([threadIDs, threadCount]) =>
            postThreadsActions.receiveThreadIDsForCategory({
              threadIDs,
              threadCount,
              categoryID,
            })
          ),
          catchError(err =>
            of(globalActions.actionError({ error: err, action: action }))
          )
        );
      })
    );
  },
  { functional: true }
);

export const requestThreadsForIDs = createEffect(
  (
    actions$ = inject(Actions),
    postThreadsService = inject(PostThreadsDatabaseService)
  ) => {
    return actions$.pipe(
      ofType(postThreadsActions.requestThreadsForIDs),
      switchMap(action => {
        const categoryID = action.categoryID;
        return from(
          postThreadsService.fetchThreadsForIDs(action.threadIDs)
        ).pipe(
          map(threads =>
            postThreadsActions.receiveThreadsForIDs({ threads, categoryID })
          ),
          catchError(err =>
            of(globalActions.actionError({ error: err, action: action }))
          )
        );
      })
    );
  },
  { functional: true }
);
