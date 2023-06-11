import { createAction, props } from '@ngrx/store';
import { Thread } from '@posts/models/thread';

export const chooseCategory = createAction(
  '[Posts Threads] Choose Category',
  props<{ categoryID: number }>()
);

export const requestThreadIDsForCategory = createAction(
  '[Post Threads] Request Thread IDs For Category',
  props<{ categoryID: number }>()
);

export const receiveThreadIDsForCategory = createAction(
  '[Post Threads] Receive Thread IDs For Category',
  props<{ threadIDs: number[]; threadCount: number; categoryID: number }>()
);

export const requestThreadsForIDs = createAction(
  '[Post Threads] Request Threads For IDs',
  props<{ threadIDs: number[]; categoryID: number }>()
);

export const receiveThreadsForIDs = createAction(
  '[Post Threads] Receive Threads For IDs',
  props<{ threads: Thread[]; categoryID: number }>()
);

export const changeCurrentPage = createAction(
  '[Post Threads] Change Current Page',
  props<{ pageNumber: number; categoryID: number }>()
);
