import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import * as postCategoriesSelectors from '@core/store/selectors/posts/post-categories.selectors';
import * as postCategoriesActions from '@core/store/actions/posts/post-categories.actions';

@Injectable({
  providedIn: 'root',
})
export class PostCategoriesManagerService {
  constructor(private store: Store) {}

  private reset$ = new Subject<void>();

  initialize() {
    this.reset$.next();

    this.store
      .select(postCategoriesSelectors.selectMissingCategoryIDs)
      .pipe(takeUntil(this.reset$))
      .subscribe(missingIDs => {
        if (!missingIDs) {
          this.store.dispatch(postCategoriesActions.requestCategoryIDs());
        }

        if (missingIDs?.length) {
          this.store.dispatch(
            postCategoriesActions.requestCategoriesForIDs({
              categoryIDs: missingIDs,
            })
          );
        }
      });
  }

  cleanUp() {
    this.reset$.next();
  }
}
