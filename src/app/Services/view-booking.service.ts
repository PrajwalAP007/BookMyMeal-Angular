import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {viewBooking} from "../Modal/ViewBooking"
@Injectable({
  providedIn: 'root'
})
export class ViewBookingService {

private apiUrl='https://localhost:7028/api/Booking'
  constructor(private http:HttpClient) { }
  viewBooking(id:number){
    debugger
    var headers = new HttpHeaders().set("Authorization", `bearer ${localStorage.getItem('token')}`);
    return this.http.get(`${this.apiUrl}/${id}`,{headers})
  }
}
