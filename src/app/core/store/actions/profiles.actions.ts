import { createAction, props } from '@ngrx/store';
import { Profile } from '@core/models/profile.model';

export const requestProfileIDs = createAction('[Profiles] Request Profile IDs');

export const receiveProfileIDs = createAction(
  '[Profiles] Receive Profile IDs',
  props<{ profileIDs: string[]; profileCount: number }>()
);

export const requestProfilesForIDs = createAction(
  '[Profiles] Request Profiles For IDs',
  props<{ profileIDs: string[] }>()
);

export const receiveProfilesForIDs = createAction(
  '[Profiles] Receive Profiles For IDs',
  props<{ profiles: Profile[] }>()
);

export const changeAuthenticatedUserID = createAction(
  '[Profiles] Change Authenticated User ID',
  props<{ userID: string | null }>()
);

export const changeCurrentPage = createAction(
  '[Profiles] Change Current Page',
  props<{ pageNumber: number }>()
);
