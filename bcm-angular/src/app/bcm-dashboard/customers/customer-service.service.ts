import { Injectable } from '@angular/core';
import { Customer, DialogData } from '../../../data-type';
import { Observable, of } from 'rxjs';
import { formateDate } from '../../formateDate';

@Injectable({
  providedIn: 'root',
})
export class CustomerServiceService {
  private customers: Customer[] = [
    {
      id: 1,
      dob: formateDate(new Date('2022-03-12')),
      name: 'latika',
      email: 'jaju.latika@gmail.com',
      mobile: '8098989898',
    },
    {
      id: 2,
      dob: formateDate(new Date('2022-03-21')),
      name: 'lats',
      email: 'jaju.lats@gmail.com',
      mobile: '7798989898',
    },
    {
      id: 3,
      dob: formateDate(new Date('2022-03-2')),
      name: 'trupti',
      email: 'jaju.trupti@gmail.com',
      mobile: '8898989898',
    },
    {
      id: 4,
      dob: formateDate(new Date('2022-03-9')),
      name: 'suraj',
      email: 'kot.suraj@gmail.com',
      mobile: '9898989898',
    },
    {
      id: 5,
      dob: formateDate(new Date('2022-03-22')),
      name: 'ayanssh',
      email: 'ayanssh.latika@gmail.com',
      mobile: '9898989877',
    },
  ];
  private nextId = this.customers.slice(-1)[0].id;
  constructor() {}

  getCustomers() {
    return this.customers;
  }
  addCustomer(custData: Customer) {
    custData.id = this.nextId;
    this.customers.push(custData);
  }
  editCustomer(updatedCustomer: Customer) {
    const custIndex = this.customers.findIndex(c => {
      if (!c.id) {
        console.error('Object in `customers` array is missing the `id` property:', c);
        return false; // Skip objects without an ID
      }
      return c.id === updatedCustomer.id;
    });
  
    if (custIndex !== -1) {
      this.customers[custIndex] = updatedCustomer; // Use custIndex to access the correct element
    } else {
      console.error('Customer not found for editing:', updatedCustomer.id);
    }
  }
  getNextId(): number {
    return this.nextId++;
  }

  filterByMobile(phoneNumber: string): Customer[] {
    if (!phoneNumber.trim()) {
      return this.customers;
    }
    return this.customers.filter((custMobile) =>
      custMobile.mobile.includes(phoneNumber)
    );
  }

  mobileNumberAlreadyExists(phoneNumber: string){
    if(this.customers.find((c:Customer)=>c.mobile == phoneNumber)){
      console.log('Mobile number already exists');
    }
  }
  customerDetails(customerId: number) {
    console.log(customerId);
    const selectedCustomerDetails = this.customers.find(
      (cust: Customer) => cust.id == customerId
    );
    console.log(selectedCustomerDetails);
    return selectedCustomerDetails;
  }
}
