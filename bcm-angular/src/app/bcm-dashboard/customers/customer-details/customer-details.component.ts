import { Component, Input, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { Customer } from '../../../../data-type';
import { CustomerServiceService } from '../customer-service.service';
import { ActivatedRoute } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-customer-details',
  standalone: true,
  imports: [MatTableModule, MatCardModule, MatGridListModule, NgIf],
  templateUrl: './customer-details.component.html',
  styleUrl: './customer-details.component.scss',
})
export class CustomerDetailsComponent {
  displayedColumns: string[] = ['id', 'bill', 'date', 'amount', 'method'];
  customerDet?: Customer | undefined;
  customers?: Customer
  custId: number = -1;
  constructor(
    private customerService: CustomerServiceService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.custId = this.route.snapshot.params['id'];
    console.log(this.customerService.customerDetails(this.custId));
    // this.customerDet = this.customers
    
    // this.customerService.customerDetails(this.custId)
    // .subscribe((customer: Customer) => {
    //   this.customerDet = customer;
    //   console.log(this.customerDet);
    // });
    this.customers = this.customerService.customerDetails(this.custId)
    console.log(this.customers)
  }
}
