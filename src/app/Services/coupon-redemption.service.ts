import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {couponNoCheck} from'../Modal/couponRedemption'
@Injectable({
  providedIn: 'root'
})
export class CouponRedemptionService {
readonly apiUrl='https://localhost:7028/api/PreCoupon'
  constructor(private http:HttpClient) { 
    
  }
  isRedeem(couponNo:string){
    var headers = new HttpHeaders().set("Authorization", `bearer ${localStorage.getItem('token')}`);
    return this.http.post(`${this.apiUrl}/${couponNo}`,{},{headers})
  }

}
