import { Injectable } from '@angular/core';
import { Category } from '@assets/dummy-data/posts';
import { dummyCategories } from '@assets/dummy-data/posts';

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
}
