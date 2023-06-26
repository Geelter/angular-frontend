import { Profile } from '@core/models/profile.model';
import { EntityState } from '@ngrx/entity';
import { EntityPaginationState } from '@core/store/state/pagination.state';

export interface ProfilesState {
  profiles: EntityState<Profile>;

  profileIDs: string[] | null;

  authenticatedUserID: string | null;

  isLoading: boolean;

  pagination: EntityPaginationState;
}
