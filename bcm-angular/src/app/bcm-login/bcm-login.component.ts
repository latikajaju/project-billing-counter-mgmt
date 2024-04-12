import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Router, RouterModule } from '@angular/router';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { UserServiceService } from '../user-service.service';
 

@Component({
  selector: 'app-bcm-login',
  standalone: true,
  imports: [
    RouterModule, 
    MatButtonModule, 
    MatCardModule,
    MatFormFieldModule, 
    MatInputModule,
    ReactiveFormsModule,
  ],
  templateUrl: './bcm-login.component.html',
  styleUrl: './bcm-login.component.scss'
})
export class BcmLoginComponent {
    loginForm : FormGroup

    constructor(
      private router: Router,
      private fb: FormBuilder,
      private userService: UserServiceService
    ) {
      this.loginForm = this.fb.group({
        userName: ['', Validators.required],
        password: ['', Validators.required],
      })
    }

    onLogin() {
      console.log(this.loginForm.value)
      if(this.loginForm.value.userName === 'admin' && this.loginForm.value.password === '123'){
        this.userService.setUserName(this.loginForm.value.userName)
        this.router.navigate(['/dashboard/'])
      } else{
        alert('Invalid username or password!');
      }
    }

    resetForm(){
      this.loginForm.reset()
    }
}
