import {Component} from '@angular/core';
import {UserService} from "../../shared/services/user.service";
import {TasksComponent} from "../dashboard/tasks/tasks.component";
import {User} from "../../models/user.model";
import {BaToastNotificationService} from "../../theme/services/baToasts/baToasts.service";

@Component({
  selector: 'new',
  templateUrl: 'settings.component.html'
})
export class SettingsComponent {
  private user: User = new User();

  public checkboxModel = [{
    name: 'Toast notifications',
    state: false,
    class: 'has-warning checkbox'
  }, {
    name: 'Email notifications',
    state: this.user.receivesEmails,
    class: 'has-warning checkbox',
  }];

  public checkboxPropertiesMapping = {
    model: 'state',
    value: 'name',
    label: 'name',
    baCheckboxClass: 'class'
  };

  constructor(private userService: UserService, private toastService: BaToastNotificationService) {}

  ngOnInit(){
    this.userService.getUser()
      .subscribe(
        user => {
          this.user = user;
          this.checkboxModel[0]['state'] = this.user.receivesToasts;
          this.checkboxModel[1]['state'] = this.user.receivesEmails;
        },
        error => console.log(error)
      );
  }

  update(){
    this.userService.updateUser(this.getUser())
      .subscribe(
        () => {
          this.toastService.showToast("Succefully updated details");
        },
        error =>  this.toastService.showToast("Succefully updated details")
  );
  }

  private getUser() : User {
    this.user.receivesToasts = this.checkboxModel[0]['state'];
    this.user.receivesEmails = this.checkboxModel[1]['state'];

    return this.user;
  }

}
