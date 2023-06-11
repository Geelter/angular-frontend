import { Injectable } from '@angular/core';
import { SupabaseService } from '@core/services/supabase/supabase.service';
import { Category } from '@posts/models/category';
import { MsgService } from '@core/services/msg.service';
import * as supabaseConstants from '@assets/supabase-constants';

@Injectable({
  providedIn: 'root',
})
export class PostCategoriesDatabaseService {
  constructor(
    private supabase: SupabaseService,
    private messageService: MsgService
  ) {}

  async fetchCategoryIDs(): Promise<[number[], number]> {
    const {
      data: categories,
      count,
      error,
    } = await this.supabase.client
      .from(supabaseConstants.POST_CATEGORY_TABLE)
      .select('id', { count: 'exact' });

    if (categories && !error) {
      const ids = categories?.map(category => category.id);

      return [ids as number[], count ? count : 0];
    } else {
      this.messageService.showError(
        'Error fetching category IDs',
        error?.message
      );
      throw new Error('Error fetching category IDs. ' + error?.message, {
        cause: error?.details,
      });
    }
  }

  // Consider returning the count here as well to periodically check for changes in the
  // number of posts. Alternatively use realtime to receive notifications about new posts
  async fetchCategoriesForIDs(categoryIDs: number[]): Promise<Category[]> {
    const { data: categories, error } = await this.supabase.client
      .from(supabaseConstants.POST_CATEGORY_TABLE)
      .select('id,name,description')
      .in('id', categoryIDs);

    if (categories && !error) {
      return categories as Category[];
    } else {
      this.messageService.showError(
        'Error fetching categories',
        error?.message
      );
      throw new Error(
        'Error fetching categories for specified IDs. ' + error?.message,
        { cause: error?.details }
      );
    }
  }
}
