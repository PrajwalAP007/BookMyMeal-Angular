import { Component } from '@angular/core';
import { PreRemptionDetailsService } from '../Services/pre-remption-details.service'
import { redemptionDetails } from '../Modal/couponRedemptionDetails'

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CouponRedemptionService } from '../Services/coupon-redemption.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CouponRedemptionFormDialogComponent } from '../coupon-redemption-form-dialog/coupon-redemption-form-dialog.component';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-coupon-pre-redemption',
  templateUrl: './coupon-pre-redemption.component.html',
  styleUrls: ['./coupon-pre-redemption.component.css']
})
export class CouponPreRedemptionComponent {
  show = true
  constructor(private preRedemService: PreRemptionDetailsService, private couponRedeemService: CouponRedemptionService, private route: Router, public dialog: MatDialog,private _snackBar:MatSnackBar) {

  }

  RedemptionForm = new FormGroup({
    CouponNo: new FormControl('', [Validators.required])
  })

  couponNo: any;

  get couponNoValidator() {
    return this.RedemptionForm.get("CouponNo")
  }
  redeemCouponNumber: any;
  openRedeemDialog(couponNumber: string) {
    this.redeemCouponNumber = couponNumber
    let dialogref = this.dialog.open(CouponRedemptionFormDialogComponent, { data: { couponNumber: String(this.redeemCouponNumber) } });

  }
  // redeemCheck(){
  //   let couponNo:string=this.RedemptionForm.value['CouponNo'] as string
  //   this.couponRedeemService.isRedeem(couponNo).subscribe((result)=>{
  //     if(result===true){
  //       alert("Redemption Successfull")


  //       var toggle= document.getElementById("RedeemButton")
  //       if(toggle){
  //         toggle.innerHTML="data-dismiss='modal'"
  //       }
  //       this.route.navigate(['/app-coupon-post-redemption'])
  //     }
  //     else{
  //       alert("Invalid Coupon No")
  //     }
  //   },(error)=>{
  //     alert('Invalid CouponNo')
  //   })
  // }

  displayedColumns: string[] = ['Date', 'Day', 'EmployeeName', 'EmployeeId', 'CouponNo', 'RedemptionStatus', 'MealType', 'RedeemNow'];
  dataSource: any
  RedemptionList: redemptionDetails[] = [];
  couponNos: any;
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
  getRedemptionDetails() {
    debugger
    const jwtToken = localStorage.getItem('token');
    if (jwtToken) {

      const empIdfromLocal: any = localStorage.getItem('Empid')
      const empid: number = empIdfromLocal as number

      this.preRedemService.getpreRedemptionDetails(empid).subscribe((result) => {
        this.dataSource = result
        for (let items of this.dataSource) {
          this.couponNos = items.CouponNo
        }
        console.log(this.dataSource);

        if (this.dataSource[0] == null) {
     this.openSnackBar("You Dont have any Coupons right now","Ok")
        }
      })
    }

  }
  toggleForm() {
    this.show = !this.show
  }
  ngOnInit() {
    this.getRedemptionDetails();
  }
}
