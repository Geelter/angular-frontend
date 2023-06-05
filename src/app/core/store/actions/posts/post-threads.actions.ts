import { createAction, props } from '@ngrx/store';
import { Thread } from '@posts/models/thread';

export const fetchThreadsForCategory = createAction(
  '[Post Threads] Fetch Threads For Category',
  props<{ categoryID: number }>()
);

export const upsertThreads = createAction(
  '[Post Threads] Upsert Threads',
  props<{ threads: Thread[] }>()
);

export const clearThreadsForCategory = createAction(
  '[Post Threads] Clear Categories',
  props<{ categoryID: number }>()
);
