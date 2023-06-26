import { Injectable } from '@angular/core';
import { SupabaseService } from '@core/services/supabase/supabase.service';
import { Post } from '@posts/models/post.model';
import { MsgService } from '@core/services/msg.service';
import * as supabaseConstants from '@assets/supabase-constants';

@Injectable({
  providedIn: 'root',
})
export class PostsDatabaseService {
  constructor(
    private supabase: SupabaseService,
    private messageService: MsgService
  ) {}

  async fetchPostIDsForThreadID(threadID: number): Promise<[number[], number]> {
    const {
      data: postIDs,
      count,
      error,
    } = await this.supabase.client
      .from(supabaseConstants.POST_TABLE)
      .select('id', { count: 'exact' })
      .eq('thread_id', threadID);

    if (postIDs && !error) {
      const ids = postIDs.map(post => post.id);

      return [ids as number[], count ? count : 0];
    } else {
      this.messageService.showError('Error fetching post IDs', error?.message);
      throw new Error(
        'Error fetching post IDs for specified thread. ' + error?.message,
        { cause: error?.details }
      );
    }
  }

  // Consider returning the count here as well to periodically check for changes in the
  // number of posts. Alternatively use realtime to receive notifications about new posts
  async fetchPostsForIDs(postIDs: number[]): Promise<Post[]> {
    const { data: posts, error } = await this.supabase.client
      .from(supabaseConstants.POST_TABLE)
      .select('id,thread_id,author_id,content')
      .in('id', postIDs);

    if (posts && !error) {
      return posts as Post[];
    } else {
      this.messageService.showError('Error fetching posts', error?.message);
      throw new Error(
        'Error fetching posts for specified IDs. ' + error?.message,
        { cause: error?.details }
      );
    }
  }
}
