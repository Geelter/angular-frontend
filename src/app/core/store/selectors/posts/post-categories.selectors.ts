import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PostCategoriesState } from '@core/store/state/posts/post-categories.state';
import { adapter } from '@core/store/reducers/posts/post-categories.reducer';
import { EntityPaginationState } from '@core/store/state/pagination.state';
import { Category } from '@posts/models/category';

const featureKey = 'postCategories';

const selectPostCategoriesState =
  createFeatureSelector<PostCategoriesState>(featureKey);

export const selectCategoriesIsLoading = createSelector(
  selectPostCategoriesState,
  (categoriesState: PostCategoriesState) => categoriesState.isLoading
);

const selectCategories = createSelector(
  selectPostCategoriesState,
  (categoriesState: PostCategoriesState) => categoriesState.categories
);

const selectCategoryIDs = createSelector(
  selectPostCategoriesState,
  (categoriesState: PostCategoriesState) => categoriesState.categoryIDs
);

export const {
  selectIds: selectCategoryEntityIDs,
  selectEntities: selectCategoryEntities,
  selectAll: selectAllCategories,
  selectTotal: selectTotalCategories,
} = adapter.getSelectors(selectCategories);

export const selectCategoriesPaginationState = createSelector(
  selectPostCategoriesState,
  (categoriesState: PostCategoriesState) => categoriesState.pagination
);

/*
  If this returns 'null' fetch the category IDs
 */
const selectCategoryIDsForCurrentPage = createSelector(
  selectCategoryIDs,
  selectCategoriesPaginationState,
  (categoryIDs: number[] | null, paginationState: EntityPaginationState) => {
    if (!categoryIDs) return null;

    const pageSize = paginationState.pageSize;
    const currentPage = paginationState.currentPage;

    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = currentPage * pageSize - 1;

    return categoryIDs.slice(startIndex, endIndex);
  }
);

/*
  If this return 'null' fetch the category IDs, if it returns
  a non-empty array fetch categories for those IDs
*/
export const selectMissingCategoryIDs = createSelector(
  selectCategoryEntityIDs,
  selectCategoryIDsForCurrentPage,
  (
    entityCategoryIDs: string[] | number[],
    currentPageCategoryIDs: number[] | null
  ) => {
    if (!currentPageCategoryIDs) return null;

    const entityCategoryIDsAsNumbers = (
      entityCategoryIDs as Array<number | string>
    ).map(Number);

    return currentPageCategoryIDs.filter(
      id => !entityCategoryIDsAsNumbers.includes(id)
    );
  }
);

/*
  If this returns 'null' fetch category IDs
 */
export const selectCategoriesWithIDsForCurrentPage = createSelector(
  selectAllCategories,
  selectCategoryIDsForCurrentPage,
  (categories: Category[], currentPageCategoryIDs: number[] | null) => {
    if (!currentPageCategoryIDs) return null;

    return categories.filter(category =>
      currentPageCategoryIDs.includes(category.id)
    );
  }
);
