import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PostCategoriesState } from '@core/store/state/posts/post-categories.state';
import { adapter } from '@core/store/reducers/posts/post-categories.reducer';

export const featureKey = 'postCategories';

export const selectPostCategoriesState =
  createFeatureSelector<PostCategoriesState>(featureKey);

export const {
  selectIds: selectCategoryIDs,
  selectEntities: selectCategoryEntities,
  selectAll: selectAllCategories,
  selectTotal: selectTotalCategories,
} = adapter.getSelectors(selectPostCategoriesState);

export const selectPostCategoriesFetchDate = createSelector(
  selectPostCategoriesState,
  (state: PostCategoriesState) => state.lastFetchedAt
);

export const selectPostCategoriesIsLoading = createSelector(
  selectPostCategoriesState,
  (state: PostCategoriesState) => state.isLoading
);
