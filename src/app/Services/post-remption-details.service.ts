import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PostRemptionDetailsService {

  constructor(private http:HttpClient) { }
  readonly apiUrl='https://localhost:7028/api/PostCouponControlller'
  getpostRedemptionDetails(id:number){
    var headers=new HttpHeaders().set("Authorization",`bearer ${localStorage.getItem('token')}`)
return this.http.get(`${this.apiUrl}/${id}`,{headers})
  }
}
