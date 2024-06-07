
import { Employee } from './employee';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
// import { Constant } from '../constant/constant';
import { environment } from './environment';
// import { EmployeeLeave } from '../model/EmployeeLeave';

import { LeaveDetails } from './leave-details';

@Injectable()
export class EmployeeLeaveService {

  constructor(private http: HttpClient) { }

  errorHandler(error: HttpErrorResponse) {
    console.log('LeaveDetails api error ', error);
    return throwError(error);
  }

  getAllEmployeeLeaves(): Observable<any> {
    return this.http.get<LeaveDetails[]>(environment.apiUrl + '/rest/employee-leaves',
    {
      // params: {
      //   page: page,
      //   size: size,
      //   sort: sort
      // }
    })
      .pipe(catchError(this.errorHandler));
  }

  getEmployeeLeaveById(id:number): Observable<LeaveDetails> {
    return this.http.get<LeaveDetails>(environment.apiUrl + '/rest/employee-leaves/' + id)
      .pipe(catchError(this.errorHandler));
  }

  createEmployeeLeave(EmployeeLeaveData:string): Observable<LeaveDetails> {
    return this.http.post<LeaveDetails>(environment.apiUrl + '/rest/employee-leaves', EmployeeLeaveData)
      .pipe(catchError(this.errorHandler));
  }

  updateEmployeeLeave(EmployeeLeaveData:string, id:number): Observable<LeaveDetails> {
    return this.http.put<LeaveDetails>(environment.apiUrl + '/rest/employee-leaves/' + id, EmployeeLeaveData)
      .pipe(catchError(this.errorHandler));
  }

  approveEmployeeLeave(EmployeeLeaveData:string): Observable<LeaveDetails> {
    return this.http.put<LeaveDetails>(environment.apiUrl + '/rest/employee-leaves/approve-employee-leave', EmployeeLeaveData)
      .pipe(catchError(this.errorHandler));
  }

  getEmployeeLeavesBetweenDate(startDate: any, endDate: any): Observable<LeaveDetails[]> {
    return this.http.get<LeaveDetails[]>(environment.apiUrl + '/rest/employee-leaves/byDate',
    {
      params: {
        date1: startDate,
        date2: endDate
      }
    })
      .pipe(catchError(this.errorHandler));
  }
}
