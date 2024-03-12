import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialog,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatDatepickerInputEvent, MatDatepickerModule} from '@angular/material/datepicker';
import {DateAdapter, provideNativeDateAdapter} from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import {ErrorStateMatcher} from '@angular/material/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators, FormControl, NgForm, FormGroupDirective } from '@angular/forms';
import { NgIf } from '@angular/common';
import { notAFutureDateValidator } from './dateValidator';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { formateDate } from '../../../formateDate';
import { DialogData } from '../../../../data-type';

@Component({
  selector: 'app-new-customer',
  standalone: true,
  imports: [MatFormFieldModule, MatButtonModule, MatDatepickerModule, MatInputModule,MatCardModule,ReactiveFormsModule, FormsModule, NgIf],
  providers: [provideNativeDateAdapter()],
  templateUrl: './new-customer.component.html',
  styleUrl: './new-customer.component.scss'
})

export class NewCustomerComponent {
  customerForm: FormGroup
  selectedDate!: Date;
  constructor(private fb: FormBuilder, public dialog: MatDialog){
    this.customerForm = this.fb.group({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      mobile: new FormControl('', [Validators.required, Validators.pattern('[0-9]{10}')]),
      dob: new FormControl('', Validators.compose([Validators.required, notAFutureDateValidator()]))
    })
  }

  ngOnInit(){
    
  }

  get today():Date{
    return new Date();
  }

  onSubmit(){
    if(this.customerForm.valid){
      const customerData: DialogData = {data:{...this.customerForm.value, dob: formateDate(this.customerForm.value['dob'])}, src: 'create'}
      console.log(formateDate(this.customerForm.value['dob']))
      this.dialog.open(ConfirmationDialogComponent, customerData);
    }
    else{
      this.customerForm.markAllAsTouched();
    }
  }
}
