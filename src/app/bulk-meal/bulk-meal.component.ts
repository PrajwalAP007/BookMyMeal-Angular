import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BulkMealService } from '../Services/bulk-meal.service';
import { Router } from '@angular/router';

import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-bulk-meal',
  templateUrl: './bulk-meal.component.html',
  styleUrls: ['./bulk-meal.component.css']
})
export class BulkMealComponent {
   isAdmin:boolean=false;
   Role:string=localStorage.getItem('Role') as string;

  constructor(private bulkmealService: BulkMealService, private router: Router, private _snackBar: MatSnackBar) {
    if (this.Role=='Admin') {
      this.isAdmin=false
    } else {
      this.isAdmin=true
      

    }

  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }


   
  BulkMealForm = new FormGroup({
    // Empid: new FormControl('', [Validators.required]),
    EmpidFor: new FormControl(''),
    InitialDate: new FormControl('', [Validators.required]),
    EndDate: new FormControl('', [Validators.required]),
    Meal: new FormControl('', [Validators.required])
  })

  get mealtypeValidator() {
    return this.BulkMealForm.get('Meal')
  }

  // get empIdBookedForValidator() {
  //   return this.BulkMealForm.get('EmpidFor')
  // }
  get InitialDateValidator() {
    return this.BulkMealForm.get('InitialDate')
  }
  get EndDateValidator() {
    return this.BulkMealForm.get('EndDate')
  }

  BulkMealFormSubmit() {
   
    
    var startDate = this.BulkMealForm.value['InitialDate'] as string
    var EndDate = this.BulkMealForm.value['EndDate'] as string
    let MealType = this.BulkMealForm.value['Meal'] as string
    debugger
    const jwtToken = localStorage.getItem('token');
    const empIdfromLocal: any = localStorage.getItem('Empid')
    const empid: number = empIdfromLocal as number

 if (this.isAdmin) 
 {
  var EmpidFor :number=Number(localStorage.getItem('Empid') )

  console.log(this.isAdmin);
  
 }
 else{
  var EmpidFor: number = Number(this.BulkMealForm.value['EmpidFor'])
 }
    if (jwtToken) {


      // Decode the token to get empid

      // Use empIdFromToken in your service call
      this.bulkmealService.setBulkOrder({
      
        "EMPLOYEEIDBOOKEDBY": empid,
        "EMPLOYEEIDBOOKEDFOR": EmpidFor,
        "BOOKINGINITIALDATE": startDate,
        "BOOKINGENDDATE": EndDate,
        "MealType": MealType

      }).subscribe((result) => {

        let condition: number = result as number
        if (condition > 0) {
 
          let OrderId: number = result as number
          localStorage.setItem('OrderId', OrderId.toString())
          this.openSnackBar("Booking Successful","Ok")
          this.router.navigate(['/app-coupon-pre-redemption'])
        }
      
      }, (error) => {
  
        this.openSnackBar("Booking Not Sucessful","Ok")


      }
      );
    }

  }

}
