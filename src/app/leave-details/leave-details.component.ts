import { Component } from '@angular/core';
import { LeaveService } from '../leave.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { response } from 'express';
import { error } from 'console';
import { Router } from '@angular/router';
import { LeaveDetails } from '../leave-details.interface';


@Component({
  selector: 'app-leave-details',
  templateUrl: './leave-details.component.html',
  styleUrl: './leave-details.component.css'
})
export class LeaveDetailsComponent {

  leaveForm!: FormGroup;



  constructor(private leaveService:LeaveService, private fb: FormBuilder, private router: Router){}
  ngOnInit(): void{
  this.leaveForm = this.fb.group({
    name: ['', Validators.required],
    leaveType: ['', Validators.required],
    startDate: ['', Validators.required],
    endDate: ['', Validators.required],
    reason: ['', Validators.required],

  });
}
applyLeave() {

  const leave: LeaveDetails = {
    ...this.leaveForm.value,
       status:"pending"

  }
   console.log(leave);
   this.leaveService.applyLeave(leave).subscribe((apply)=>{
    console.log(apply);
    console.log(leave)
    this.leaveForm.reset({})
    
    this.router.navigate([`app-leave-details-list`])
   });
  }
}








  