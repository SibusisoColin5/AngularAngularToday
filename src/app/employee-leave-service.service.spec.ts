import { TestBed } from '@angular/core/testing';

//import { EmployeeLeaveServiceService } from './employee-leave-service.service';
import { EmployeeLeaveService } from './employee-leave-service.service';

describe('EmployeeLeaveServiceService', () => {
  let service: EmployeeLeaveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeLeaveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
