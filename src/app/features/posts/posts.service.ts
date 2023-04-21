import { Injectable } from '@angular/core';
import { Category, Post, Thread } from '@assets/dummy-data/posts';
import { SupabaseService } from '@core/services/supabase.service';
import Dictionary from '@shared/dictionary';

@Injectable()
export class PostsService {
  constructor(private supabase: SupabaseService) {
    this.fetchPostCategories().then(categories => {
      this.postCategories = categories;
    });
  }
  private postCategories: Category[] = [];

  private categoryThreads = new Dictionary<Thread[]>();

  private threadPosts = new Dictionary<Post[]>();

  private async fetchPostCategories(): Promise<Category[]> {
    const { data: postCategories, error } = await this.supabase.client
      .from('post_category')
      .select('*');

    if (postCategories && !error) {
      return postCategories as Category[];
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

  private async fetchThreadsForCategoryID(
    categoryID: string
  ): Promise<Thread[]> {
    const { data: categoryThreads, error } = await this.supabase.client
      .from('post_thread')
      .select('*')
      .eq('category_id', categoryID);

    if (categoryThreads && !error) {
      const threads = categoryThreads as Thread[];
      this.categoryThreads.add(categoryID, threads);
      return threads;
    } else {
      throw 'Error fetching threads for specified category';
    }
  }

  private threadsCachedForCategoryID(categoryID: string): boolean {
    return this.categoryThreads.containsKey(categoryID);
  }

  getThreadsForCategoryID(categoryID: string): Promise<Thread[]> {
    if (this.threadsCachedForCategoryID(categoryID)) {
      return new Promise<Thread[]>(resolve => {
        resolve(this.categoryThreads.getItem(categoryID));
      });
    }
    return this.fetchThreadsForCategoryID(categoryID);
  }

  private async fetchPostsForThreadID(threadID: string): Promise<Post[]> {
    const { data: threadPosts, error } = await this.supabase.client
      .from('post')
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

  private postsCachedForThreadID(threadID: string): boolean {
    return this.threadPosts.containsKey(threadID);
  }

  getPostsForThreadID(threadID: string): Promise<Post[]> {
    if (this.postsCachedForThreadID(threadID)) {
      return new Promise<Post[]>(resolve => {
        resolve(this.threadPosts.getItem(threadID));
      });
    }
    return this.fetchPostsForThreadID(threadID);
  }
}
