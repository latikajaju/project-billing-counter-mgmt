import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { Bill, Customer } from '../../../../data-type';
import { MatButtonModule } from '@angular/material/button';
import { CustomerServiceService } from '../customer-service.service';
import { RouterModule } from '@angular/router';
import { DateAdapter } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { FormControl, FormsModule } from '@angular/forms';


@Component({
  selector: 'app-customers-list',
  standalone: true,
  imports: [MatTableModule, MatCardModule, MatGridListModule, MatButtonModule, RouterModule, MatIconModule, FormsModule],
  templateUrl: './customers-list.component.html',
  styleUrl: './customers-list.component.scss',
})
export class CustomersListComponent {
  displayedColumns: string[] = ['id', 'name', 'email', 'mobile', 'dob', 'action'];
  dataSource!: Customer[];
  searchControl = new FormControl('');
  constructor( private customerS: CustomerServiceService){}
  
  ngOnInit(){
    this.dataSource = this.customerS.getCustomers();
    console.log(this.searchControl)
  }

  onSearch(){
    console.log("inside")
    const searchMobile = this.searchControl.value;
    if(searchMobile){
      console.log(searchMobile)
      this.dataSource = this.customerS.filterByMobile(searchMobile)
      console.log(this.dataSource)
    }
  }
}