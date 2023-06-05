import { Injectable } from '@angular/core';
import { SupabaseService } from '@core/services/supabase/supabase.service';
import { Thread } from '@posts/models/thread';
import { MsgService } from '@core/services/msg.service';
import * as supabaseConstants from '@assets/supabase-constants';

@Injectable()
export class PostThreadsService {
  constructor(
    private supabase: SupabaseService,
    private messageService: MsgService
  ) {}

  async fetchThreadsForCategoryID(categoryID: number): Promise<Thread[]> {
    const { data: categoryThreads, error } = await this.supabase.client
      .from(supabaseConstants.POST_THREAD_TABLE)
      .select('id,category_id,name,description')
      .eq('category_id', categoryID);

    if (categoryThreads && !error) {
      return categoryThreads as Thread[];
    } else {
      this.messageService.showError('Error fetching threads', error?.message);
      throw new Error(
        'Error fetching posts for specified thread. ' + error?.message,
        { cause: error?.details }
      );
    }
  }
}
