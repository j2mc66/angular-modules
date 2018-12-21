import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { FormValidate } from 'src/app/util/form.validate';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent extends FormValidate implements OnInit {

  public form: FormGroup;
  public isForm: Promise<any>;

  constructor(private formBuilder: FormBuilder) {
    super();
  }

  ngOnInit() {
    this.initForm(new User());
  }

  initForm(user: User){
    this.isForm = Promise.resolve(
      this.form = this.formBuilder.group({
        firstName: [user.firstName, Validators.required],
        lastName: [user.lastName, Validators.required]
      })
    );
    //this.form.controls.typeId.disable();
    //this.initChanges();
  }

  initChanges(){
    this.form.controls.typeId.valueChanges
    .subscribe(select => {
      if(select.id != null){
        this.form.controls.typeId.enable()
       }else{
        this.form.controls.typeId.disable()
       }
    });
  }

  prepareData(): User{
    let user:FormGroup = this.form;    
    if(user.controls.typeId.value.id === null || user.controls.typeId.value.id === "null") 
      user.removeControl("typeId");
    return user.value;
  }

  onSubmit(){
    if(!this.form.valid){
      this.validateAllFormFields(this.form)
      return;
    }else{
      const user = this.prepareData();
      this.initForm(user);
    }
  }
}
