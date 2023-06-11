import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Thread } from '../../models/thread';
import { NavigationService } from '@core/services/navigation.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import {
  selectPaginationStateForChosenCategory,
  selectThreadsIsLoading,
  selectThreadsWithIDsForCurrentPage,
} from '@core/store/selectors/posts/post-threads.selectors';
import { changeCurrentPage } from '@core/store/actions/posts/post-threads.actions';
import { EntityPaginationState } from '@core/store/state/pagination.state';
import { PostThreadsManagerService } from '@posts/services/post-threads-manager.service';

@Component({
  selector: 'app-threads',
  templateUrl: './threads.component.html',
  styleUrls: ['./threads.component.scss'],
})
export class ThreadsComponent implements OnInit, OnDestroy {
  constructor(
    private store: Store,
    private route: ActivatedRoute,
    private navigationService: NavigationService,
    private thradsManagerService: PostThreadsManagerService
  ) {}

  categoryID: number;

  threadsForCurrentPage$: Observable<Thread[] | null>;

  threadsAreLoading$: Observable<boolean>;

  threadsPaginationState$: Observable<EntityPaginationState>;

  getPaginatorFirst(paginationState: EntityPaginationState): number {
    return (paginationState.currentPage - 1) * paginationState.pageSize;
  }

  onPageChange(event: { first: number; rows: number }) {
    const newPageNumber = event.first / event.rows + 1;

    this.store.dispatch(
      changeCurrentPage({
        pageNumber: newPageNumber,
        categoryID: this.categoryID,
      })
    );
  }
  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.categoryID = +params.get('category_id')!;
    });
    this.thradsManagerService.initialize(this.categoryID);

    this.threadsAreLoading$ = this.store.select(selectThreadsIsLoading);
    this.threadsForCurrentPage$ = this.store.select(
      selectThreadsWithIDsForCurrentPage
    );
    this.threadsPaginationState$ = this.store.select(
      selectPaginationStateForChosenCategory
    );
  }

  ngOnDestroy() {
    this.thradsManagerService.cleanUp();
  }
}
