import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function confirmPassword(control: AbstractControl): ValidationErrors | null{
    const passwordControl = control.parent!.get('password');
    const confirmPasswordControl = control;

    if(passwordControl && confirmPasswordControl){
        if(confirmPasswordControl.errors && !confirmPasswordControl.errors['required']){
            return null;
        }
        else if(passwordControl.value !== confirmPasswordControl.value){
            return  { mismatch:true }
        }
    }
    return null;
}

// This function takes an AbstractControl as input, representing the form control to validate.
// It retrieves the form controls for both "password" and "confirm password" using control.parent?.get (optional chaining to handle potential null values).
// It checks if both controls exist and if the confirm password control has any errors besides "required" (to avoid validating if the field is empty).
// It compares the values of the "password" and "confirm password" controls. If they differ, it returns an object with the error key mismatch set to true.
// If the controls don't exist or aren't valid for other reasons, it returns ValidationErrors.null.