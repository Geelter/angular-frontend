import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProfilesState } from '@core/store/state/profiles.state';
import { adapter } from '@core/store/reducers/profiles.reducer';
import { Profile } from '@core/models/profile.model';
import { EntityPaginationState } from '@core/store/state/pagination.state';

const featureKey = 'profiles';

const selectProfilesState = createFeatureSelector<ProfilesState>(featureKey);

export const selectProfilesIsLoading = createSelector(
  selectProfilesState,
  (profilesState: ProfilesState) => profilesState.isLoading
);

const selectProfiles = createSelector(
  selectProfilesState,
  (profilesState: ProfilesState) => profilesState.profiles
);

const selectProfileIDs = createSelector(
  selectProfilesState,
  (profilesState: ProfilesState) => profilesState.profileIDs
);

// export const selectAuthenticated

export const {
  selectIds: selectProfileEntityIDs,
  selectEntities: selectProfileEntities,
  selectAll: selectAllProfiles,
  selectTotal: selectTotalProfiles,
} = adapter.getSelectors(selectProfiles);

export const selectProfilesPaginationState = createSelector(
  selectProfilesState,
  (profilesState: ProfilesState) => profilesState.pagination
);

export const selectProfileIDsForCurrentPage = createSelector(
  selectProfileIDs,
  selectProfilesPaginationState,
  (profileIDs: string[] | null, paginationState: EntityPaginationState) => {
    if (!profileIDs) return null;

    const pageSize = paginationState.pageSize;
    const currentPage = paginationState.currentPage;

    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = currentPage * pageSize - 1;

    return profileIDs.slice(startIndex, endIndex);
  }
);

export const selectMissingProfileIDs = (props: { profileIDs: string[] }) =>
  createSelector(selectProfileEntityIDs, entityProfileIDs => {
    const entityProfileIDsAsStrings = (
      entityProfileIDs as Array<number | string>
    ).map(String);

    return props.profileIDs.filter(
      id => !entityProfileIDsAsStrings.includes(id)
    );
  });

export const selectMissingProfileIDsForCurrentPage = createSelector(
  selectProfileEntityIDs,
  selectProfileIDsForCurrentPage,
  (
    entityProfileIDs: string[] | number[],
    currentPageProfileIDs: string[] | null
  ) => {
    if (!currentPageProfileIDs) return null;

    const entityProfileIDsAsStrings = (
      entityProfileIDs as Array<number | string>
    ).map(String);

    return currentPageProfileIDs.filter(
      id => !entityProfileIDsAsStrings.includes(id)
    );
  }
);

export const selectProfilesWithIDsForCurrentPage = createSelector(
  selectAllProfiles,
  selectProfileIDsForCurrentPage,
  (profiles: Profile[], currentPageProfileIDs: string[] | null) => {
    if (!currentPageProfileIDs) return null;

    return profiles.filter(profile =>
      currentPageProfileIDs.includes(profile.id)
    );
  }
);

export const selectProfilesForIDs = (props: { profileIDs: string[] }) =>
  createSelector(selectAllProfiles, profiles => {
    return profiles.filter(profile => props.profileIDs.includes(profile.id));
  });

export const selectProfileForID = (props: { profileID: string }) =>
  createSelector(selectAllProfiles, profiles => {
    return profiles.find(profile => profile.id === props.profileID);
  });
