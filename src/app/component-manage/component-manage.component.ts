import { Component, OnInit } from '@angular/core';
//import { LeaveService } from './leave.service';
import { LeaveService } from '../leave.service';
import { LeaveDetails } from '../leave-details.interface';
import { get } from 'http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-component-manage',
  templateUrl: './component-manage.component.html',
  styleUrl: './component-manage.component.css'
})
export class ComponentManageComponent implements OnInit
{
  //leaveDetails = []; // Assume this is populated from your backend

  leaveDetails!: LeaveDetails[];

   isManager = true;

  constructor(private leaveService: LeaveService, private router: Router) {}

  ngOnInit(): void 
  {
    // Initialize leaveDetails here

    this.leaveService.getLeaveDetails().subscribe((data: LeaveDetails[]) => {
      this.leaveDetails = data;
    }, error => {
      console.error('Error fetching leave requests:', error);
    });
  }

  updateStatus(index: number, newStatus: string): void {
    this.leaveDetails[index].status = newStatus;
    const leaveId = this.leaveDetails[index].id;
    this.leaveService.updateLeaveRequestStatus(leaveId, newStatus).subscribe(() => {
      // Refresh the list or notify the user of success
    }, error => {
     
    });
  }
 }

