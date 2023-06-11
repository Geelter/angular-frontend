import { combineReducers, createReducer, on } from '@ngrx/store';
import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Thread } from '@posts/models/thread';
import { CategoryThreadsState } from '@core/store/state/posts/post-threads.state';
import * as postThreadsActions from '@core/store/actions/posts/post-threads.actions';
import { DEFAULT_PAGE_SIZE } from '@assets/supabase-constants';

export const adapter: EntityAdapter<Thread> = createEntityAdapter<Thread>({
  sortComparer: (a, b) => a.id - b.id,
});

export const initialCategoryThreadsState: CategoryThreadsState = {
  threads: adapter.getInitialState(),

  threadIDs: null,

  expiryDate: null,

  pagination: {
    pageSize: DEFAULT_PAGE_SIZE,

    totalEntries: 1,

    currentPage: 1,
  },
};

const isLoadingReducer = createReducer(
  false,
  on(
    postThreadsActions.requestThreadIDsForCategory,
    postThreadsActions.requestThreadsForIDs,
    () => true
  ),
  on(
    postThreadsActions.receiveThreadIDsForCategory,
    postThreadsActions.receiveThreadsForIDs,
    () => false
  )
);

const chosenCategoryReducer = createReducer(
  -1,
  on(postThreadsActions.chooseCategory, (_, { categoryID }) => categoryID)
);

const categoryThreadsByIDReducer = createReducer(
  {} as Record<number, CategoryThreadsState>,
  on(
    postThreadsActions.receiveThreadIDsForCategory,
    (state, { threadIDs, threadCount, categoryID }) => {
      const newState = { ...state };

      if (!newState[categoryID]) {
        newState[categoryID] = { ...initialCategoryThreadsState };
      }

      newState[categoryID] = {
        ...newState[categoryID],
        threadIDs: threadIDs,
        pagination: {
          ...newState[categoryID].pagination,
          totalEntries: threadCount,
        },
      };

      return newState;
    }
  ),
  on(
    postThreadsActions.receiveThreadsForIDs,
    (state, { threads, categoryID }) => {
      const newState = { ...state };

      if (!newState[categoryID]) {
        newState[categoryID] = { ...initialCategoryThreadsState };
      }

      newState[categoryID] = {
        ...newState[categoryID],
        threads: adapter.upsertMany(threads, newState[categoryID].threads),
      };

      return newState;
    }
  ),
  on(
    postThreadsActions.changeCurrentPage,
    (state, { pageNumber, categoryID }) => {
      const newState = { ...state };

      if (!newState[categoryID]) {
        newState[categoryID] = { ...initialCategoryThreadsState };
      }

      newState[categoryID] = {
        ...newState[categoryID],
        pagination: {
          ...newState[categoryID].pagination,
          currentPage: pageNumber,
        },
      };

      return newState;
    }
  )
);

export const postThreadsReducer = combineReducers({
  isLoading: isLoadingReducer,
  chosenCategory: chosenCategoryReducer,
  categoryThreads: categoryThreadsByIDReducer,
});
