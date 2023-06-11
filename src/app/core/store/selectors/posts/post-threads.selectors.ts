import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  CategoryThreadsState,
  PostThreadsState,
} from '@core/store/state/posts/post-threads.state';
import {
  adapter,
  initialCategoryThreadsState,
} from '@core/store/reducers/posts/post-threads.reducer';
import { Thread } from '@posts/models/thread';

export const featureKey = 'postThreads';

const selectPostThreadsState =
  createFeatureSelector<PostThreadsState>(featureKey);

export const selectThreadsIsLoading = createSelector(
  selectPostThreadsState,
  (threadsState: PostThreadsState) => threadsState.isLoading
);

const selectCategoryThreadsStateForChosenCategory = createSelector(
  selectPostThreadsState,
  (threadsState: PostThreadsState) =>
    threadsState.categoryThreads[threadsState.chosenCategory] ??
    initialCategoryThreadsState
);

const selectThreadsForChosenCategory = createSelector(
  selectCategoryThreadsStateForChosenCategory,
  (categoryThreadsState: CategoryThreadsState) => categoryThreadsState.threads
);

export const {
  selectIds: selectThreadIDsForChosenCategory,
  selectEntities: selectThreadEntities,
  selectAll: selectAllThreadsForChosenCategory,
  selectTotal: selectTotalThreads,
} = adapter.getSelectors(selectThreadsForChosenCategory);

export const selectPaginationStateForChosenCategory = createSelector(
  selectCategoryThreadsStateForChosenCategory,
  (categoryThreadsState: CategoryThreadsState) =>
    categoryThreadsState.pagination
);

/*
  If this returns 'null' fetch the thread IDs for the category
 */
const selectIDsForCurrentPage = createSelector(
  selectCategoryThreadsStateForChosenCategory,
  (categoryThreadsState: CategoryThreadsState) => {
    if (!categoryThreadsState.threadIDs) return null;

    const threadIDs = categoryThreadsState.threadIDs;
    const pageSize = categoryThreadsState.pagination.pageSize;
    const currentPage = categoryThreadsState.pagination.currentPage;

    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = currentPage * pageSize - 1;

    return threadIDs.slice(startIndex, endIndex);
  }
);

/*
  If this return 'null' fetch the thread IDs for the category, if it returns
  a non-empty array fetch threads for those IDs
*/
export const selectMissingThreadIDs = createSelector(
  selectThreadIDsForChosenCategory,
  selectIDsForCurrentPage,
  (
    threadIDsForChosenCategory: number[] | string[],
    currentPageThreadIDs: number[] | null
  ) => {
    if (!currentPageThreadIDs) return null;

    const threadIDsForCategoryAsNumbers = (
      threadIDsForChosenCategory as Array<number | string>
    ).map(Number);

    return currentPageThreadIDs.filter(
      id => !threadIDsForCategoryAsNumbers.includes(id)
    );
  }
);

/*
  If this returns 'null' fetch thread IDs for the category
 */
export const selectThreadsWithIDsForCurrentPage = createSelector(
  selectAllThreadsForChosenCategory,
  selectIDsForCurrentPage,
  (threads: Thread[], currentPageThreadIDs: number[] | null) => {
    if (!currentPageThreadIDs) return null;

    return threads.filter(thread => currentPageThreadIDs.includes(thread.id));
  }
);
