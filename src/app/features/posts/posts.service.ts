import { Injectable } from '@angular/core';
import { SupabaseService } from '@core/services/supabase.service';
import { Category } from './models/category';
import { Thread } from './models/thread';
import { Post } from './models/post';
import Dictionary from '@shared/dictionary';
import { MsgService } from '@core/services/msg.service';
import * as supabaseConstants from '@assets/supabase-constants';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(
    private supabase: SupabaseService,
    private messageService: MsgService
  ) {}

  private postCategories: Category[] = [];

  private categoryThreads = new Dictionary<Thread[]>();

  private threadPosts = new Dictionary<Post[]>();

  private async fetchPostCategories(): Promise<Category[]> {
    console.log('fetchPostCategories called');
    const { data: postCategories, error } = await this.supabase.client
      .from(supabaseConstants.POST_CATEGORY_TABLE)
      .select('*');

    if (postCategories && !error) {
      const categories = postCategories as Category[];
      this.postCategories = categories;
      return categories;
    } else {
      throw 'Error fetching post categories';
    }
  }

  private postCategoriesCached() {
    return !!this.postCategories.length;
  }

  getPostCategories(): Promise<Category[]> {
    if (this.postCategoriesCached()) {
      return new Promise<Category[]>(resolve => {
        resolve(this.postCategories);
      });
    }
    return this.fetchPostCategories();
  }

  private async fetchWithCache<T>(
    cache: Dictionary<T[]>,
    cacheKey: string,
    fetchFunction: (fetchID: string) => Promise<T[]>
  ): Promise<T[]> {
    if (cache.containsKey(cacheKey)) {
      return Promise.resolve(cache.getItem(cacheKey));
    }
    console.log('No cache key match found');
    return fetchFunction.bind(this)(cacheKey);
  }

  private async fetchThreadsForCategoryID(
    categoryID: string
  ): Promise<Thread[]> {
    const { data: categoryThreads, error } = await this.supabase.client
      .from(supabaseConstants.POST_THREAD_TABLE)
      .select('*')
      .eq('category_id', categoryID);

    if (categoryThreads && !error) {
      const threads = categoryThreads as Thread[];
      this.categoryThreads.add(categoryID, threads);
      return threads;
    } else {
      this.messageService.showErrorConfirm(
        'Error fetching threads',
        '',
        'thread'
      );
      throw 'Error fetching threads for specified category';
    }
  }

  getThreadsForCategoryID(categoryID: string): Promise<Thread[]> {
    return this.fetchWithCache(
      this.categoryThreads,
      categoryID,
      this.fetchThreadsForCategoryID
    );
  }

  private async fetchPostsForThreadID(threadID: string): Promise<Post[]> {
    const { data: threadPosts, error } = await this.supabase.client
      .from(supabaseConstants.POST_TABLE)
      .select('*')
      .eq('thread_id', threadID);

    if (threadPosts && !error) {
      const posts = threadPosts as Post[];
      this.threadPosts.add(threadID, posts);
      return posts;
    } else {
      throw 'Error fetching posts for specified thread';
    }
  }

  getPostsForThreadID(threadID: string): Promise<Post[]> {
    return this.fetchWithCache(
      this.threadPosts,
      threadID,
      this.fetchPostsForThreadID
    );
  }
}
