import { Injectable } from '@angular/core';
import { Customer, DialogData } from '../../../data-type';
import { Observable, of } from 'rxjs';
import { formateDate } from '../../formateDate';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  private customers: Customer[] = [
    {
      id: 1,
      dob: formateDate(new Date("2022-03-22")),
      name: "latika",
      email: "jaju.latika@gmail.com",
      mobile: "9898989898"
    },
    {
      id: 2,
      dob: formateDate(new Date("2022-03-22")),
      name: "lats",
      email: "jaju.latika@gmail.com",
      mobile: "9898989898"
    }
    ,
    {
      id: 3,
      dob: formateDate(new Date("2022-03-22")),
      name: "trupti",
      email: "jaju.latika@gmail.com",
      mobile: "9898989898"
    }
    ,
    {
      id: 4,
      dob: formateDate(new Date("2022-03-22")),
      name: "suraj",
      email: "jaju.latika@gmail.com",
      mobile: "9898989898"
    },
    {
      id: 5,
      dob: formateDate(new Date("2022-03-22")),
      name: "ayanssh",
      email: "jaju.latika@gmail.com",
      mobile: "9898989898"
    }
  ]
  
  constructor() { }

  getCustomers(){
    return this.customers;
  }
  addCustomer(custData:Customer){
    this.customers.push(custData)
  }
  editCustomer(){

  }
  // customerDetails(customerId: number):Observable<Customer>{
  //   return of (this.customers.filter((cust: Customer)=> cust.id === customerId)[0])
  // }

  customerDetails(customerId: number){
    console.log(customerId)
    const selectedCustomerDetails = this.customers.find((cust: Customer) => cust.id == customerId )
    console.log(selectedCustomerDetails)
    return selectedCustomerDetails
  }
}