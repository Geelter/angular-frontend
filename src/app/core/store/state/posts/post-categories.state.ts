import { Category } from '@posts/models/category';
import { EntityState } from '@ngrx/entity';

export interface PostCategoriesState extends EntityState<Category> {
  lastFetchedAt: Date | null;

  isLoading: boolean;
}
