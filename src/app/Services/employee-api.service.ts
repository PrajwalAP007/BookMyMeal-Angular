import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {EmployeeDetails} from '../Modal/EmployeeDetails'

@Injectable({
  providedIn: 'root'
})
export class EMployeeApiService {
private apiUrl:string='https://localhost:7105'
  constructor(private http:HttpClient) { }
  GetDetails():Observable<EmployeeDetails[]>
  {
    return this.http.get<EmployeeDetails[]>(`${this.apiUrl}/api/Employee`)
  }
  GetDetailsById(id:number):Observable<EmployeeDetails>
  {
    return this.http.get<EmployeeDetails>(`${this.apiUrl}/api/Employee/${id}`)
  }
  InsertData(employee:EmployeeDetails):Observable<EmployeeDetails>{
    return this.http.post<EmployeeDetails>(`${this.apiUrl}/api/Employee`,employee)
  }
  UpdateData(employee:EmployeeDetails):Observable<EmployeeDetails>{
return this.http.put<EmployeeDetails>(`${this.apiUrl}/api/${employee.empid}`,employee)
  }
  DeleteData(){
return this.http.delete<void>(`${this.apiUrl}/api/`)
  }
}
