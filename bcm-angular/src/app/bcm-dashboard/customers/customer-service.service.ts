import { Injectable } from '@angular/core';
import { Bill, Customer, DialogData } from '../../../data-type';
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
      bills: [
        // Array of Bill objects
        { id: 101, item: 'Product A', price: 10.0, quantity: 2, total: 20.0 },
        { id: 102, item: 'Service B', price: 50.0, quantity: 1, total: 50.0 },
      ],
    },
    {
      id: 2,
      dob: formateDate(new Date('2022-03-21')),
      name: 'lats',
      email: 'jaju.lats@gmail.com',
      mobile: '7507843484',
      bills: [
        // Array of Bill objects
        { id: 201, item: 'Product A', price: 10.0, quantity: 2, total: 20.0 },
        { id: 202, item: 'Service B', price: 50.0, quantity: 1, total: 50.0 },
      ],
    },
    {
      id: 3,
      dob: formateDate(new Date('2022-03-2')),
      name: 'trupti',
      email: 'jaju.trupti@gmail.com',
      mobile: '9423008554',
      bills: [
        // Array of Bill objects
        { id: 301, item: 'Product A', price: 10.0, quantity: 2, total: 20.0 },
        { id: 302, item: 'Service B', price: 50.0, quantity: 1, total: 50.0 },
      ],
    },
    {
      id: 4,
      dob: formateDate(new Date('2022-03-9')),
      name: 'suraj',
      email: 'kot.suraj@gmail.com',
      mobile: '8446728621',
      bills: [
        // Array of Bill objects
        { id: 401, item: 'Product A', price: 10.0, quantity: 2, total: 20.0 },
        { id: 402, item: 'Service B', price: 50.0, quantity: 1, total: 50.0 },
      ],
    },
    {
      id: 5,
      dob: formateDate(new Date('2022-03-22')),
      name: 'ayanssh',
      email: 'ayanssh.latika@gmail.com',
      mobile: '9898989877',
      bills: [
        // Array of Bill objects
        { id: 501, item: 'Product A', price: 10.0, quantity: 2, total: 20.0 },
        { id: 502, item: 'Service B', price: 50.0, quantity: 1, total: 50.0 },
      ],
    },
  ];
  private nextId = this.customers.slice(-1)[0].id;
  some: any;
  constructor() {}

  getCustomers() {
    return this.customers;
  }
  getAllBills() {
    return this.getCustomers().flatMap((customer) => customer.bills);
  }
  addCustomer(custData: Customer) {
    custData.id = this.nextId;
    if(!this.isCustMobileAvailable(custData)){
      this.customers.push(custData);
    }
    else{
      console.log("Duplicate mobile number")
    }
  }

  isCustMobileAvailable(mobileNum: Customer){
   return this.customers.some((c)=> c.mobile == mobileNum.mobile)
  }

  editCustomer(updatedCustomer: Customer) {
    const custIndex = this.customers.findIndex((c) => {
      // if (!c.id) {
      //   console.error(
      //     'Object in `customers` array is missing the `id` property:',
      //     c
      //   );
      //   return false; // Skip objects without an ID
      // }
      console.log(updatedCustomer);
      return c.mobile == updatedCustomer.mobile;
    });

    if (custIndex !== -1) {
      this.customers[custIndex] = updatedCustomer; // Use custIndex to access the correct element
    } else {
      console.error('Customer not found for editing:', updatedCustomer.mobile);
    }
  }
  getNextId() {
    // return this.nextId++;
    this.nextId = this.customers[this.customers.length -1].id
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

  filterByBillNumber(billNumber: number): Bill[] {
    const allBills = this.getCustomers().flatMap((customer) => customer.bills);
    return allBills.filter((bill) => bill.id == billNumber);
  }

  mobileNumberAlreadyExists(phoneNumber: string) {
    if (this.customers.find((c: Customer) => c.mobile == phoneNumber)) {
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

  getDetailsByBill(billId: number): Customer | undefined {
    console.log(billId);
    const selectedCustomerDetails = this.customers.find((customer) =>
      customer.bills.some((bill) => bill.id == billId)
    );
    console.log(selectedCustomerDetails);
    return selectedCustomerDetails;
  }

  isMobileNumberExists(mobile: string): boolean {
    return this.customers.some((customer: Customer) => customer.mobile == mobile);
  }
  
}
