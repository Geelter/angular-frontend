import { TestBed } from '@angular/core/testing';

import { UserProfilesManagerService } from './user-profiles-manager.service';

describe('UserProfilesManagerService', () => {
  let service: UserProfilesManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserProfilesManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
