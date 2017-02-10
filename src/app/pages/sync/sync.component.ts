import {Component} from '@angular/core';
import {UserService} from "../../shared/services/user.service";
import {TasksComponent} from "../dashboard/tasks/tasks.component";
import {User} from "../../models/user.model";
import {BaToastNotificationService} from "../../theme/services/baToasts/baToasts.service";
import { GlobalState } from 'app/global.state';

@Component({
  selector: 'new',
  templateUrl: 'sync.component.html'
})
export class SyncComponent {
  private user: User = new User();

  constructor(private userService: UserService, private toastService: BaToastNotificationService, private _state: GlobalState) {}

  sync(){
    this.userService.sync()
      .subscribe(
        (data) => {
          this.toastService.showToast("Sync Success!");
        },
        error =>  {this.toastService.showToast("Sync Success!");}
  );
  }


}
