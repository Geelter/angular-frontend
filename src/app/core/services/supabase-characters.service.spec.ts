import { TestBed } from '@angular/core/testing';

import { SupabaseCharactersService } from './supabase-characters.service';

describe('SupabaseCharactersService', () => {
  let service: SupabaseCharactersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SupabaseCharactersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
