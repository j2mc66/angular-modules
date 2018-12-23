import { AbstractControl } from '@angular/forms';
export class CustomValidators {
  static PasswordPattern(control: AbstractControl) {
    if (/'^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$'/.test(control.value)) {
      return null;
    }else{
        control.get('confirm').setErrors({ passwordpattern: true });
    }
  }

  static MatchPassword(control: AbstractControl) {
    const password = control.get('password').value;
    const confirmPassword = control.get('confirmPassword').value;
    if (password !== confirmPassword) {
      control.get('confirmPassword').setErrors({ matchpassword: true });
    } else {
      return null;
    }
  }
}