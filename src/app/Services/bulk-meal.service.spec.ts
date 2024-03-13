import { TestBed } from '@angular/core/testing';

import { BulkMealService } from './bulk-meal.service';

describe('BulkMealService', () => {
  let service: BulkMealService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BulkMealService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
