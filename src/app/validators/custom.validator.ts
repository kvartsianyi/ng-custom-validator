import { AbstractControl, ValidationErrors } from '@angular/forms';

export class CustomValidator {
  static check(control: AbstractControl): ValidationErrors | null {
    const inputNumber = control.value;
    const isNumber = Number(inputNumber);

    if (isNaN(isNumber)) {
      return { isNaN: true };
    }

    const [number, decimal] = inputNumber.split('.');
    const isDecimal = control.value.includes('.');

    if (!number || number.length < 2 || number.length > 4) {
      return { invalidNumber: true };
    }

    if ((isDecimal && !decimal) || (decimal && decimal.length > 2)) {
      return { invalidDecimal: true };
    }

    return null;
  }
}
