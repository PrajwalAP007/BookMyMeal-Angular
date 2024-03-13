import { Injectable } from '@angular/core';
import {UpdatePass} from '../Modal/UpdatePassword';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UpdatePasswordService {
readonly ApiUrl='https://localhost:7028/api/User'
  constructor(private http:HttpClient) { }
  updatePassword(pass:UpdatePass){
this.http.put<UpdatePass>(`${this.ApiUrl}/UpdatePassword`,pass)
  }
}
