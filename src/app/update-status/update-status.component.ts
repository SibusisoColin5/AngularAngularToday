import { Component, OnInit } from '@angular/core';
import { LeaveDetails } from '../leave-details.interface';
import { LeaveService } from '../leave.service';


@Component({
  selector: 'app-update-status',
  templateUrl: './update-status.component.html',
  styleUrl: './update-status.component.css'
})
export class UpdateStatusComponent implements OnInit
 {

  id!: number;


  leaveDetails!: LeaveDetails[];
  isManager = true;

  constructor(private leaveService: LeaveService) {}

  ngOnInit(): void 
  {
    // throw new Error('Method not implemented.');

    this.leaveService.getLeaveDetails().subscribe((data: LeaveDetails[]) => {
      this.leaveDetails = data;
    }, error => {
      console.error('Error fetching leave requests:', error);
    });

    

    // this.leaveService.getUserById(this.id).subscribe(data => {this.leaveDetails})
    
  }
  updateStatus(index: number, newStatus: string): void {


    // this.leaveService.applyLeave(leave).subscribe((apply)=>{
    //   console.log(apply);
    //   console.log(leave)
    //   this.leaveForm.reset({})

    const leaveId = this.leaveDetails[index].id;
   
    this.leaveService.updateLeaveRequestStatus(leaveId,newStatus).subscribe(()=>
      {this.saveUpdatedLeaveDetails(index)})

    // const leaveId = this.leaveDetails[index].id;
    // this.leaveService.updateLeaveRequestStatus(leaveId, newStatus).subscribe(() => {
    //   this.saveUpdatedLeaveDetails(index);
    // }, error => {
    //   console.error('Error updating leave request status:', error);
    // });
  }
  // Method to save the updated leave details to the database
saveUpdatedLeaveDetails(index: number): void {
  const updatedLeaveDetail = this.leaveDetails[index];
  this.leaveService.updateLeaveRequestStatus(updatedLeaveDetail.id,
    updatedLeaveDetail.status).subscribe(()=>{console.log()})
  // this.leaveService.updateLeaveRequestStatus(updatedLeaveDetail.id,updatedLeaveDetail.status).subscribe(() => {
  //   console.log('Leave details updated and saved to the database successfully');
  // }, error => {
  //   console.error('Error saving updated leave details:', error);
  // });
}

}
