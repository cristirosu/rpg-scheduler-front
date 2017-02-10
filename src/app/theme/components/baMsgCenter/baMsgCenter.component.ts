import {Component} from '@angular/core';

import {BaMsgCenterService} from './baMsgCenter.service';
import {ChartService} from "../../../shared/services/chart.service";
import {WebSocketService} from "../../../shared/services/websocket.service";
import {UserService} from "../../../shared/services/user.service";

@Component({
  selector: 'ba-msg-center',
  providers: [BaMsgCenterService],
  styles: [require('./baMsgCenter.scss')],
  template: require('./baMsgCenter.html')
})
export class BaMsgCenter {

  public notifications:Array<Object>;
  public messages:Array<Object>;
  public toReadNotifications = 0;
  public user = {};

  constructor(private _baMsgCenterService:BaMsgCenterService, private chartService: ChartService, private socketService: WebSocketService,
              private userService: UserService) {
    //this.notifications = this._baMsgCenterService.getNotifications();
    this.messages = this._baMsgCenterService.getMessages();
  }

  ngOnInit(){
    this.getAlerts();
    this.getUser();
  }

  private getAlerts() {
    this.chartService.getNotifications()
      .subscribe(
        (response) => {
          console.log("Responsee");
          console.log(response);
          this.notifications = response;
          this.toReadNotifications = this.notifications.length;
        },
        error => {
          console.log(error);
        })
  }

  updateNotifications(){
    this.toReadNotifications = 0;
  }

  private getUser() {
    this.userService.getUser()
      .subscribe(
        (user) => {
          this.user = user;
          var self = this;
          setTimeout(function(){
            self.socketService.subscribe(user.id + "-alert", function (greeting : any) {
              console.log("recieved a message");
              self.notifications.push({picture: user.character.picture, text: greeting.body, time: new Date().getDate()});
              self.toReadNotifications++;
            });
          },2000);

        },
        error => {
          console.log(error);
        })
  }
}
