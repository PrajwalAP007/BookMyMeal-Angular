import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouponPreRedemptionComponent } from './coupon-pre-redemption.component';

describe('CouponPreRedemptionComponent', () => {
  let component: CouponPreRedemptionComponent;
  let fixture: ComponentFixture<CouponPreRedemptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CouponPreRedemptionComponent]
    });
    fixture = TestBed.createComponent(CouponPreRedemptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
