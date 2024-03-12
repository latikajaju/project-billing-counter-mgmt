import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { Bill } from '../../../../data-type';
import { MatTableModule } from '@angular/material/table';


const BILL_DETAILS: Bill[] = [
  {id: 1, item: 'airpods', price: 8800, quantity:3, total: 1787},
  {id: 2, item: 'phone', price: 3000, quantity:2, total: 9898},
];
@Component({
  selector: 'app-bill-details',
  standalone: true,
  imports: [MatFormFieldModule, MatButtonModule, MatInputModule,MatCardModule, MatTableModule],
  templateUrl: './bill-details.component.html',
  styleUrl: './bill-details.component.scss'
})
export class BillDetailsComponent {
  displayedBillColumns: string[] = ['id', 'item', 'price', 'quantity', 'total'];
  dataSource = BILL_DETAILS;
}
