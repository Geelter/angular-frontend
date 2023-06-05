import { Injectable } from '@angular/core';
import { SupabaseService } from '@core/services/supabase/supabase.service';
import { Category } from '@posts/models/category';
import { MsgService } from '@core/services/msg.service';
import * as supabaseConstants from '@assets/supabase-constants';

@Injectable({
  providedIn: 'root',
})
export class PostCategoriesService {
  constructor(
    private supabase: SupabaseService,
    private messageService: MsgService
  ) {}
  async fetchPostCategories(): Promise<Category[]> {
    const { data: postCategories, error } = await this.supabase.client
      .from(supabaseConstants.POST_CATEGORY_TABLE)
      .select('id,name,description');

    if (postCategories && !error) {
      return postCategories as Category[];
    } else {
      this.messageService.showError(
        'Error fetching post categories',
        error?.message
      );
      throw new Error('Error fetching post categories. ' + error?.message, {
        cause: error?.details,
      });
    }
  }
}
