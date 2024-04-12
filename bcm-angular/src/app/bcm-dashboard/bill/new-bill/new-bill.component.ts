import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Bill, Customer } from '../../../../data-type';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CustomerServiceService } from '../../customers/customer-service.service';
import { NgIf } from '@angular/common';


const BILL_DETAILS: Bill[] = [
  {id: 1, item: 'airpods', price: 8800, quantity:3, total: 1787},
  {id: 2, item: 'phone', price: 3000, quantity:2, total: 9898},
];
@Component({
  selector: 'app-new-bill',
  standalone: true,
  imports: [MatFormFieldModule, MatButtonModule, MatInputModule,MatCardModule, MatTableModule, FormsModule, ReactiveFormsModule, NgIf],
  templateUrl: './new-bill.component.html',
  styleUrl: './new-bill.component.scss'
})
export class NewBillComponent {
  displayedBillColumns: string[] = ['id', 'item', 'price', 'quantity', 'total'];
  // dataSource = BILL_DETAILS;
  billForm: FormGroup
  customerForm!: FormGroup;
  dataSource!: Bill[] 
  mobileSearch = ''
  showAddInvoice: boolean = false

  constructor(private fb:FormBuilder, private customerS: CustomerServiceService){
    this.billForm = this.fb.group({
      item: new FormControl(''),
      price: new FormControl(''),
      quantity: new FormControl('')
    })
    this.customerForm = this.fb.group({
      mobile: new FormControl('', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")])
    })
  }

  ngOnInit(){}

  onSubmit(){
    if (this.billForm.valid && this.mobileSearch) {
      console.log(this.mobileSearch)
      const newBill = this.billForm.value as Bill;
      newBill.total = newBill.price * newBill.quantity;
      this.dataSource.push(newBill); 
      // this.billForm.reset()
      console.log(this.billForm.value)
    }
    else{
      console.error("form is invalid")
    }
  }

  onMobileSearch(){
    this.mobileSearch = this.customerForm.get('mobile')?.value?.trim()
    console.log(this.mobileSearch)
    if(this.mobileSearch){
      this.showAddInvoice = true
      console.log(this.mobileSearch)
      const filteredBills= this.customerS.filterByMobile(this.mobileSearch).flatMap(customer => customer.bills)
      if(filteredBills.length != 0){
        this.dataSource = filteredBills
        console.log(filteredBills)
      }
      else{
        this.showAddInvoice = false
        console.log("Mobile number does not exists!")
      }
      // if(billsByMobile){
      //   console.log(billsByMobile)
      //   const billMobile = billsByMobile.flatMap((customer: { bills: any; }) => customer.bills)
      //   this.dataSource = billMobile
      // }
    }
  }
}
