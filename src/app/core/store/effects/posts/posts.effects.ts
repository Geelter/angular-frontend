import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as globalActions from '@core/store/actions/global.actions';
import * as postsActions from '@core/store/actions/posts/posts.actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { from, of } from 'rxjs';
import { PostsService } from '@posts/services/posts.service';

export const fetchPosts = createEffect(
  (actions$ = inject(Actions), postsService = inject(PostsService)) => {
    return actions$.pipe(
      ofType(postsActions.fetchPostsForThread),
      switchMap(action =>
        from(postsService.fetchPostsForThreadID(action.threadID)).pipe(
          map(posts => postsActions.upsertPosts({ posts })),
          catchError(err =>
            of(globalActions.actionError({ error: err, action: action }))
          )
        )
      )
    );
  },
  { functional: true }
);
