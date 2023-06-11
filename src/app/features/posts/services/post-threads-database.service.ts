import { Injectable } from '@angular/core';
import { SupabaseService } from '@core/services/supabase/supabase.service';
import { Thread } from '@posts/models/thread';
import { MsgService } from '@core/services/msg.service';
import * as supabaseConstants from '@assets/supabase-constants';

@Injectable({
  providedIn: 'root',
})
export class PostThreadsDatabaseService {
  constructor(
    private supabase: SupabaseService,
    private messageService: MsgService
  ) {}

  async fetchThreadIDsForCategoryID(
    categoryID: number
  ): Promise<[number[], number]> {
    const {
      data: threads,
      count,
      error,
    } = await this.supabase.client
      .from(supabaseConstants.POST_THREAD_TABLE)
      .select('id', { count: 'exact' })
      .eq('category_id', categoryID);

    if (threads && !error) {
      const ids = threads.map(thread => thread.id);

      return [ids as number[], count ? count : 0];
    } else {
      this.messageService.showError(
        'Error fetching thread IDs',
        error?.message
      );
      throw new Error(
        'Error fetching thread IDs for specified category. ' + error?.message,
        { cause: error?.details }
      );
    }
  }

  // Consider returning the count here as well to periodically check for changes in the
  // number of posts. Alternatively use realtime to receive notifications about new posts
  async fetchThreadsForIDs(threadIDs: number[]): Promise<Thread[]> {
    const { data: threads, error } = await this.supabase.client
      .from(supabaseConstants.POST_THREAD_TABLE)
      .select('id,category_id,name,description')
      .in('id', threadIDs);

    if (threads && !error) {
      return threads as Thread[];
    } else {
      this.messageService.showError('Error fetching threads', error?.message);
      throw new Error(
        'Error fetching threads for specified IDs. ' + error?.message,
        { cause: error?.details }
      );
    }
  }
}
