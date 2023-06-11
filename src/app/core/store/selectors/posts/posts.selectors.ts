import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  PostsState,
  ThreadPostsState,
} from '@core/store/state/posts/posts.state';
import {
  adapter,
  initialThreadPostsState,
} from '@core/store/reducers/posts/posts.reducer';
import { Post } from '@posts/models/post';

export const featureKey = 'posts';

export const selectPostsState = createFeatureSelector<PostsState>(featureKey);

export const selectPostsIsLoading = createSelector(
  selectPostsState,
  (postsState: PostsState) => postsState.isLoading
);

export const selectThreadPostsStateForChosenThread = createSelector(
  selectPostsState,
  (postsState: PostsState) =>
    postsState.threadPosts[postsState.chosenThread] ?? initialThreadPostsState
);

export const selectPostsForChosenThread = createSelector(
  selectThreadPostsStateForChosenThread,
  (threadPostsState: ThreadPostsState) => threadPostsState.posts
);

export const {
  selectIds: selectPostIDsForChosenThread,
  selectEntities: selectPostEntities,
  selectAll: selectAllPostsForChosenThread,
  selectTotal: selectTotalPosts,
} = adapter.getSelectors(selectPostsForChosenThread);

export const selectPaginationStateForChosenThread = createSelector(
  selectThreadPostsStateForChosenThread,
  (threadPostsState: ThreadPostsState) => threadPostsState.pagination
);

/*
  If this returns 'null' fetch the post IDs for the thread
 */
const selectIDsForCurrentPage = createSelector(
  selectThreadPostsStateForChosenThread,
  (threadPostsState: ThreadPostsState) => {
    if (!threadPostsState.postIDs) return null;

    const postIDs = threadPostsState.postIDs;
    const pageSize = threadPostsState.pagination.pageSize;
    const currentPage = threadPostsState.pagination.currentPage;

    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = currentPage * pageSize - 1;

    return postIDs.slice(startIndex, endIndex);
  }
);

/*
  If this return 'null' fetch the post IDs for the thread, if it returns
  a non-empty array fetch posts for those IDs
*/
export const selectMissingPostIDs = createSelector(
  selectPostIDsForChosenThread,
  selectIDsForCurrentPage,
  (
    postIDsForChosenThread: number[] | string[],
    currentPagePostIDs: number[] | null
  ) => {
    if (!currentPagePostIDs) return null;

    const postIDsForThreadAsNumbers = (
      postIDsForChosenThread as Array<number | string>
    ).map(Number);

    return currentPagePostIDs.filter(
      id => !postIDsForThreadAsNumbers.includes(id)
    );
  }
);

/*
  If this returns 'null' fetch post IDs for the thread
 */
export const selectPostsWithIDsForCurrentPage = createSelector(
  selectAllPostsForChosenThread,
  selectIDsForCurrentPage,
  (posts: Post[], currentPagePostIDs: number[] | null) => {
    if (!currentPagePostIDs) return null;

    return posts.filter(post => currentPagePostIDs.includes(post.id));
  }
);
