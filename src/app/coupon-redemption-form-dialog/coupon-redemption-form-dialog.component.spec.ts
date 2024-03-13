import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouponRedemptionFormDialogComponent } from './coupon-redemption-form-dialog.component';

describe('CouponRedemptionFormDialogComponent', () => {
  let component: CouponRedemptionFormDialogComponent;
  let fixture: ComponentFixture<CouponRedemptionFormDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CouponRedemptionFormDialogComponent]
    });
    fixture = TestBed.createComponent(CouponRedemptionFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
