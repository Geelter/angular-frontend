import { TestBed } from '@angular/core/testing';

import { PostCategoriesDatabaseService } from './post-categories-database.service';

describe('PostCategoriesDatabaseService', () => {
  let service: PostCategoriesDatabaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostCategoriesDatabaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
