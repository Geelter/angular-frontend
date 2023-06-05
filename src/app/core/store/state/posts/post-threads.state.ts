import { Thread } from '@posts/models/thread';
import { EntityState } from '@ngrx/entity';

export interface PostThreadsState extends EntityState<Thread> {
  lastFetchedAt: Map<number, Date>;

  isLoading: boolean;

  chosenCategory: number;
}
