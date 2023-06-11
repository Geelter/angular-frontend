import { TestBed } from '@angular/core/testing';

import { PostCategoriesManagerService } from './post-categories-manager.service';

describe('PostCategoriesManagerService', () => {
  let service: PostCategoriesManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostCategoriesManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
