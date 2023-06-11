import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as globalActions from '@core/store/actions/global.actions';
import * as postsActions from '@core/store/actions/posts/posts.actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { from, of } from 'rxjs';
import { PostsDatabaseService } from '@posts/services/posts-database.service';

export const requestPostIDsForThread = createEffect(
  (actions$ = inject(Actions), postsService = inject(PostsDatabaseService)) => {
    return actions$.pipe(
      ofType(postsActions.requestPostIDsForThread),
      switchMap(action => {
        const threadID = action.threadID;
        return from(postsService.fetchPostIDsForThreadID(threadID)).pipe(
          map(([postIDs, postCount]) =>
            postsActions.receivePostIDsForThread({
              postIDs,
              postCount,
              threadID,
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

export const requestPostsForIDs = createEffect(
  (actions$ = inject(Actions), postsService = inject(PostsDatabaseService)) => {
    return actions$.pipe(
      ofType(postsActions.requestPostsForIDs),
      switchMap(action => {
        const threadID = action.threadID;
        return from(postsService.fetchPostsForIDs(action.postIDs)).pipe(
          map(posts => postsActions.receivePostsForIDs({ posts, threadID })),
          catchError(err =>
            of(globalActions.actionError({ error: err, action: action }))
          )
        );
      })
    );
  },
  { functional: true }
);
