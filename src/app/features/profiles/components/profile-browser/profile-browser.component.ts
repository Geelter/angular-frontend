import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import {
  selectProfilesPaginationState,
  selectProfilesIsLoading,
  selectProfilesWithIDsForCurrentPage,
} from '@core/store/selectors/profiles.selectors';
import { changeCurrentPage } from '@core/store/actions/profiles.actions';
import { EntityPaginationState } from '@core/store/state/pagination.state';
import { UserProfilesManagerService } from '@core/services/user-profiles-manager.service';
import { Profile } from '@core/models/profile.model';

@Component({
  selector: 'app-profile-browser',
  templateUrl: './profile-browser.component.html',
  styleUrls: ['./profile-browser.component.scss'],
})
export class ProfileBrowserComponent {
  constructor(private store: Store) {}
}
