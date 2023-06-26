import { Component, OnDestroy } from '@angular/core';
import { OnInit } from '@angular/core';
import { Category } from '../../models/category.model';
import { Store } from '@ngrx/store';
import {
  selectCategoriesPaginationState,
  selectCategoriesIsLoading,
  selectCategoriesWithIDsForCurrentPage,
} from '@core/store/selectors/posts/post-categories.selectors';
import { changeCurrentPage } from '@core/store/actions/posts/post-categories.actions';
import { Observable } from 'rxjs';
import { PostCategoriesManagerService } from '@posts/services/post-categories-manager.service';
import { EntityPaginationState } from '@core/store/state/pagination.state';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit, OnDestroy {
  constructor(
    private store: Store,
    private categoriesManagerService: PostCategoriesManagerService
  ) {}

  categoriesForCurrentPage$: Observable<Category[] | null>;

  categoriesAreLoading$: Observable<boolean>;

  categoriesPaginationState$: Observable<EntityPaginationState>;

  getPaginatorFirst(paginationState: EntityPaginationState): number {
    return (paginationState.currentPage - 1) * paginationState.pageSize;
  }

  onPageChange(event: { first: number; rows: number }) {
    const newPageNumber = event.first / event.rows + 1;

    this.store.dispatch(changeCurrentPage({ pageNumber: newPageNumber }));
  }

  ngOnInit() {
    this.categoriesManagerService.initialize();

    this.categoriesAreLoading$ = this.store.select(selectCategoriesIsLoading);
    this.categoriesForCurrentPage$ = this.store.select(
      selectCategoriesWithIDsForCurrentPage
    );
    this.categoriesPaginationState$ = this.store.select(
      selectCategoriesPaginationState
    );
  }

  ngOnDestroy() {
    this.categoriesManagerService.cleanUp();
  }
}
