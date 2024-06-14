import { Component, OnInit } from '@angular/core';
import { LeaveService } from '../leave.service';
import { LeaveDetails } from '../leave-details.interface';
import { Route } from '@angular/router';

@Component({
  selector: 'app-leave-details-list',
  templateUrl: './leave-details-list.component.html',
  styleUrl: './leave-details-list.component.css'
})
export class LeaveDetailsListComponent implements OnInit
{

  leaveDetailsArray!: LeaveDetails[];
  
  constructor(private leaveService: LeaveService ) {}

  ngOnInit(): void 
  {
    // this.leaveService.getLeaveDetails().subscribe(details => {
    //   this.leaveDetailsArray = details;
     this.leaveService.getLeaveDetails().subscribe(data => 
      {this.leaveDetailsArray = data});

  }
  fetchLeaveDetailById(id: number): void {
    this.leaveService.getUserById(id).subscribe(detail => {
      // Handle the fetched detail, e.g., display it in a modal or navigate to a detail view
      console.log(detail); // Placeholder for actual implementation
    }, error => {
      console.error('Error fetching leave detail:', error);
    });


  }

}
