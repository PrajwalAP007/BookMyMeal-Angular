import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CancelBookingService {
readonly apiUrlOfLunch='https://localhost:7028/api/Booking/CancellBookingForLunch';
readonly apiUrlofDinner='https://localhost:7028/api/Booking/CancellBookingForDinner'
  constructor(private http:HttpClient) { }
  cancelBoookingOfLunch(orderId:number){
    var headers = new HttpHeaders().set("Authorization", `bearer ${localStorage.getItem('token')}`);

    return this.http.put(`${this.apiUrlOfLunch}?id=${orderId}`,{},{headers})
  }
  cancelBoookingOfDinner(orderId:number){
    var headers = new HttpHeaders().set("Authorization", `bearer ${localStorage.getItem('token')}`);

    return this.http.put(`${this.apiUrlofDinner}?id=${orderId}`,{},{headers})
  }
}
