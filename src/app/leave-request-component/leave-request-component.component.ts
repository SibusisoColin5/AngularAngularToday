
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { ActivatedRoute } from '@angular/router';
// import { EmployeeLeaveService } from '../employee-leave-service.service';
// import { Component, OnInit } from '@angular/core';
// import { LeaveDetails } from '../leave-details';

// @Component({
//     selector: 'app-leave-request',
//     templateUrl: './leave-request-component.component.html',
//     styleUrls: ['./leave-request-component.component.css']
//   })
// export class LeaveRequestComponent implements OnInit {

//   private id: any;
//   private sub: any;
//   errorMsg: any;
//   isRequestEdit = false;

//   isLeaveRequestSelected = false;
//   selectedLeaveRequest: LeaveDetails;
//   selected_leave_msg: any;
//   requestApproveForm: FormGroup; // Declare as FormGroup
//   has_error = false;
//   approve_leave_update_msg: any;
//   submitted = false;

//   constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, 
//     private _employeeLeaveService: EmployeeLeaveService,selectedLeaveRequest:LeaveDetails) 
//   { 

   
//     this.selectedLeaveRequest = selectedLeaveRequest;
   
    

//   }

//   ngOnInit() {
//     this.routeId();
//   }

//   routeId() {
//     this.sub = this.route.params.subscribe(params => {
//       this.id = +params['id']; // (+) converts string 'id' to a number
//       this.getEmployeeLeaveById(this.id);
//     });
//   }

//   initRequestApproveForm() {
//     this.requestApproveForm = this.formBuilder.group({
//       leaveId: [this.selectedLeaveRequest.leaveId],
//       deniedReason: [this.selectedLeaveRequest.deniedReason],
    
//     });
//   }

//   toggleEdit() {
//     this.isRequestEdit = !this.isRequestEdit;
//     this.initRequestApproveForm();
//   }

//   get f() { return this.requestApproveForm.controls; }

//   onSubmit() {
//     this.submitted = true;

//     // stop here if form is invalid
//     if (this.requestApproveForm.invalid) {
//       return;
//     }
//     console.log('success ', this.requestApproveForm.value);
//     // this.requestApproveForm.patchValue({
//     //   leaveId
//     // });
//     this._employeeLeaveService.approveEmployeeLeave(this.requestApproveForm.value).subscribe((res: LeaveDetails) => {
//       this.has_error = false;
//       this.approve_leave_update_msg = 'Successfully Submitted';
//       this.selectedLeaveRequest = res;
//       this.requestApproveForm.reset();
//       this.submitted = false;
//     }, (error: { error: { message: String; }; }) => {
//       this.has_error = true;
//       this.approve_leave_update_msg = error.error.message;
//     });

//   }

//   getEmployeeLeaveById(id: number) {
//     if (id > 0) {
//       this._employeeLeaveService.getEmployeeLeaveById(id)
//         .subscribe(
//           (          data: LeaveDetails) => {
//             this.selectedLeaveRequest = data;
//             this.isLeaveRequestSelected = true;
//             // console.log('selectedEmployee data: ', data);
//           }, (error: String) => {
//             this.errorMsg = error;
//             this.selected_leave_msg = 'Oops ! Can\'t load selected Leave Request';
//           });
//     } else {
//       this.isLeaveRequestSelected = false;
//     }
//   }

//   // tslint:disable-next-line:use-life-cycle-interface
//   ngOnDestroy() {
//     this.sub.unsubscribe();
//   }

// }


import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EmployeeLeaveService } from '../employee-leave-service.service';
import { Component, OnInit } from '@angular/core';
import { LeaveDetails } from '../leave-details';
  




@Component({
    selector: 'app-leave-request',
    templateUrl: './leave-request-component.component.html',
    styleUrls: ['./leave-request-component.component.css']
})
export class LeaveRequestComponent implements OnInit {
  private id: any;
  private sub: any;
  errorMsg: any;
  isRequestEdit = false;

  isLeaveRequestSelected = false;
  selectedLeaveRequest: LeaveDetails | undefined;
  selected_leave_msg: any;
  requestApproveForm!: FormGroup; // Declare as FormGroup
  has_error = false;
  approve_leave_update_msg: any;
  submitted = false;

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, 
    private _employeeLeaveService: EmployeeLeaveService) { 
    this.initRequestApproveForm(); // Initialize form in constructor
  }

  ngOnInit() {
    this.routeId();
  }

  routeId() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      this.getEmployeeLeaveById(this.id);
    });
  }

  initRequestApproveForm() {
    this.requestApproveForm = this.formBuilder.group({
      leaveId: [this.selectedLeaveRequest?.leaveId],
      deniedReason: [this.selectedLeaveRequest?.deniedReason],
    });
  }

  toggleEdit() {
    this.isRequestEdit =!this.isRequestEdit;
    this.initRequestApproveForm();
  }

  get f() { return this.requestApproveForm?.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.requestApproveForm?.invalid) {
      return;
    }
    console.log('success ', this.requestApproveForm?.value);
    this._employeeLeaveService.approveEmployeeLeave(this.requestApproveForm?.value).subscribe((res: LeaveDetails) => {
      this.has_error = false;
      this.approve_leave_update_msg = 'Successfully Submitted';
      this.selectedLeaveRequest = res;
     this.requestApproveForm?.reset
      this.submitted = false;
    }, (error: { error: { message: String; }; }) => {
      this.has_error = true;
      this.approve_leave_update_msg = error.error.message;
    });
  }

  getEmployeeLeaveById(id: number) {
    if (id > 0) {
      this._employeeLeaveService.getEmployeeLeaveById(id)
      .subscribe(
          (data: LeaveDetails) => {
            this.selectedLeaveRequest = data;
            this.isLeaveRequestSelected = true;
          }, (error: String) => {
            this.errorMsg = error;
            this.selected_leave_msg = 'Oops Can\'t load selected Leave Request';
          });
    } else {
      this.isLeaveRequestSelected = false;
    }
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}