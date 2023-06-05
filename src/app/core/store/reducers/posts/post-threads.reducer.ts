import { createReducer, on } from '@ngrx/store';
import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Thread } from '@posts/models/thread';
import { PostThreadsState } from '@core/store/state/posts/post-threads.state';
import * as postThreadsActions from '@core/store/actions/posts/post-threads.actions';
import { updateFetchDateForKey } from '@core/store/helper-functions';

export const adapter: EntityAdapter<Thread> = createEntityAdapter<Thread>({
  sortComparer: false,
});

export const initialState: PostThreadsState = adapter.getInitialState({
  lastFetchedAt: new Map<number, Date>(),
  isLoading: false,
  chosenCategory: -1,
});

const threadsToRemove = (categoryID: number) => (thread: Thread) => {
  return thread.category_id === categoryID;
};

export const postThreadsReducer = createReducer(
  initialState,
  on(postThreadsActions.fetchThreadsForCategory, (state, { categoryID }) => {
    return {
      ...state,
      isLoading: true,
      chosenCategory: categoryID,
    };
  }),
  on(postThreadsActions.upsertThreads, (state, { threads }) => {
    const updatedDates = updateFetchDateForKey(
      state.lastFetchedAt,
      state.chosenCategory
    );

    return adapter.upsertMany(threads, {
      ...state,
      lastFetchedAt: updatedDates,
      isLoading: false,
      chosenCategory: -1,
    });
  }),
  on(postThreadsActions.clearThreadsForCategory, (state, { categoryID }) => {
    return adapter.removeMany(threadsToRemove(categoryID), state);
  })
);
