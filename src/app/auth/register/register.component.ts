import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { FormValidate } from 'src/app/util/form.validate';
import { CustomValidators } from '@/util/custom.validators';
import { UserService, AlertService } from '@/services';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent extends FormValidate implements OnInit {

  public form: FormGroup;
  public isForm: Promise<any>;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService,
    private alertService: AlertService) {
    super();
  }

  ngOnInit() {
    this.initForm(new User());
  }

  initForm(user: User) {
    this.isForm = Promise.resolve(
      this.form = this.formBuilder.group({
        firstName: [user.firstName, Validators.required],
        lastName: [user.lastName, Validators.required],
        username: [user.username, Validators.required],
        password: [user.password, Validators.required, CustomValidators.PasswordPattern],
        confirmPassword: [null, Validators.required],
      }, CustomValidators.MatchPassword)
    );
  }

  initChanges() {
    this.form.controls.typeId.valueChanges
      .subscribe(select => {
        if (select.id != null) {
          this.form.controls.typeId.enable()
        } else {
          this.form.controls.typeId.disable()
        }
      });
  }

  onSubmit() {
    if (!this.form.valid) {
      this.validateAllFormFields(this.form)
      return;
    } else {
      this.userService.register(this.form.value)
        .pipe(first())
        .subscribe(
          data => {
            this.alertService.success('Registration successful');
            this.router.navigate(['/login']);
          },
          error => {
            this.alertService.error(error);
          });
    }
  }

  onCancel(){
    if(this.form.dirty){
      this.alertService.confirm("Esta seguro de cancelar").then(
        confirm => {
          if(confirm){
            this.form.reset();
            this.router.navigate(['/login']);
          }
        });
    }else{
      this.router.navigate(['/login']);
    }
  }
}
