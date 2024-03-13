import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {BulkMeal} from '../Modal/BulkMeal';
@Injectable({
  providedIn: 'root'
})
export class BulkMealService {
private apiUrl='https://localhost:7028/api/Booking/setBulkOrder'
  constructor(private http:HttpClient) { }
  setBulkOrder(bulkmeal:BulkMeal){
    debugger
    var headers = new HttpHeaders().set("Authorization", `bearer ${localStorage.getItem('token')}`);
    console.log(headers); // Add this line for debugging
    return this.http.post(this.apiUrl, bulkmeal, { headers });
  }
}
