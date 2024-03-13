import { Component } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import{ViewBookingService} from "../Services/view-booking.service";
import { jwtDecode } from 'jwt-decode';
import { CancelBookingService } from '../Services/cancel-booking.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-view-booking-history',
  templateUrl: './view-booking-history.component.html',
  styleUrls: ['./view-booking-history.component.css']
})
export class ViewBookingHistoryComponent {
  /**
   *
   */
  constructor(private viewBookingService:ViewBookingService,private cancelbookingservice:CancelBookingService,private _snackBar:MatSnackBar) {
  
    
  }
  displayedColumns: string[] = ['OrderId','OrderBookedFor', 'OrderType', 'BookingDate', 'BookingInitialDate','BookingEndDate','MealType','OrderStatus','CancelBooking'];
  dataSource : any;
getallBooking(){


    const empIdfromLocal:any= localStorage.getItem('Empid') 
    const empid :number=empIdfromLocal as number
  debugger
  this.viewBookingService.viewBooking(empid).subscribe((res)=>{
    console.log(res);

    
    this.dataSource=res

  })
}
openSnackBar(message: string, action: string) {
  this._snackBar.open(message, action);
}
isBookingExpired(bookingEndDate: string): boolean {
  const currentDate = new Date() ;
  currentDate.setHours(0, 0, 0, 0);
  const endDate = new Date(bookingEndDate);

  // Compare the BookingEndDate with the current date
 if (endDate < currentDate ){
  console.log(endDate , currentDate);
  
  return true
 }
 else{
  return false
 }
}
CancelBookingOfLunch(orderId:number){

  this.cancelbookingservice.cancelBoookingOfLunch(orderId).subscribe((result)=>{
    if(result){
      this.openSnackBar("Your Booking Cancelled Successfully", "Ok")


    }
    else{
      this.openSnackBar("Your Booking dont get cancelled", "Ok")

 
    }
  })
}

  ngOnInit(){
    this.getallBooking();
  }
}
