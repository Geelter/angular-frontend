import { createReducer, on } from '@ngrx/store';
import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Category } from '@posts/models/category';
import { PostCategoriesState } from '@core/store/state/posts/post-categories.state';
import * as postCategoriesActions from '@core/store/actions/posts/post-categories.actions';
import { DEFAULT_DATA_LIFESPAN } from '@assets/supabase-constants';

export const adapter: EntityAdapter<Category> = createEntityAdapter<Category>({
  sortComparer: false,
});

export const initialState: PostCategoriesState = adapter.getInitialState({
  lastFetchedAt: null,

  isLoading: false,
});

export const postCategoriesReducer = createReducer(
  initialState,
  on(postCategoriesActions.fetchCategories, state => {
    return {
      ...state,
      isLoading: true,
    };
  }),
  on(postCategoriesActions.upsertCategories, (state, { categories }) => {
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + DEFAULT_DATA_LIFESPAN);

    return adapter.upsertMany(categories, {
      ...state,
      lastFetchedAt: expiryDate,
      isLoading: false,
    });
  }),
  on(postCategoriesActions.fetchError, state => {
    return {
      ...state,
      isLoading: false,
    };
  }),
  on(postCategoriesActions.clearCategories, state => {
    return adapter.removeAll(state);
  })
);
