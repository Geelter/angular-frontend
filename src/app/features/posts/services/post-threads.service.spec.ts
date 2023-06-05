import { TestBed } from '@angular/core/testing';

import { PostThreadsService } from './post-threads.service';

describe('PostThreadsService', () => {
  let service: PostThreadsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostThreadsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
