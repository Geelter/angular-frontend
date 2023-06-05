import { Injectable } from '@angular/core';
import { SupabaseService } from '@core/services/supabase/supabase.service';
import { Post } from '@posts/models/post';
import { MsgService } from '@core/services/msg.service';
import * as supabaseConstants from '@assets/supabase-constants';

@Injectable()
export class PostsService {
  constructor(
    private supabase: SupabaseService,
    private messageService: MsgService
  ) {}

  async fetchPostsForThreadID(threadID: number): Promise<Post[]> {
    const { data: threadPosts, error } = await this.supabase.client
      .from(supabaseConstants.POST_TABLE)
      .select('id,thread_id,author_id,content')
      .eq('thread_id', threadID);

    if (threadPosts && !error) {
      return threadPosts as Post[];
    } else {
      this.messageService.showError('Error fetching posts', error?.message);
      throw new Error(
        'Error fetching threads for specified category. ' + error?.message,
        { cause: error?.details }
      );
    }
  }
}
