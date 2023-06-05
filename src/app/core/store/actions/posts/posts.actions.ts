import { createAction, props } from '@ngrx/store';
import { Post } from '@posts/models/post';

export const fetchPostsForThread = createAction(
  '[Posts] Fetch Posts For Thread',
  props<{ threadID: number }>()
);

export const upsertPosts = createAction(
  '[Posts] Upsert Posts',
  props<{ posts: Post[] }>()
);

export const clearPostsForThread = createAction(
  '[Posts] Clear Posts For Thread',
  props<{ threadID: number }>()
);
