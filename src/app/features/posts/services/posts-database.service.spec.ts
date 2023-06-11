import { TestBed } from '@angular/core/testing';

import { PostsDatabaseService } from './posts-database.service';

describe('PostsDatabaseService', () => {
  let service: PostsDatabaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostsDatabaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
