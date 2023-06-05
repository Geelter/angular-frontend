import { createAction, props } from '@ngrx/store';
import { Category } from '@posts/models/category';

export const fetchCategories = createAction(
  '[Post Categories] Fetch Categories'
);

export const upsertCategories = createAction(
  '[Post Categories] Upsert Categories',
  props<{ categories: Category[] }>()
);

export const clearCategories = createAction(
  '[Post Categories] Clear Categories'
);

export const fetchError = createAction(
  '[Post Categories] Categories Fetch Error'
);
