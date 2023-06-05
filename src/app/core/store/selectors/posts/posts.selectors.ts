import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PostsState } from '@core/store/state/posts/posts.state';
import { adapter } from '@core/store/reducers/posts/posts.reducer';

export const featureKey = 'posts';

export const selectPostsState = createFeatureSelector<PostsState>(featureKey);

export const {
  selectIds: selectPostIDs,
  selectEntities: selectPostEntities,
  selectAll: selectAllPosts,
  selectTotal: selectTotalPosts,
} = adapter.getSelectors(selectPostsState);

export const selectPostsByThread = (threadID: number) =>
  createSelector(selectAllPosts, posts =>
    posts.filter(post => post.thread_id === threadID)
  );

export const selectPostsFetchDate = createSelector(
  selectPostsState,
  (state: PostsState) => state.lastFetchedAt
);

export const selectPostsIsLoading = createSelector(
  selectPostsState,
  (state: PostsState) => state.isLoading
);
