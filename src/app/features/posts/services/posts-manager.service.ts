import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import * as postsSelectors from '@core/store/selectors/posts/posts.selectors';
import * as postsActions from '@core/store/actions/posts/posts.actions';

@Injectable({
  providedIn: 'root',
})
export class PostsManagerService {
  constructor(private store: Store) {}

  private reset$ = new Subject<void>();

  initialize(threadID: number) {
    this.reset$.next();

    this.store.dispatch(postsActions.chooseThread({ threadID }));

    this.store
      .select(postsSelectors.selectMissingPostIDs)
      .pipe(takeUntil(this.reset$))
      .subscribe(missingIDs => {
        if (!missingIDs) {
          this.store.dispatch(
            postsActions.requestPostIDsForThread({ threadID })
          );
        }

        if (missingIDs?.length) {
          this.store.dispatch(
            postsActions.requestPostsForIDs({
              postIDs: missingIDs,
              threadID: threadID,
            })
          );
        }
      });
  }

  cleanUp() {
    this.reset$.next();
  }
}
