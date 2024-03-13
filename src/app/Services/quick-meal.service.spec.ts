import { TestBed } from '@angular/core/testing';

import { QuickMealService } from './quick-meal.service';

describe('QuickMealService', () => {
  let service: QuickMealService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuickMealService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
