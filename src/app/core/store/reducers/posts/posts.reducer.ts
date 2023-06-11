import { combineReducers, createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { Post } from '@posts/models/post';
import { ThreadPostsState } from '@core/store/state/posts/posts.state';
import * as postsActions from '@core/store/actions/posts/posts.actions';
import { DEFAULT_PAGE_SIZE } from '@assets/supabase-constants';

export const adapter: EntityAdapter<Post> = createEntityAdapter<Post>({
  sortComparer: (a, b) => a.id - b.id,
});

export const initialThreadPostsState: ThreadPostsState = {
  posts: adapter.getInitialState(),

  postIDs: null,

  pagination: {
    pageSize: DEFAULT_PAGE_SIZE,

    totalEntries: 1,

    currentPage: 1,
  },
};

const isLoadingReducer = createReducer(
  false,
  on(
    postsActions.requestPostIDsForThread,
    postsActions.requestPostsForIDs,
    () => true
  ),
  on(
    postsActions.receivePostIDsForThread,
    postsActions.receivePostsForIDs,
    () => false
  )
);

const chosenThreadReducer = createReducer(
  -1,
  on(postsActions.chooseThread, (_, { threadID }) => threadID)
);

const threadPostsByIDReducer = createReducer(
  {} as Record<number, ThreadPostsState>,
  on(
    postsActions.receivePostIDsForThread,
    (state, { postIDs, postCount, threadID }) => {
      const newState = { ...state };

      if (!newState[threadID]) {
        newState[threadID] = { ...initialThreadPostsState };
      }

      newState[threadID] = {
        ...newState[threadID],
        postIDs: postIDs,
        pagination: {
          ...newState[threadID].pagination,
          totalEntries: postCount,
        },
      };

      return newState;
    }
  ),
  on(postsActions.receivePostsForIDs, (state, { posts, threadID }) => {
    const newState = { ...state };

    if (!newState[threadID]) {
      newState[threadID] = { ...initialThreadPostsState };
    }

    newState[threadID] = {
      ...newState[threadID],
      posts: adapter.upsertMany(posts, newState[threadID].posts),
    };

    return newState;
  }),
  on(postsActions.changeCurrentPage, (state, { pageNumber, threadID }) => {
    const newState = { ...state };

    if (!newState[threadID]) {
      newState[threadID] = { ...initialThreadPostsState };
    }

    newState[threadID] = {
      ...newState[threadID],
      pagination: {
        ...newState[threadID].pagination,
        currentPage: pageNumber,
      },
    };

    return newState;
  })
);

// Create even more granular reducers for the nested properties
// and combine them using combineReducers()
export const postsReducer = combineReducers({
  isLoading: isLoadingReducer,
  chosenThread: chosenThreadReducer,
  threadPosts: threadPostsByIDReducer,
});
