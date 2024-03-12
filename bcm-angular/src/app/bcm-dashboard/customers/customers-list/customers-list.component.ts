import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { Customer } from '../../../../data-type';
import { MatButtonModule } from '@angular/material/button';
import { CustomerServiceService } from '../customer-service.service';
import { RouterModule } from '@angular/router';
import { DateAdapter } from '@angular/material/core';


@Component({
  selector: 'app-customers-list',
  standalone: true,
  imports: [MatTableModule, MatCardModule, MatGridListModule, MatButtonModule, RouterModule],
  templateUrl: './customers-list.component.html',
  styleUrl: './customers-list.component.scss',
})
export class CustomersListComponent {
  displayedColumns: string[] = ['id', 'name', 'email', 'mobile', 'dob', 'action'];
  dataSource!: Customer[];

  constructor( private customerS: CustomerServiceService){}
  
  ngOnInit(){
    this.dataSource = this.customerS.getCustomers();
  }
}