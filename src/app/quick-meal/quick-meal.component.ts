import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { QuickMealService } from '../Services/quick-meal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quick-meal',
  templateUrl: './quick-meal.component.html',
  styleUrls: ['./quick-meal.component.css']
})
export class QuickMealComponent {
  /**
   *
   */
  constructor(private quickMealService: QuickMealService,private route:Router) {

  }
  QuickMealForm = new FormGroup({
    Empid: new FormControl('', [Validators.required]),
    EmpidFor: new FormControl('', [Validators.required]),
  })
  get empIdValidator() {
    return this.QuickMealForm.get('Empid')
  }
  get empIdBookedForValidator() {
    return this.QuickMealForm.get('EmpidFor')
  }

  // QuickMealFormSubmit() {
  //   const jwtToken = localStorage.getItem('token');
 
  //     const empIdfromLocal:any= localStorage.getItem('Empid') 
  //     const empid :number=empIdfromLocal as number
  //     this.quickMealService.setQuickMeal({"EMPLOYEEIDBOOKEDBY":empid,"EMPLOYEEIDBOOKEDFOR":empid}).subscribe((res)=>{
  //       if(res!=null){
  //         this.route.navigate(['/app-coupon-pre-redemption'])
  //         alert("Booking Successfull")
          
  //       }
  //       else{
  //         alert("Booking Not Successed")
  //       }
  //     })
    
  // }

}
