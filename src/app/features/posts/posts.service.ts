import { Injectable } from '@angular/core';
import { Category } from '@assets/dummy-data/posts';
import { dummyCategories } from '@assets/dummy-data/posts';

@Injectable()
export class PostsService {
  constructor() {
    this.postCategories = this.fetchPostCategories();
  }
  private postCategories: Category[];
  getPostCategories(): Category[] {
    if (!this.postCategories.length) {
      this.fetchPostCategories();
    }
    return this.postCategories;
  }
  private fetchPostCategories(): Category[] {
    return dummyCategories;
  }
}
