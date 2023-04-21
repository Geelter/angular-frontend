import { Component } from '@angular/core';
import { PostsService } from '@posts/posts.service';
import { OnInit } from '@angular/core';
import { Category } from '../../models/category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  constructor(public postsService: PostsService) {}
  categories: Promise<Category[]>;

  categoriesAreLoading: boolean;

  ngOnInit() {
    this.categoriesAreLoading = true;

    this.categories = this.postsService.getPostCategories().finally(() => {
      this.categoriesAreLoading = false;
    });
  }
}
