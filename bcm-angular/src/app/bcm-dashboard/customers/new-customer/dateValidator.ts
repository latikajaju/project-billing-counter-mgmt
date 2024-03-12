import { AbstractControl, ValidatorFn } from "@angular/forms";

export function notAFutureDateValidator(): ValidatorFn{
    return (control: AbstractControl): {[key: string]: any} | null => {
    const today = new Date();
    return control.value > today ? { isFuture: 'You cannot use future dates' } : null;  
    }
}