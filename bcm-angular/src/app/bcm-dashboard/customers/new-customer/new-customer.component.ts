import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {
  MatDatepickerInputEvent,
  MatDatepickerModule,
} from '@angular/material/datepicker';
import { DateAdapter, provideNativeDateAdapter } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { ErrorStateMatcher } from '@angular/material/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
  FormControl,
  NgForm,
  FormGroupDirective,
} from '@angular/forms';
import { NgIf } from '@angular/common';
import { notAFutureDateValidator } from './dateValidator';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { formateDate } from '../../../formateDate';
import { Customer, DialogData } from '../../../../data-type';
import { CustomerServiceService } from '../customer-service.service';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-new-customer',
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
  templateUrl: './new-customer.component.html',
  styleUrl: './new-customer.component.scss',
})
export class NewCustomerComponent {
  customerForm: FormGroup;
  selectedDate!: Date;
  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    private customerS: CustomerServiceService
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
    
    // dialogRef.afterClosed().subscribe((me:any)=>
    // {
    //   console.log("calling after closing dialog")
    //   console.log(me)
    //   if(me){
    //     this.customerForm.get('mobile')?.setErrors({mobileExists:true})
    //   }
    //   // if (
    //   //   this.customerS.isMobileNumberExists(this.customerForm.value['mobile'])
    //   // ) {
    //   //   this.customerForm.get('mobile')?.setErrors({mobileExists:true})
    //   // } 
    // })
  }

  get today(): Date {
    return new Date();
  }

  onSubmit() {
    if (this.customerForm.valid) {
        this.customerForm.get('mobile')?.setErrors(null)
        const customerData: Customer = {
          id: this.customerS.getNextId(),
          ...this.customerForm.value,
          dob: formateDate(this.customerForm.value['dob']),
        };

        console.log(customerData);
        const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
          data: { customerData, src: 'create' },
        });
        dialogRef.afterClosed().subscribe((result) => {
          console.log("calling after closing dialog");
          if (result) { // Check if a value was emitted (dialog confirmed)
            console.log(result);
            if (result) {
              this.customerForm.get('mobile')?.setErrors({ mobileExists: true });
            } else {
              this.customerForm.get('mobile')?.setErrors(null); // Clear mobileExists error
            }
          }
        });
      // this.dialog.open(ConfirmationDialogComponent, customerData);
    } else {
      this.customerForm.markAllAsTouched();
    }
  }
  resetForm() {
    this.customerForm.reset();
  }
}
