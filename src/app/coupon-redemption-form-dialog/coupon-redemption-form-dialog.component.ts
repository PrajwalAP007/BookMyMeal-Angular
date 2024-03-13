import { Component,Inject } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,

} from '@angular/material/dialog';
import {CouponRedemptionService} from '../Services/coupon-redemption.service';
import { Router } from '@angular/router';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-coupon-redemption-form-dialog',
  templateUrl: './coupon-redemption-form-dialog.component.html',
  styleUrls: ['./coupon-redemption-form-dialog.component.css']
})

export class CouponRedemptionFormDialogComponent {
  constructor (@Inject(MAT_DIALOG_DATA) public data: any,private route:Router,private couponRedeemService : CouponRedemptionService,
  private dialogRef : MatDialog,private _snackBar:MatSnackBar ) {}
  RedemptionForm=new FormGroup({
    CouponNo:new FormControl('',[Validators.required])
  })
  get couponNoValidator(){
    return this.RedemptionForm.get("CouponNo")
    }
    openSnackBar(message: string, action: string) {
      this._snackBar.open(message, action);
    }
  redeemCheck(){
    let couponNo:string=this.RedemptionForm.value['CouponNo'] as string
    this.couponRedeemService.isRedeem(couponNo).subscribe((result)=>{
      if(result===true){
        this.openSnackBar("Redemption Successfull","Ok")
  
        this.openSnackBar("Redemption Successfull","Ok")
        this.dialogRef.closeAll();
        this.route.navigate(['/app-coupon-post-redemption'])
      }
      else{
        this.openSnackBar("Invalid Coupon No","Ok")
      }
    },(error)=>{
      this.openSnackBar("Invalid Coupon No","Ok")

    })
  }




}
