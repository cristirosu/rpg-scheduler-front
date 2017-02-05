import {Component, ViewEncapsulation} from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import {AuthenticationService} from "../../shared/services/authentication.service";
import {Router} from "@angular/router";
import {BaToastNotificationService} from "../../theme/services/baToasts/baToasts.service";

@Component({
  selector: 'login',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./login.scss')],
  template: require('./login.html'),
})
export class Login {

  public form:FormGroup;
  public email:AbstractControl;
  public password:AbstractControl;
  public submitted:boolean = false;

  constructor(fb:FormBuilder, private authService: AuthenticationService, private router: Router
              ,private toastService: BaToastNotificationService) {
    this.form = fb.group({
      'email': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    });

    this.email = this.form.controls['email'];
    this.password = this.form.controls['password'];
  }

  public onSubmit(values:Object):void {
    this.submitted = true;
    if (this.form.valid) {
      // your code goes here
       console.log(values);
      this.authService.login(values['email'], values['password'])
          .subscribe(result => {
            if (result === true) {
              //login succesful
              this.router.navigate(['/']);
              this.toastService.showToast("Succesful login!");
            }
          },
          (error) => {
            console.log("dis error");
            if (error.json() && error.json().error) {
              this.toastService.showToast(error.json().error);
            } else {
              this.toastService.showToast("An unexpected error has occured");
            }
          })
    }
  }
}
