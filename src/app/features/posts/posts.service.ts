import { Injectable } from '@angular/core';
import { Category, Thread } from '@assets/dummy-data/posts';
import { SupabaseService } from '@core/services/supabase.service';
import Dictionary from '@shared/dictionary';

@Injectable()
export class PostsService {
  constructor(private supabase: SupabaseService) {
    this.fetchPostCategories().then(categories => {
      this.postCategories = categories;
    });
  }
  public postCategories: Category[] = [];

  public categoryThreads = new Dictionary<Thread[]>();

  async fetchPostCategories(): Promise<Category[]> {
    const { data: postCategories, error } = await this.supabase.client
      .from('post_categories')
      .select('*');

    if (postCategories && !error) {
      return postCategories as Category[];
    } else {
      throw 'Error fetching post categories';
    }
  }

  getSavedCategories() {
    return this.postCategories;
  }

  categoriesCached() {
    return !!this.postCategories.length;
  }

  async fetchCategoryThreads(categoryID: string) {
    const { data: categoryThreads, error } = await this.supabase.client
      .from('post_threads')
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

  getSavedCategoryThreads(categoryID: string) {
    return this.categoryThreads.getItem(categoryID);
  }

  threadsCached(categoryID: string): boolean {
    return this.categoryThreads.containsKey(categoryID);
  }
}
