import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Router } from '@angular/router';
import { LogOutService } from '../Services/log-out.service';
import {CancelBookingService} from "../Services/cancel-booking.service";
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent {
  navBarType: string = 'default';
  /**
   *
   */
  constructor(private route: Router, private signOutService: LogOutService,private _snackBar:MatSnackBar,public dialog:MatDialog) {


  }
  ngOnInit(): void {
    //AFTER THE ROUTE CHANGES 
    this.route.events.subscribe((val: any) => {
      if (val.url) {

        if (localStorage.getItem('token')) {

          this.navBarType = 'mainNavBar'
        }
        else {

          this.navBarType = 'default';
        }
      }
    });
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
  LogOut() {
    this.signOutService.logOut().subscribe((val) => {
      if (val) {
        localStorage.clear();

        this.openSnackBar("Sign Out Successful", "Ok")

        this.route.navigate(['/app-user-login'])
      }

    })
  }
 
}
