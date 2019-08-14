import { TestBed } from '@angular/core/testing';

import { ApiservicsService } from './apiservics.service';

describe('ApiservicsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiservicsService = TestBed.get(ApiservicsService);
    expect(service).toBeTruthy();
  });
});
