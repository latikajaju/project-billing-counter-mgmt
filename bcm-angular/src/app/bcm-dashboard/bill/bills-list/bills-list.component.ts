import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { FormControl, FormsModule } from '@angular/forms';
import { CustomerServiceService } from '../../customers/customer-service.service';
import { Bill, Customer } from '../../../../data-type';
import { NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-bills-list',
  standalone: true,
  imports: [MatFormFieldModule, MatButtonModule, MatInputModule,MatCardModule, MatTableModule,FormsModule, NgIf, RouterModule ],
  templateUrl: './bills-list.component.html',
  styleUrl: './bills-list.component.scss'
})
export class BillsListComponent {
  mobileSearchControl = new FormControl('') 
  billNumberSearchControl = new FormControl()
  dataSource = new MatTableDataSource<Bill>();
  displayedColumns: string[] = ['id', 'item', 'price', 'quantity', 'total'];
  customers?: Customer | undefined;
  customerName?: string;
  customerEmail?:string;  
  customerDOB?: string;  
  constructor( private customerS: CustomerServiceService){}

  ngOnInit(){
    console.log(this.billNumberSearchControl)
    this.dataSource.data = this.customerS.getAllBills()    
    console.log(this.dataSource.data)
  }

  serachByMobile(){
    console.log("called")
    const searchMobile = this.mobileSearchControl.value;
    if(searchMobile){
      console.log(searchMobile);
      const customers = this.customerS.filterByMobile(searchMobile)
      if (customers) {
        console.log(customers)
        const bills = customers.flatMap(customer => customer.bills)
        this.dataSource.data = bills; // Assign filtered bills to dataSource
        const customerDetails = customers[0];
        this.customerName = customerDetails?.name;
        this.customerEmail = customerDetails?.email;
        this.customerDOB  = customerDetails?.dob;
      }
      console.log(this.dataSource.data)
    }
  }

  searchByBillNumber(){
    console.log("bill number")
    const searchBillNum = this.billNumberSearchControl.value;
    console.log(searchBillNum)
    if(searchBillNum){
      const filteredBills  = this.customerS.filterByBillNumber(searchBillNum)
      this.dataSource.data = filteredBills;
    }
  }
}
