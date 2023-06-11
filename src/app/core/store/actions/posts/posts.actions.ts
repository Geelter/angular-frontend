import { createAction, props } from '@ngrx/store';
import { Post } from '@posts/models/post';

export const chooseThread = createAction(
  '[Posts] Choose Thread',
  props<{ threadID: number }>()
);

export const requestPostIDsForThread = createAction(
  '[Posts] Request Post IDs For Thread',
  props<{ threadID: number }>()
);

export const receivePostIDsForThread = createAction(
  '[Posts] Receive Post IDs For Thread',
  props<{ postIDs: number[]; postCount: number; threadID: number }>()
);

export const requestPostsForIDs = createAction(
  '[Posts] Request Posts For IDs',
  props<{ postIDs: number[]; threadID: number }>()
);

export const receivePostsForIDs = createAction(
  '[Posts] Receive Posts For IDs',
  props<{ posts: Post[]; threadID: number }>()
);

export const changeCurrentPage = createAction(
  '[Posts] Change Current Page',
  props<{ pageNumber: number; threadID: number }>()
);
