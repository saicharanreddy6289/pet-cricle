import { TestBed } from '@angular/core/testing';

import { PetpostserviceService } from './petpostservice.service';

describe('PetpostserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PetpostserviceService = TestBed.get(PetpostserviceService);
    expect(service).toBeTruthy();
  });
});
