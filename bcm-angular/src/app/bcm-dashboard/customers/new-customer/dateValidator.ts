import { AbstractControl, ValidatorFn } from "@angular/forms";
import { Customer } from "../../../../data-type";

export function notAFutureDateValidator(): ValidatorFn{
    return (control: AbstractControl): {[key: string]: any} | null => {
    const today = new Date();
    return control.value > today ? { isFuture: 'You cannot use future dates' } : null;  
    }
}

// export function checkMobileNumberAvailability(customerArr: Customer[]): ValidatorFn{
//     return
// }