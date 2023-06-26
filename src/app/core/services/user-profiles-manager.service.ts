import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import * as profilesSelectors from '@core/store/selectors/profiles.selectors';
import * as profilesActions from '@core/store/actions/profiles.actions';

@Injectable({
  providedIn: 'root',
})
export class UserProfilesManagerService {
  constructor(private store: Store) {}

  private reset$ = new Subject<void>();

  initialize(profileIDs: string[] | null = null) {
    this.reset$.next();

    const selector = profileIDs
      ? profilesSelectors.selectMissingProfileIDs({ profileIDs: profileIDs })
      : profilesSelectors.selectMissingProfileIDsForCurrentPage;

    this.store
      .select(selector)
      .pipe(takeUntil(this.reset$))
      .subscribe(missingIDs => {
        if (!missingIDs) {
          this.store.dispatch(profilesActions.requestProfileIDs());
        }

        if (missingIDs?.length) {
          this.store.dispatch(
            profilesActions.requestProfilesForIDs({
              profileIDs: missingIDs,
            })
          );
        }
      });
  }

  cleanUp() {
    this.reset$.next();
  }
}
