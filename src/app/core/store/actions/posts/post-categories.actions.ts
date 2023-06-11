import { createAction, props } from '@ngrx/store';
import { Category } from '@posts/models/category';

export const requestCategoryIDs = createAction(
  '[Post Categories] Request Category IDs'
);

export const receiveCategoryIDs = createAction(
  '[Post Categories] Receive Category IDs',
  props<{ categoryIDs: number[]; categoryCount: number }>()
);

export const requestCategoriesForIDs = createAction(
  '[Post Categories] Request Categories For IDs',
  props<{ categoryIDs: number[] }>()
);

export const receiveCategoriesForIDs = createAction(
  '[Post Categories] Receive Categories For IDs',
  props<{ categories: Category[] }>()
);

export const changeCurrentPage = createAction(
  '[Post Categories] Change Current Page',
  props<{ pageNumber: number }>()
);
