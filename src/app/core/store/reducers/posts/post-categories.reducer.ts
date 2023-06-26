import { combineReducers, createReducer, on } from '@ngrx/store';
import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Category } from '@posts/models/category.model';
import * as postCategoriesActions from '@core/store/actions/posts/post-categories.actions';
import { DEFAULT_PAGE_SIZE } from '@assets/supabase-constants';

export const adapter: EntityAdapter<Category> = createEntityAdapter<Category>({
  sortComparer: (a, b) => a.id - b.id,
});

const isLoadingReducer = createReducer(
  false,
  on(
    postCategoriesActions.requestCategoryIDs,
    postCategoriesActions.requestCategoriesForIDs,
    () => true
  ),
  on(
    postCategoriesActions.receiveCategoryIDs,
    postCategoriesActions.receiveCategoriesForIDs,
    () => false
  )
);

const categoryIDsReducer = createReducer<number[] | null>(
  null,
  on(
    postCategoriesActions.receiveCategoryIDs,
    (state, { categoryIDs }) => categoryIDs
  )
);

const paginationReducer = createReducer(
  {
    pageSize: DEFAULT_PAGE_SIZE,

    totalEntries: 1,

    currentPage: 1,
  },
  on(postCategoriesActions.changeCurrentPage, (state, { pageNumber }) => {
    return {
      ...state,
      currentPage: pageNumber,
    };
  }),
  on(postCategoriesActions.receiveCategoryIDs, (state, { categoryCount }) => {
    return {
      ...state,
      totalEntries: categoryCount,
    };
  })
);

const categoriesReducer = createReducer(
  adapter.getInitialState(),
  on(postCategoriesActions.receiveCategoriesForIDs, (state, { categories }) =>
    adapter.upsertMany(categories, state)
  )
);

export const postCategoriesReducer = combineReducers({
  categories: categoriesReducer,
  categoryIDs: categoryIDsReducer,
  isLoading: isLoadingReducer,
  pagination: paginationReducer,
});
