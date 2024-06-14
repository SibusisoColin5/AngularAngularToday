import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LeaveDetails } from './leave-details.interface';
 
const Base_URL = "http://localhost:8080"


@Injectable({
  providedIn: 'root'
})
export class LeaveService {
   constructor(private http: HttpClient) { }
 
   // Method to apply leave
   applyLeave(leaveDetails:LeaveDetails): Observable<object> {
     return this.http.post<Object>(`${Base_URL}` + "/api/leaves/LeaveController/applyLeave", leaveDetails);
   }
  getLeaveDetails(): Observable<LeaveDetails[]> {
    return this.http.get<LeaveDetails[]>(`${Base_URL}` + "/api/leaves/LeaveController/getLeaveDetails");
  }
  //Updating The Status Of the User 
  updateLeaveRequestStatus(id: number, status: string): Observable<object> {
    return this.http.put<object>(`${Base_URL}/api/leaves/LeaveController/${id}/status`,status);
  }
  getUserById(id: number): Observable<LeaveDetails> {
    return this.http.get<LeaveDetails>(`${Base_URL}/api/leaves/LeaveController/${id}`);
  }
}
