import { TestBed } from '@angular/core/testing';

import { PostCategoriesService } from './post-categories.service';

describe('PostCategoriesService', () => {
  let service: PostCategoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostCategoriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
