import { combineReducers, createReducer, on } from '@ngrx/store';
import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Profile } from '@core/models/profile.model';
import * as profilesActions from '@core/store/actions/profiles.actions';
import { DEFAULT_PAGE_SIZE } from '@assets/supabase-constants';

export const adapter: EntityAdapter<Profile> = createEntityAdapter<Profile>({
  sortComparer: false,
});

const isLoadingReducer = createReducer(
  false,
  on(
    profilesActions.requestProfileIDs,
    profilesActions.requestProfilesForIDs,
    () => true
  ),
  on(
    profilesActions.receiveProfileIDs,
    profilesActions.receiveProfilesForIDs,
    () => false
  )
);

const authenticatedUserIDReducer = createReducer<string | null>(
  null,
  on(profilesActions.changeAuthenticatedUserID, (state, { userID }) => userID)
);

const profileIDsReducer = createReducer<string[] | null>(
  null,
  on(profilesActions.receiveProfileIDs, (state, { profileIDs }) => profileIDs)
);

const profilesReducer = createReducer(
  adapter.getInitialState(),
  on(profilesActions.receiveProfilesForIDs, (state, { profiles }) =>
    adapter.upsertMany(profiles, state)
  )
);

const paginationReducer = createReducer(
  {
    pageSize: DEFAULT_PAGE_SIZE,

    totalEntries: 1,

    currentPage: 1,
  },
  on(profilesActions.changeCurrentPage, (state, { pageNumber }) => {
    return {
      ...state,
      currentPage: pageNumber,
    };
  }),
  on(profilesActions.receiveProfileIDs, (state, { profileCount }) => {
    return {
      ...state,
      totalEntries: profileCount,
    };
  })
);

export const profilesStateReducer = combineReducers({
  profiles: profilesReducer,
  profileIDs: profileIDsReducer,
  authenticatedUserID: authenticatedUserIDReducer,
  isLoading: isLoadingReducer,
  pagination: paginationReducer,
});
