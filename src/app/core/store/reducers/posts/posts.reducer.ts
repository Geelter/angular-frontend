import { createReducer, on } from '@ngrx/store';
import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Post } from '@posts/models/post';
import { PostsState } from '@core/store/state/posts/posts.state';
import * as postsActions from '@core/store/actions/posts/posts.actions';
import { updateFetchDateForKey } from '@core/store/helper-functions';

export const adapter: EntityAdapter<Post> = createEntityAdapter<Post>({
  sortComparer: false,
});

export const initialState: PostsState = adapter.getInitialState({
  lastFetchedAt: new Map<number, Date>(),
  isLoading: false,
  chosenThread: -1,
});

const postsToRemove = (threadID: number) => (post: Post) => {
  return post.thread_id === threadID;
};

export const postsReducer = createReducer(
  initialState,
  on(postsActions.fetchPostsForThread, (state, { threadID }) => {
    return {
      ...state,
      isLoading: true,
      chosenThread: threadID,
    };
  }),
  on(postsActions.upsertPosts, (state, { posts }) => {
    const updatedDates = updateFetchDateForKey(
      state.lastFetchedAt,
      state.chosenThread
    );

    return adapter.upsertMany(posts, {
      ...state,
      lastFetchedAt: updatedDates,
      isLoading: false,
      chosenThread: -1,
    });
  }),
  on(postsActions.clearPostsForThread, (state, { threadID }) => {
    return adapter.removeMany(postsToRemove(threadID), state);
  })
);
