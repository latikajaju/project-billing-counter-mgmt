import { Component } from '@angular/core';

import { Router, RouterModule } from '@angular/router';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { NgIf } from '@angular/common';
import { confirmPassword } from './confirmPassword';

@Component({
  selector: 'app-bcm-signup',
  standalone: true,
  imports: [
    RouterModule, 
    MatButtonModule, 
    MatCardModule,
    MatFormFieldModule, 
    MatInputModule,
    ReactiveFormsModule,NgIf],
  templateUrl: './bcm-signup.component.html',
  styleUrl: './bcm-signup.component.scss'
})
export class BcmSignupComponent {
  signupForm: FormGroup
  constructor(private fb: FormBuilder){
    this.signupForm = this.fb.group({
      username: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      mobile: new FormControl('', [Validators.required, Validators.pattern('[0-9]{10}')])
      // password: new FormControl('', [Validators.required]),
      // confirmPassword: new FormControl('', confirmPassword(this.signupForm.get('password')))
    })
  }

  onSignUp(){
    console.log(this.signupForm.value)
  }

}
