import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders} from '@angular/common/http';
import {EmployeeDetails} from '../Modal/Authentication';
import {UpdatePass} from '../Modal/UpdatePassword'
import{LoginAuth} from '../Modal/Authentication'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http:HttpClient) {
   }
   private apiUrl='https://localhost:7028/api/User'
   setUserDetails(userDetail:EmployeeDetails){
    return this.http.post<EmployeeDetails>(`${this.apiUrl}/setUserDetail`,userDetail)
   }
   updatePassword(pass:UpdatePass){
   return this.http.put<UpdatePass>(`${this.apiUrl}/UpdatePassword`,pass)
  }
   header= new HttpHeaders().set("Authorization",`Bearer ${localStorage.getItem('token')}`)
  loginAuthentication(LoginObj:LoginAuth){
    debugger
    return this.http.post(`${this.apiUrl}/LoginAuthentication`,LoginObj,{responseType: 'text'})
  }
}
