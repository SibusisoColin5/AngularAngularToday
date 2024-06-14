import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LeaveDetails } from './leave-details.interface';
 
const Base_URL = "http://localhost:8080"


@Injectable({
  providedIn: 'root'
})
export class LeaveService {


   
  // private apiUrl = 'http://localhost:8080/LeaveController';

  // constructor(private http: HttpClient) 
  // {}
  
  // getLeaveDetails(): Observable<any[]> {
  //   return this.http.get<any[]>(`${this.apiUrl}/getAllLeaveDetails`);
  // }

  // getLeaveById(id: number): Observable<any> {
  //   return this.http.get<any>(`${this.apiUrl}/getLeaveById/${id}`);
  // }

  // applyLeave(leaveDetails: any): Observable<any> {
  //   return this.http.post<any>(`${this.apiUrl}/applyLeave`, leaveDetails);
  // }

  // updateLeaveDetails(id: number, leaveDetails: any): Observable<any> {
  //   return this.http.put<any>(`${this.apiUrl}/updateLeaveDetails/${id}`, leaveDetails);
  // }

  // getAllActiveLeaves(): Observable<any[]> {
  //   return this.http.get<any[]>(`${this.apiUrl}/active`);
  // }


   constructor(private http: HttpClient) { }
 
   // Method to apply leave
   applyLeave(leaveDetails:LeaveDetails): Observable<object> {
     return this.http.post<Object>(`${Base_URL}` + "/api/leaves/LeaveController/applyLeave", leaveDetails);
   }


  getLeaveDetails(): Observable<LeaveDetails[]> {
    return this.http.get<LeaveDetails[]>(`${Base_URL}` + "/api/leaves/LeaveController/getLeaveDetails");
  }

   // Add other methods as needed for CRUD operations


}
