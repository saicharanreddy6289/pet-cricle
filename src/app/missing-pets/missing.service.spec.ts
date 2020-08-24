/*
 * Created by
 * Kadambur Srikanth Vishaali ( B00821049)
 */

import { TestBed } from '@angular/core/testing';

import { MissingService } from './missing.service';

describe('MissingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MissingService = TestBed.get(MissingService);
    expect(service).toBeTruthy();
  });
});
