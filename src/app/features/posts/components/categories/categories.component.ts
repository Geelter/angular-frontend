import { Component } from '@angular/core';
import { dummyCategories } from '@assets/dummy-data/posts';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent {
  categories = dummyCategories;
}
