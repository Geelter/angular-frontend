import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PostThreadsState } from '@core/store/state/posts/post-threads.state';
import { adapter } from '@core/store/reducers/posts/post-threads.reducer';

export const featureKey = 'postThreads';

export const selectPostThreadsState =
  createFeatureSelector<PostThreadsState>(featureKey);

export const {
  selectIds: selectThreadIDs,
  selectEntities: selectThreadEntities,
  selectAll: selectAllThreads,
  selectTotal: selectTotalThreads,
} = adapter.getSelectors(selectPostThreadsState);

export const selectThreadsByCategory = (categoryID: number) =>
  createSelector(selectAllThreads, threads =>
    threads.filter(thread => thread.category_id === categoryID)
  );

export const selectPostThreadsFetchDate = createSelector(
  selectPostThreadsState,
  (state: PostThreadsState) => state.lastFetchedAt
);

export const selectPostThreadsIsLoading = createSelector(
  selectPostThreadsState,
  (state: PostThreadsState) => state.isLoading
);
