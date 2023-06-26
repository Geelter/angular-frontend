import { Thread } from '@posts/models/thread.model';
import { EntityState } from '@ngrx/entity';
import { EntityPaginationState } from '@core/store/state/pagination.state';

export interface PostThreadsState {
  categoryThreads: { [id: number]: CategoryThreadsState };

  isLoading: boolean;

  chosenCategory: number;
}

export interface CategoryThreadsState {
  threads: EntityState<Thread>;

  threadIDs: number[] | null;

  pagination: EntityPaginationState;
}
