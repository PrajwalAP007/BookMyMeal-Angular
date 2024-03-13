import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { QuickMeal } from '../Modal/QuickMeal';
@Injectable({
  providedIn: 'root'
})
export class QuickMealService {
  private apiUrl='https://localhost:7028/api/Booking/setBookOrder'
  constructor(private http:HttpClient) { }
  setQuickMeal(QuickMealDetails:QuickMeal){
    var headers=new HttpHeaders().set("Authorization", `bearer ${localStorage.getItem('token')}`)
    return this.http.post(this.apiUrl,QuickMealDetails,{headers})
  }
}
