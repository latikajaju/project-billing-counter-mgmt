import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { Bill, Customer } from '../../../../data-type';
import { CustomerServiceService } from '../customer-service.service';
import { ActivatedRoute } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-customer-details',
  standalone: true,
  imports: [MatTableModule, MatCardModule, MatGridListModule, NgIf, NgFor],
  templateUrl: './customer-details.component.html',
  styleUrl: './customer-details.component.scss',
})
export class CustomerDetailsComponent {
  displayedColumns: string[] = ['id', 'item', 'price', 'quantity', 'total'];
  customerDet?: Customer;
  customers?: Customer | undefined
  custId: number = -1;
  dataSource = new MatTableDataSource<Bill>();
  constructor(
    private customerService: CustomerServiceService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.custId = this.route.snapshot.params['id'];
    console.log(this.customerService.customerDetails(this.custId));
    
    
    // this.customerService.customerDetails(this.custId)
    // .subscribe((customer: Customer) => {
    //   this.customerDet = customer;
    //   console.log(this.customerDet);
    // });
    this.customers = this.customerService.customerDetails(this.custId)
    console.log(this.customers)
    if(this.customers?.bills){
      this.dataSource.data = this.customers.bills
    }else {
      // Handle case where customer or bills might be undefined or null
      console.error('Customer or bills data not available');
    }
  }
}
