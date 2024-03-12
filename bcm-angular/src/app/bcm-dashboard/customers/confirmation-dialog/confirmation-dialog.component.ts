import { Component, Inject } from '@angular/core';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

import { MatButtonModule } from '@angular/material/button';
import { Router, RouterModule } from '@angular/router';
import { Customer, DialogData } from '../../../../data-type';
import { CustomerServiceService } from '../customer-service.service';

@Component({
  selector: 'app-confirmation-dialog',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatButtonModule,
    RouterModule,
  ],
  templateUrl: './confirmation-dialog.component.html',
  styleUrl: './confirmation-dialog.component.scss',
})
export class ConfirmationDialogComponent {
  constructor(
    private router: Router,
    private dialogRef: MatDialogRef<ConfirmationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public dialogData: DialogData,
    private customerS: CustomerServiceService
  ) {}
  ngOnInit() {}
  onSubmit() {
    console.log("Clicked on submit")
    console.log(this.dialogData);
    if (this.dialogData.src == 'create') {
      console.log('in create');
      this.customerS.addCustomer(this.dialogData.data);
      this.router.navigate(['/dashboard/customers/customers-list']);
    }
    if (this.dialogData.src == ' edit') {
      console.log('in edit');
      this.customerS.editCustomer();
    }
  }
  onClose() {
    this.dialogRef.close(); // Close the dialog
  }
}
