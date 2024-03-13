import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { QuickMealService } from '../Services/quick-meal.service';
import { CalenderBookingDateService } from '../Services/calender-booking-date.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { MatCalendarCellCssClasses } from '@angular/material/datepicker';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  isActive: boolean = false;
  StartDate: any;
  EndDate: any;

  currentDate = new Date()
  nextDate: any = this.currentDate.setDate(this.currentDate.getDate() + 1)

  constructor(
    private route: Router,
    private quickMealService: QuickMealService,
    private calenderBookingService: CalenderBookingDateService,
    private _snackBar: MatSnackBar

  ) {

  }


  fetchBookingStartDate() {
    const empIdfromLocal: any = localStorage.getItem('Empid');
    const empid: number = empIdfromLocal as number;

    this.calenderBookingService.getBookingStartDate(empid).subscribe((result) => {
      const data = result.date;


      // Convert Date to string before storing in localStorage
      localStorage.setItem('StartDate', data);

    });
  }

  fetchBookingEndDate() {
    const empIdfromLocal: any = localStorage.getItem('Empid');
    const empid: number = empIdfromLocal as number;

    this.calenderBookingService.getBookingEndDate(empid).subscribe((result) => {
      const data = result.date;
      
      localStorage.setItem('EndDate', data);
    });
  }
  blockedDates: string[] = [
    '2024-01-26', '2024-03-22', '2024-04-04', '2024-04-07', '2024-04-14',
    '2024-04-22', '2024-05-05', '2024-06-29', '2024-07-29', '2024-08-15',
    '2024-09-19', '2024-09-28', '2024-10-02', '2024-10-23', '2024-10-24',
    '2024-11-12', '2024-11-27', '2023-12-25'
  ]
  startDates = localStorage.getItem('StartDate');
  endDates = localStorage.getItem('EndDate');

  public calendarOptions: CalendarOptions = {

    initialView: 'dayGridMonth',
    height: '550px', // Adjust the height as needed
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',

    },
    weekends: false,
    plugins: [dayGridPlugin],
    events: [
      // Add booked date as a separate event
      {

        id: 'booked-date',
        start: `${this.startDates}`,
        end: `${this.endDates}`,
        rendering: 'background',
        color: 'green',
        title: 'Booked Date'
      },
    ],
    eventSources: [
      // Add blocked dates using a function
      (fetchInfo, successCallback) => {
        successCallback(this.blockedDates.map(date => ({
          id: 'blocked-date',
          start: date,
          rendering: 'background',
          color: 'red',
          title: 'Blocked Date'
        })));
      }
    ],
    

  };

  // blockDate(blockedDate: string,BookDate:string, calendarApi: any) {
  //   const blockedDateObj = new Date(blockedDate);
  //   const bookedDateObj = new Date(BookDate);

  //   if (blockedDateObj && bookedDateObj) {
  //     calendarApi.addEvent({
  //       id: 'blocked-date',
  //       start: blockedDateObj,
  //       end: blockedDateObj,
  //       rendering: 'background',
  //       color: 'red'
  //     });

  //     calendarApi.addEvent({
  //       id: 'booked-date',
  //       start: bookedDateObj,
  //       end: bookedDateObj,
  //       rendering: 'background',
  //       color: 'green'
  //     });
  //   }

  // }




  MealTypeForm = new FormGroup({
    Meal: new FormControl('', [Validators.required])
  })
  get mealtypeValidator() {
    return this.MealTypeForm.get('Meal')
  }
  toggleQuickMeal() {
    this.route.navigate(['/app-quick-meal'])
  }
  toggleBulkMeal() {
    this.route.navigate(['/app-bulk-meal'])
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
  QuickMealFormSubmit() {
    const jwtToken = localStorage.getItem('token');
    if (jwtToken) {
      const empIdfromLocal: any = localStorage.getItem('Empid')
      const empid: number = empIdfromLocal as number
      let MealType: string = this.MealTypeForm.value['Meal'] as string
      this.quickMealService.setQuickMeal({ "EMPLOYEEIDBOOKEDBY": empid, "EMPLOYEEIDBOOKEDFOR": empid, "MealType": MealType }).subscribe((res) => {
        if (res != null) {
          let OrderId: number = res as number
          localStorage.setItem('OrderId', OrderId.toString())
          this.openSnackBar("Booking Successful", "Ok")
        }

      }, (error) => {
        this.openSnackBar("Can't book your booking now. Possible Reasons would be: 1.You are trying to book on holiday.", "Ok")
      })
    }
  }


  getActiveStatus(): boolean {
    debugger
    let currentTime = new Date();
    let CurrentHour = currentTime.getHours();
    if (CurrentHour >= 20) {
      return this.isActive = true
    }
    else { return this.isActive = false }
  }




  ngOnInit() {
    this.getActiveStatus();
    this.fetchBookingStartDate();
    this.fetchBookingEndDate();
  }


}


