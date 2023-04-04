import { Component } from '@angular/core';
import { PostsService } from '@posts/posts.service';
import { OnInit } from '@angular/core';
import { Category } from '@assets/dummy-data/posts';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  constructor(public postsService: PostsService) {}
  categories: Promise<Category[]>;

  ngOnInit() {
    if (this.postsService.categoriesCached()) {
      this.categories = new Promise<Category[]>(resolve => {
        resolve(this.postsService.getSavedCategories());
      });
    } else {
      this.categories = this.postsService.fetchPostCategories();
    }
  }
}
