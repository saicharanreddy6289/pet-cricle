import { TestBed } from '@angular/core/testing';

import { PetdetailslistService } from './petdetailslist.service';

describe('PetdetailslistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PetdetailslistService = TestBed.get(PetdetailslistService);
    expect(service).toBeTruthy();
  });
});
