import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouponPostRedemptionComponent } from './coupon-post-redemption.component';

describe('CouponPostRedemptionComponent', () => {
  let component: CouponPostRedemptionComponent;
  let fixture: ComponentFixture<CouponPostRedemptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CouponPostRedemptionComponent]
    });
    fixture = TestBed.createComponent(CouponPostRedemptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
