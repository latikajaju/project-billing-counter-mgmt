import { Component, Input, OnInit } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { customerDetails } from '../../data-type';


const CUST_DETAILS: customerDetails[] = [
  {id: 1, bill: '676768', date: '2022-2-12', amount: 8800, method:'UPI'},
  {id: 2, bill: '400768', date: '2022-2-12', amount: 700, method:'CARD'},
  {id: 3, bill: '634768', date: '2022-2-12', amount: 3433, method:'UPI'},
  {id: 4, bill: '6711', date: '2022-2-12', amount: 400, method:'CARD'},
  {id: 5, bill: '676722', date: '2022-2-12', amount: 3343, method:'UPI'}
];


@Component({
  selector: 'app-customer-details',
  standalone: true,
  imports: [MatTableModule,MatCardModule,MatGridListModule],
  templateUrl: './customer-details.component.html',
  styleUrl: './customer-details.component.scss'
})
export class CustomerDetailsComponent {
  displayedColumns: string[] = ['id', 'bill', 'date', 'amount', 'method'];
  dataSource = CUST_DETAILS;
}
