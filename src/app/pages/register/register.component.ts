import {Component, ViewEncapsulation} from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import {EmailValidator, EqualPasswordsValidator} from '../../theme/validators';
import {AuthenticationService} from "../../shared/services/authentication.service";
import {Router} from "@angular/router";
import {BaToastNotificationService} from "../../theme/services/baToasts/baToasts.service";

@Component({
  selector: 'register',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./register.scss')],
  template: require('./register.html'),
})
export class Register {

  public form:FormGroup;
  public firstName:AbstractControl;
  public lastName:AbstractControl;
  public picture:AbstractControl;
  public email:AbstractControl;
  public password:AbstractControl;
  public repeatPassword:AbstractControl;
  public passwords:FormGroup;

  public submitted:boolean = false;

  constructor(fb:FormBuilder, private authService: AuthenticationService, private router: Router, private toastServ: BaToastNotificationService) {

    this.form = fb.group({
      'firstName': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'lastName': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'picture': ['', Validators.compose([Validators.minLength(0)])],
      'email': ['', Validators.compose([Validators.required, EmailValidator.validate])],
      'passwords': fb.group({
        'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
        'repeatPassword': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
      }, {validator: EqualPasswordsValidator.validate('password', 'repeatPassword')})
    });

    this.firstName = this.form.controls['firstName'];
    this.lastName = this.form.controls['lastName'];
    this.email = this.form.controls['email'];
    this.passwords = <FormGroup> this.form.controls['passwords'];
    this.password = this.passwords.controls['password'];
    this.repeatPassword = this.passwords.controls['repeatPassword'];
    this.picture = this.form.controls['picture'];
  }

  public onSubmit(values:any):void {
    this.submitted = true;
    if (this.form.valid) {
      // your code goes here
      console.log(values);
      this.authService.
        register({firstName: values.firstName, lastName: values.lastName, email: values.email, password: values.passwords.password, picture: values.picture})
        .subscribe(
          (msg) => {
            let link = ['/login'];
            this.router.navigate(link);
          },
          (error) => {
            if (error.json() && error.json().errorMessage) {
              this.toastServ.showToast(error.json().errorMessage);
            } else {
              this.toastServ.showToast("An unexpected error has occured");
            }
          }
        );
    }
  }
}
