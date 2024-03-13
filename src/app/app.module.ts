import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { TermsCondtionComponent } from './terms-condtion/terms-condtion.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http'

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {ReactiveFormsModule} from '@angular/forms';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { FullCalendarModule } from '@fullcalendar/angular';
import { UpdatePasswordComponent } from './update-password/update-password.component';
import { ViewBookingHistoryComponent } from './view-booking-history/view-booking-history.component';
import { QuickMealComponent } from './quick-meal/quick-meal.component';
import { BulkMealComponent } from './bulk-meal/bulk-meal.component';
import { CouponPreRedemptionComponent } from './coupon-pre-redemption/coupon-pre-redemption.component';

import {MatSelectModule} from '@angular/material/select';
import { CouponPostRedemptionComponent } from './coupon-post-redemption/coupon-post-redemption.component';


import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatCardModule} from '@angular/material/card';
import { CouponRedemptionFormDialogComponent } from './coupon-redemption-form-dialog/coupon-redemption-form-dialog.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CountdownModule } from 'ngx-countdown';



@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    SideMenuComponent,
    TermsCondtionComponent,
    PrivacyPolicyComponent,
    UserLoginComponent,
    UserRegistrationComponent,
    HomePageComponent,
    UpdatePasswordComponent,
    ViewBookingHistoryComponent,
    QuickMealComponent,
    BulkMealComponent,
    CouponPreRedemptionComponent,
    CouponPostRedemptionComponent,
    CouponRedemptionFormDialogComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    ReactiveFormsModule,
    FullCalendarModule,
    MatButtonModule,
    MatSelectModule,
    MatCardModule,
    MatDialogModule,
    CountdownModule,
    MatSnackBarModule
 

  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
