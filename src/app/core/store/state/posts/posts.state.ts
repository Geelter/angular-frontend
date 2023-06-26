import { Post } from '@posts/models/post.model';
import { EntityState } from '@ngrx/entity';
import { EntityPaginationState } from '@core/store/state/pagination.state';

export interface PostsState {
  threadPosts: { [id: number]: ThreadPostsState };

  isLoading: boolean;

  chosenThread: number;
}

export interface ThreadPostsState {
  posts: EntityState<Post>;

  postIDs: number[] | null;

  pagination: EntityPaginationState;
}
