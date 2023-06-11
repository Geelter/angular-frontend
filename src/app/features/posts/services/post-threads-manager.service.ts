import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import * as postThreadsSelectors from '@core/store/selectors/posts/post-threads.selectors';
import * as postThreadsActions from '@core/store/actions/posts/post-threads.actions';

@Injectable({
  providedIn: 'root',
})
export class PostThreadsManagerService {
  constructor(private store: Store) {}

  private reset$ = new Subject<void>();

  initialize(categoryID: number) {
    this.reset$.next();

    this.store.dispatch(postThreadsActions.chooseCategory({ categoryID }));

    this.store
      .select(postThreadsSelectors.selectMissingThreadIDs)
      .pipe(takeUntil(this.reset$))
      .subscribe(missingIDs => {
        if (!missingIDs) {
          this.store.dispatch(
            postThreadsActions.requestThreadIDsForCategory({ categoryID })
          );
        }

        if (missingIDs?.length) {
          this.store.dispatch(
            postThreadsActions.requestThreadsForIDs({
              threadIDs: missingIDs,
              categoryID: categoryID,
            })
          );
        }
      });
  }

  cleanUp() {
    this.reset$.next();
  }
}
