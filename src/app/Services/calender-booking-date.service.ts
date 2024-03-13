import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CalenderBookingDateService {
readonly apiUrl='https://localhost:7028/api/Calender/getBookingDate'
readonly apiUrlOfEndDate='https://localhost:7028/api/Calender/getBookingDateEnd'
  constructor(private http:HttpClient) { }
  getBookingStartDate(id:number){

    var headers = new HttpHeaders().set("Authorization", `bearer ${localStorage.getItem('token')}`);
      return  this.http.get<{ date: string }>(`${this.apiUrl}?Empid=${id}`,{headers})
  }
  getBookingEndDate(id:number){

    var headers = new HttpHeaders().set("Authorization", `bearer ${localStorage.getItem('token')}`);
      return  this.http.get<{ date: string }>(`${this.apiUrlOfEndDate}?Empid=${id}`,{headers},)
  }
}
