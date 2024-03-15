import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-bills-list',
  standalone: true,
  imports: [MatFormFieldModule, MatButtonModule, MatInputModule,MatCardModule, MatTableModule],
  templateUrl: './bills-list.component.html',
  styleUrl: './bills-list.component.scss'
})
export class BillsListComponent {

}
