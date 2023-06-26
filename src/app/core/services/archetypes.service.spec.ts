import { TestBed } from '@angular/core/testing';

import { ArchetypesService } from './archetypes.service';

describe('ArchetypesService', () => {
  let service: ArchetypesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArchetypesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
