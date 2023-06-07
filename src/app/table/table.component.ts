import { Component,OnInit } from '@angular/core';
import{EmployeeService} from '../employee.service';
import { Router } from '@angular/router';
// import { Employee } from '../employee';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit{
  employees: any;
  constructor(private employeeService: EmployeeService,private router: Router) { }
  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe((data: any)=>{
      console.log(data);
      this.employees = data;
    }
    )
  }
  //editEmployee method to edit the employee details
  editEmployee(id: any){
    this.router.navigate(['edit',id]);
  }
  deleteEmployee(id: any){
    this.employeeService.deleteEmployee(id).subscribe((data: any)=>{
      console.log(data);
      this.ngOnInit();
    })
  }
}
