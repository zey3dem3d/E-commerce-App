import { AbstractControl } from '@angular/forms';

export const passwordMatchValidators = (control: AbstractControl) => {
  return control.get('password')?.value === control.get('rePassword')?.value
    ? null
    : { mismatch: true };
};
