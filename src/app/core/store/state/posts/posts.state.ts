import { Post } from '@posts/models/post';
import { EntityState } from '@ngrx/entity';

export interface PostsState extends EntityState<Post> {
  lastFetchedAt: Map<number, Date>;

  isLoading: boolean;

  chosenThread: number;
}
