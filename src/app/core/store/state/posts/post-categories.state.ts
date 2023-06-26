import { Category } from '@posts/models/category.model';
import { EntityState } from '@ngrx/entity';
import { EntityPaginationState } from '@core/store/state/pagination.state';

export interface PostCategoriesState {
  categories: EntityState<Category>;

  categoryIDs: number[] | null;

  isLoading: boolean;

  pagination: EntityPaginationState;
}
