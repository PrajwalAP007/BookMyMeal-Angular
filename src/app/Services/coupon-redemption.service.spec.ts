import { TestBed } from '@angular/core/testing';

import { CouponRedemptionService } from './coupon-redemption.service';

describe('CouponRedemptionService', () => {
  let service: CouponRedemptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CouponRedemptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
