import { Injectable } from '@angular/core';
import { HttpClient  } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  
//create variable to store the url of the server
   SERVER_URL = "http://localhost:4000";
  constructor(private http: HttpClient) { }
 //getEmployees() method to get the data from the server
   getEmployees(){
    return this.http.get(this.SERVER_URL+"/employee");
  }
  //getemployee by id
  getEmployeeById(id: any){
    return this.http.get(this.SERVER_URL+"/employee/"+id);
  }

  createEmployee(employee: any) {
    // throw new Error('Method not implemented.');
    return this.http.post(this.SERVER_URL+"/createEmployee",employee);
  }
  //delete employee by id with put method
  deleteEmployee(id: any){
    return this.http.put(this.SERVER_URL+"/deleteEmployee",{id:id});
  }
  //update employee by id with put method
  updateEmployee(employee: any){
    return this.http.put(this.SERVER_URL+"/updateEmployee",employee);
  }
}

