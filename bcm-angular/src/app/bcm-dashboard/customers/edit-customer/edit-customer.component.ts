import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
  FormControl
} from '@angular/forms';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { notAFutureDateValidator } from '../new-customer/dateValidator';
import { MatDialog } from '@angular/material/dialog';
import { DateAdapter, provideNativeDateAdapter } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { NgIf } from '@angular/common';
import { CustomerServiceService } from '../customer-service.service';
import { ActivatedRoute } from '@angular/router';
import { Customer } from '../../../../data-type';
import { formateDate } from '../../../formateDate';

@Component({
  selector: 'app-edit-customer',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatButtonModule,
    MatDatepickerModule,
    MatInputModule,
    MatCardModule,
    ReactiveFormsModule,
    FormsModule,
    NgIf,
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './edit-customer.component.html',
  styleUrl: './edit-customer.component.scss',
})
export class EditCustomerComponent {
  customerForm: FormGroup;
  custId: number = -1;
  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    private dataAdapter: DateAdapter<any>,
    private customerService: CustomerServiceService,
    private route: ActivatedRoute
  ) {
    this.customerForm = this.fb.group({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      mobile: new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9]{10}'),
      ]),
      dob: new FormControl(
        '',
        Validators.compose([Validators.required, notAFutureDateValidator()])
      ),
    });
  }

    ngOnInit() {
      this.custId = this.route.snapshot.params['id'];
      console.log(this.custId);
      const customerDetails = this.customerService.customerDetails(this.custId)
      console.log(this.customerService.customerDetails(this.custId))
      this.setValues(customerDetails)
    }

    setControlValue(key: string, value: string | Date){
      const ctrl = this.customerForm.get(key) as FormControl
      ctrl.setValue(value)  
    }

    setValues(customerDetails: Customer | undefined){
      if(customerDetails){
        this.setControlValue("name", customerDetails?.name) 
        this.setControlValue("email", customerDetails?.email)
        this.setControlValue("mobile", customerDetails?.mobile)
        this.setControlValue("dob", customerDetails?.dob)
      }
    }
  get today(): Date {
    return new Date();
  }
  onSubmit(){
    if (this.customerForm.valid) {
      const customerData = {
        ...this.customerForm.value,
        id: this.custId,
        dob: this.customerForm.value['dob'],
        src: 'edit'
      };
      this.dialog.open(ConfirmationDialogComponent, { data: {customerData, src:'edit'} })
    }
    else {
      this.customerForm.markAllAsTouched();
    }
  }

  resetForm(){
    this.customerForm.reset()
  }
}
