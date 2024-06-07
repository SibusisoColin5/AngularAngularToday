import { LeaveType } from './leave-type'
import { Employee } from './employee';
export class LeaveDetails 
{
        leaveId: number;
        employee: Employee;
        leaveType: LeaveType;
        leaveReason: string;
        dateFrom: Date;
        dateTo: Date;
        approved: number;
        deniedReason: string;
        createdAt: Date;
        reviewedBy: Employee;
    
        constructor(leaveId:number,leaveReason:string,
            dateFrom:Date,dateTo:Date,approved:number,
            deniedReason:string,createdAt:Date,reviewedBy:Employee,Employee:Employee,leavetypeleave:LeaveType)
             {
            this.leaveId = leaveId;
            this.employee = Employee;
            this.leaveType = leavetypeleave;
            this.leaveReason = leaveReason;
            this.dateFrom = dateFrom;
            this.dateTo = dateTo;
            this.approved = approved;
            this.deniedReason = deniedReason;
            this.createdAt = createdAt;
            this.reviewedBy = reviewedBy;


        }


}






