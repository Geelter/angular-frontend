import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as profilesActions from '@core/store/actions/profiles.actions';
import * as globalActions from '@core/store/actions/global.actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { from, of } from 'rxjs';
import { UserProfilesService } from '@core/services/user-profiles.service';

export const requestProfileIDs = createEffect(
  (
    actions$ = inject(Actions),
    profilesService = inject(UserProfilesService)
  ) => {
    return actions$.pipe(
      ofType(profilesActions.requestProfileIDs),
      switchMap(action =>
        from(profilesService.fetchProfileIDs()).pipe(
          map(([profileIDs, profileCount]) =>
            profilesActions.receiveProfileIDs({
              profileIDs,
              profileCount,
            })
          ),
          catchError(err =>
            of(globalActions.actionError({ error: err, action: action }))
          )
        )
      )
    );
  },
  { functional: true }
);

export const requestProfilesForIDs = createEffect(
  (
    actions$ = inject(Actions),
    profilesService = inject(UserProfilesService)
  ) => {
    return actions$.pipe(
      ofType(profilesActions.requestProfilesForIDs),
      switchMap(action =>
        from(profilesService.fetchProfilesForIDs(action.profileIDs)).pipe(
          map(profiles =>
            profilesActions.receiveProfilesForIDs({ profiles: profiles })
          ),
          catchError(err =>
            of(globalActions.actionError({ error: err, action: action }))
          )
        )
      )
    );
  },
  { functional: true }
);
