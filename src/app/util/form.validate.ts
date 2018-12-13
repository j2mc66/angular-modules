import { FormGroup, FormControl } from "@angular/forms";

export class FormValidate{

    validateAllFormFields(formGroup: FormGroup) {
        Object.keys(formGroup.controls).forEach(field => {
            const control = formGroup.get(field);
            if (control instanceof FormControl) {
            control.markAsTouched({ onlySelf: true });
            } else if (control instanceof FormGroup) {
            this.validateAllFormFields(control);
            }
        });
    }

    isFieldValid(form: FormGroup, field: string, error: string) {
        return !form.get(field).valid && form.get(field).touched && form.get(field).hasError(error);
    }
}