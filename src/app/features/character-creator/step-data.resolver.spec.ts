import { TestBed } from '@angular/core/testing';

import { StepDataResolver } from './step-data.resolver';

describe('StepDataResolver', () => {
  let resolver: StepDataResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(StepDataResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
