import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Thread } from '../../models/thread';
import { NavigationService } from '@core/services/navigation.service';
import { Observable, take } from 'rxjs';
import { Store } from '@ngrx/store';
import {
  selectPostThreadsFetchDate,
  selectPostThreadsIsLoading,
  selectThreadsByCategory,
} from '@core/store/selectors/posts/post-threads.selectors';
import { fetchThreadsForCategory } from '@core/store/actions/posts/post-threads.actions';

@Component({
  selector: 'app-threads',
  templateUrl: './threads.component.html',
  styleUrls: ['./threads.component.scss'],
})
export class ThreadsComponent implements OnInit {
  constructor(
    private store: Store,
    private navigationService: NavigationService,
    private route: ActivatedRoute
  ) {}

  categoryID: number;

  threads$: Observable<Thread[]>;

  threadsAreLoading$: Observable<boolean>;

  threadsFetchDate$: Observable<Map<number, Date>>;

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.categoryID = +params.get('category_id')!;
    });

    this.threads$ = this.store.select(selectThreadsByCategory(this.categoryID));
    this.threadsAreLoading$ = this.store.select(selectPostThreadsIsLoading);
    this.threadsFetchDate$ = this.store.select(selectPostThreadsFetchDate);

    this.threadsFetchDate$.pipe(take(1)).subscribe(dates => {
      if (
        !dates.has(this.categoryID) ||
        dates.get(this.categoryID)! < new Date()
      ) {
        this.store.dispatch(
          fetchThreadsForCategory({ categoryID: this.categoryID })
        );
      }
    });
  }
}
