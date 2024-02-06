import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-new-customer',
  standalone: true,
  imports: [MatFormFieldModule, MatButtonModule, MatDatepickerModule, MatInputModule,MatCardModule],
  providers: [provideNativeDateAdapter()],
  templateUrl: './new-customer.component.html',
  styleUrl: './new-customer.component.scss'
})
export class NewCustomerComponent {
  
}
