import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { Bill, Customer } from '../../../../data-type';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { CustomerServiceService } from '../../customers/customer-service.service';
import { NgIf } from '@angular/common';


// const BILL_DETAILS: Bill
// custId: number[] = [
//   {id: 1, item: 'airpods', price: 8800, quantity:3, total: 1787},
//   {id: 2, item: 'phone', price: 3000, quantity:2, total: 9898},
// ];
@Component({
  selector: 'app-bill-details',
  standalone: true,
  imports: [MatFormFieldModule, MatButtonModule, MatInputModule, MatCardModule, MatTableModule, NgIf ],
  templateUrl: './bill-details.component.html',
  styleUrl: './bill-details.component.scss'
})
export class BillDetailsComponent {
  displayedBillColumns: string[] = ['id', 'item', 'price', 'quantity', 'total'];
  dataSource = new MatTableDataSource<Bill>();
  billId: number = -1
  customers?: Customer | undefined
  
  constructor(private route:ActivatedRoute, private customerService: CustomerServiceService){}

  ngOnInit(){
    this.billId = this.route.snapshot.params['id']
    // console.log(this.customerService.getDetailsByBill(this.billId));
    this.customers = this.customerService.getDetailsByBill(this.billId)
    if(this.customers?.bills){
      this.dataSource.data = this.customers.bills
    }
  }

  calculateTotalCost() {
    let total = 0;
    let gst: number = 18;
    console.log(this.dataSource.data.map((invoice)=>invoice.total).reduce((acc,val)=> acc+val ,  0))
    total = this.dataSource.data.map((invoice)=>invoice.total).reduce((acc,val)=> acc+val ,  0) 
    let grandTotal = (total*10)/100 + total
    return grandTotal;
  }
}
