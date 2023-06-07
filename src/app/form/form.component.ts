import { Component, OnInit } from '@angular/core';
// import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit{

// employees: Employee[] = [];
id: any;
empname: any;
age: any;
gender: any;
address: any;
contactnumber: any;
//create a new employee array of abject. This object will be passed to the service.
// employees: any = [];
constructor(private employeeService: EmployeeService,private router: Router) { }
  ngOnInit(): void {
    this.getEmployeeId();
  }
// funtion to get id from the url
  getEmployeeId(){
    this.id = this.router.url.split('/')[2];
    console.log(this.id);
    if(this.id){
      this.employeeService.getEmployeeById(this.id).subscribe((data: any)=>{
        console.log(data);
        this.empname = data[0].empname;
        this.age = data[0].age;
        this.gender=data[0].gender
        this.address=data[0].address
        this.contactnumber=data[0].contactnumber
      })
    }
  }



  onSubmit(){
    // console.log(this.employees);
    //create a new employee object
    let employee = {
      empname: this.empname,
      age: this.age,
      gender:this.gender,
      address:this.address,
      contactnumber:this.contactnumber
    }
    
    this.employeeService.createEmployee(employee).subscribe( data =>{
      console.log(data);
      this.goToEmployeeList();
    }
    )
  }
  update(){
    console.log(this.id);
    
    let employee = {
      empid: this.id,
      empname: this.empname,
      age: this.age,
      gender:this.gender,
      address:this.address,
      contactnumber:this.contactnumber
    }
    console.log(employee);
    
    this.employeeService.updateEmployee(employee).subscribe( data =>{
      // console.log(data);
      this.goToEmployeeList();
    }
    )
  }



  goToEmployeeList() {
    this.router.navigate(['/table']);
  }

}