import { TestBed } from '@angular/core/testing';

import { PostThreadsManagerService } from './post-threads-manager.service';

describe('PostThreadsManagerService', () => {
  let service: PostThreadsManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostThreadsManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
