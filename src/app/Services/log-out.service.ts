import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LogOutService {
readonly apiUrl='https://localhost:7028/api/User'
  constructor(private http:HttpClient) { }
  
  logOut(){
    debugger
    var headers=new HttpHeaders().set("Authorization",`bearer ${localStorage.getItem('token')}`)
   return this.http.delete(this.apiUrl,{headers})
  }
}
