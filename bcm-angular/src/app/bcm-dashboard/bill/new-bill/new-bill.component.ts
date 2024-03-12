import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Bill } from '../../../../data-type';
import { MatTableModule } from '@angular/material/table';


const BILL_DETAILS: Bill[] = [
  {id: 1, item: 'airpods', price: 8800, quantity:3, total: 1787},
  {id: 2, item: 'phone', price: 3000, quantity:2, total: 9898},
];
@Component({
  selector: 'app-new-bill',
  standalone: true,
  imports: [MatFormFieldModule, MatButtonModule, MatInputModule,MatCardModule, MatTableModule],
  templateUrl: './new-bill.component.html',
  styleUrl: './new-bill.component.scss'
})
export class NewBillComponent {
  displayedBillColumns: string[] = ['id', 'item', 'price', 'quantity', 'total'];
  dataSource = BILL_DETAILS;
}
