import { TestBed } from '@angular/core/testing';

import { PostThreadsDatabaseService } from './post-threads-database.service';

describe('PostThreadsDatabaseService', () => {
  let service: PostThreadsDatabaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostThreadsDatabaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
