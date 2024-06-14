import { Component, OnInit } from '@angular/core';
import { LeaveService } from '../leave.service';
import { LeaveDetails } from '../leave-details.interface';

@Component({
  selector: 'app-leave-details-list',
  templateUrl: './leave-details-list.component.html',
  styleUrl: './leave-details-list.component.css'
})
export class LeaveDetailsListComponent implements OnInit
{

  leaveDetailsArray!: LeaveDetails[];
  
  constructor(private leaveService: LeaveService) {}

  ngOnInit(): void 
  {
     this.leaveService.getLeaveDetails().subscribe(data => 
      {this.leaveDetailsArray = data});

  }

}
