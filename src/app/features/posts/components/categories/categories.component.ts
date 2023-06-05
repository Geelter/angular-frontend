import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Category } from '../../models/category';
import { Store } from '@ngrx/store';
import {
  selectAllCategories,
  selectPostCategoriesFetchDate,
  selectPostCategoriesIsLoading,
} from '@core/store/selectors/posts/post-categories.selectors';
import { fetchCategories } from '@core/store/actions/posts/post-categories.actions';
import { Observable, take } from 'rxjs';
import { selectError } from '@core/store/selectors/global.selectors';
import { MsgService } from '@core/services/msg.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  constructor(private store: Store, private messageService: MsgService) {}
  categories$: Observable<Category[]>;

  categoriesAreLoading$: Observable<boolean>;

  categoriesFetchDate$: Observable<Date | null>;

  ngOnInit() {
    this.categories$ = this.store.select(selectAllCategories);
    this.categoriesAreLoading$ = this.store.select(
      selectPostCategoriesIsLoading
    );

    this.categoriesFetchDate$ = this.store.select(
      selectPostCategoriesFetchDate
    );

    this.categoriesFetchDate$.pipe(take(1)).subscribe(date => {
      if (!date || date < new Date()) {
        this.store.dispatch(fetchCategories());
      }
    });

    this.store.select(selectError).subscribe(error => {
      if (error) {
        this.messageService.showErrorConfirm(
          error.name,
          error.message,
          'handleError'
        );
      }
    });
  }
}
