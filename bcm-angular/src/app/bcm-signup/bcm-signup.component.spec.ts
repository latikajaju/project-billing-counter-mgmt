import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BcmSignupComponent } from './bcm-signup.component';
import { By } from '@angular/platform-browser';
import { FormGroup } from '@angular/forms';

describe('BcmSignupComponent', () => {
  let component: BcmSignupComponent;
  let fixture: ComponentFixture<BcmSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BcmSignupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BcmSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should create a signup form', () => {
    expect(component.signupForm instanceof FormGroup).toBeTrue();
  });

  it('should mark all fields as invalid when empty', () => {
    const usernameInput = fixture.debugElement.query(By.css('#name')); // Replace with your selector for username
    const emailInput = fixture.debugElement.query(By.css('#email'));
    const mobileInput = fixture.debugElement.query(By.css('#mobile'));
  
    usernameInput.nativeElement.value = '';
    emailInput.nativeElement.value = '';
    mobileInput.nativeElement.value = '';
  
    usernameInput.triggerEventHandler('input', null);
    emailInput.triggerEventHandler('input', null);
    mobileInput.triggerEventHandler('input', null);
  
    fixture.detectChanges();
  
    expect(component.signupForm.invalid).toBeTrue();
    // expect(component.signupForm?.get('name')?.errors['required']).toBeTruthy();
    // expect(component.signupForm?.get('email')?.errors['required']).toBeTruthy();
    // expect(component.signupForm.get('mobile').errors['required']).toBeTruthy();
  });

  it('should mark the username field as invalid when empty', ()=>{
    const usernameInput = fixture.debugElement.query(By.css('#name'))

    usernameInput.nativeElement.value = '';
    usernameInput.triggerEventHandler('input', null);
    fixture.detectChanges();

    expect(component.signupForm.get('name')?.invalid).toBeTrue();
    // expect(component.signupForm.get('name').errors['name']).toBeTruthy(); 
  })

  it('should mark the email field as invalid for invalid email format', () => {
    const emailInput = fixture.debugElement.query(By.css('#email')); // Replace with your selector
  
    emailInput.nativeElement.value = 'invalid@email';
    emailInput.triggerEventHandler('input', null);
    fixture.detectChanges();
  
    expect(component.signupForm.get('email')?.invalid).toBeTrue();
    //   expect(component.signupForm.get('email').errors['email']).toBeTruthy(); // Verify email error is set
    });

    it('should mark mobile field as invalid for non-numeric input', () => {
      const mobileInput = fixture.debugElement.query(By.css('#mobile'));
    
      mobileInput.nativeElement.value = 'abc123';
      mobileInput.triggerEventHandler('input', null);
      fixture.detectChanges();
    
      expect(component.signupForm.get('mobile')?.invalid).toBeTrue();
      // expect(component.signupForm.get('mobile').errors['pattern']).toBeTruthy();
    });

    it('should call onSignUp on form submission', () => {
      spyOn(component, 'onSignUp');
    
      const submitButton = fixture.debugElement.query(By.css('button[type="submit"]'));
      submitButton.nativeElement.click();
      fixture.detectChanges();
    
      expect(component.onSignUp).toHaveBeenCalled();
    });
});
