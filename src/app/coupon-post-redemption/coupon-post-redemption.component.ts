import { Component ,ViewChild } from '@angular/core';
import{PostRemptionDetailsService} from '../Services/post-remption-details.service'
import { CountdownComponent, CountdownConfig, CountdownEvent, CountdownStatus } from 'ngx-countdown';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coupon-post-redemption',
  templateUrl: './coupon-post-redemption.component.html',
  styleUrls: ['./coupon-post-redemption.component.css']
})
export class CouponPostRedemptionComponent {
  /**
   *
   */
  constructor(private postRedeemService:PostRemptionDetailsService,private route:Router) {

  }

  @ViewChild('cd', { static: false }) private countdown: CountdownComponent|undefined; // By viewChild we are accesing the child component (CountdownComponent) into parent componenet CouponPostRedemptionComponent
    HiddenStatus:boolean = false
  displayedColumns: string[] = ['Date', 'Day', 'EmployeeName', 'EmployeeId','CouponNo','RedemptionStatus','MealType'];
  dataSource :any
  config: CountdownConfig = {
    demand: false, // Start the counter on demand
    leftTime: 2 * 60, // 15 minutes in seconds
    format: 'HH:mm:ss', // Format for display
    // notify: [900, 600, 300],
 // Notify events at 15 minutes, 10 minutes, and 5 minutes
  };

  handleEvent(event: CountdownEvent): void {
    // Handle events (e.g., 'start', 'stop', 'restart', 'pause', 'resume', 'notify', 'done')
    console.log('Event:', event);
    
    if (event.action === 'done') {
      // Handle the timer completion event
      this.HiddenStatus=true;
      this.route.navigate(['/app-home-page'])
      console.log('Timer completed!');
    }
  }
  counter = 0;

  getRedemptionDetails(){
    debugger
      const empIdfromLocal:any= localStorage.getItem('Empid') 
      const empid :number=empIdfromLocal as number
      this.postRedeemService.getpostRedemptionDetails(empid).subscribe((result)=>{
  this.dataSource=result
  console.log(this.dataSource);
  
      })

    
  }
  ngOnInit(){
    // this.startTimer()
    this.getRedemptionDetails()

  }
}
