import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { TermsCondtionComponent } from './terms-condtion/terms-condtion.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { HomePageComponent } from './home-page/home-page.component';
import { UpdatePasswordComponent } from './update-password/update-password.component';
import { ViewBookingHistoryComponent } from './view-booking-history/view-booking-history.component';
import { QuickMealComponent } from './quick-meal/quick-meal.component';
import { BulkMealComponent } from './bulk-meal/bulk-meal.component';
import { CouponPreRedemptionComponent } from './coupon-pre-redemption/coupon-pre-redemption.component';
import { CouponPostRedemptionComponent } from './coupon-post-redemption/coupon-post-redemption.component';

const routes: Routes = [
  {path:'',component:UserLoginComponent},

  {path:'app-coupon-post-redemption',component:CouponPostRedemptionComponent},
  {path:'app-coupon-pre-redemption',component:CouponPreRedemptionComponent},
{path:'app-side-menu',component:SideMenuComponent},
{path:'app-about-us',component:AboutUsComponent},
{path:'app-terms-condtion',component:TermsCondtionComponent},
{path:'app-privacy-policy',component:PrivacyPolicyComponent},

{path:'app-user-login',component:UserLoginComponent},
{path:'app-home-page',component:HomePageComponent},
{path:'app-update-password',component:UpdatePasswordComponent},
{path:'app-view-booking-history',component:ViewBookingHistoryComponent},
{path:'app-bulk-meal',component:BulkMealComponent},
{path:'app-coupon-pre-redemption',component:CouponPreRedemptionComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
