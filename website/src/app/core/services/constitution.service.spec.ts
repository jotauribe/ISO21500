import { TestBed } from '@angular/core/testing';

import { ConstitutionService } from './constitution.service';

describe('ConstitutionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConstitutionService = TestBed.get(ConstitutionService);
    expect(service).toBeTruthy();
  });
});
