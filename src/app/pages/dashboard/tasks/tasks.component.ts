import { Component, OnInit } from '@angular/core';



import {Category} from "../../../models/category.model";


import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';
import { Overlay, overlayConfigFactory } from 'angular2-modal';
import {Task} from "../../../models/task.model";
import {ToastService} from "../../../shared/services/toast.service";
import {WebSocketService} from "../../../shared/services/websocket.service";
import {User} from "../../../models/user.model";
import {CategoryService} from "../../../shared/services/category.service";
import {TaskService} from "../../../shared/services/task.service";
import {UserService} from "../../../shared/services/user.service";
import {CustomModal} from "./task-edit.component";
import {BaToastNotificationService} from "../../../theme/services/baToasts/baToasts.service";
import {CalendarService} from "../calendar/calendar.service";


@Component({
  templateUrl: './tasks.component.html',
  selector: 'test-app',
  providers: [Modal],
})
export class TasksComponent implements OnInit {
  user: User;
  tasks: Task[] = [];
  categories: any[];
  filters: Object = {};
  showFilters: boolean = false;
  errorMessage: string;
  static accountNotifications: boolean = false;

  public calendarConfiguration:any;
  private _calendar:Object;

  constructor(
    private _userService: UserService,
    private _taskService: TaskService,
    private _categoryService: CategoryService,
    public _modal: Modal,
    private socketService: WebSocketService,
    private toastService: ToastService,
    private toastsrv: BaToastNotificationService,
    private _calendarService:CalendarService
  ) {
    this.calendarConfiguration = this._calendarService.getData();
    this.calendarConfiguration.select = (start, end) => this._onSelect(start, end);
    this.calendarConfiguration.eventDrop = (event, delta, revertFunc, jsEvent, ui, view) => {

      if (!confirm("Are you sure about this change?")) {
        revertFunc();
      } else{
        this._taskService.updateTaskDeadline(new Task(event.id, event.start.format()))
          .subscribe(v => this.getTasks());
      }

    }
  }

  private _onSelect(start, end):void {

    if (this._calendar != null) {
      let title = prompt('Event Title:');
      let eventData;
      if (title) {
        eventData = {
          title: title,
          start: start,
          end: end
        };
        jQuery(this._calendar).fullCalendar('renderEvent', eventData, true);
      }
      jQuery(this._calendar).fullCalendar('unselect');
    }
  }

  public onCalendarReady(calendar):void {
    console.log("here b");
    this._calendar = calendar;
  }

  ngOnInit() {
    this.getUser();
    this.getTasks();
    this.getCategories();
  }

  showToooast(){
    this.toastsrv.showToast("Testing the toastz");
    console.log("showed toast");
  }

  getUser() {
    this._userService.getUser()
      .subscribe(
      user => {
        this.user = user;
        if(!TasksComponent.accountNotifications){
          this.subscribeForAccountNotifications();
          TasksComponent.accountNotifications = true;
        }
      },
      error => this.errorMessage = <any>error
      );
  }

  getTasks() {
    this._taskService.list(this.filters)
      .subscribe(
      tasks => {this.tasks = tasks; this.updateCalendar()},
      error => this.errorMessage = <any>error
      );
  }

  getTasks2() {
    this._taskService.list(this.filters)
      .subscribe(
        tasks => {this.tasks = tasks;},
        error => this.errorMessage = <any>error
      );
  }

  updateCalendar() {
    console.log("updating calendar");
    jQuery(this._calendar).fullCalendar('removeEvents');

    for(let i = 0; i < this.tasks.length; i++){
      jQuery(this._calendar).fullCalendar('renderEvent', {id: this.tasks[i].id, start: this.tasks[i].dueDate, title: this.tasks[i].name}, true);
    }

    this.getTasks2();
  }

  subscribeForAccountNotifications(){
    var self = this;
    this.socketService.subscribe(this.user.id, function (greeting : any) {
      console.log("recieved a message");
      console.log(greeting);
      if(greeting.body.indexOf("Late task") != -1){
        console.log("Contains late task!");
        var health = greeting.body.substr(greeting.body.lastIndexOf(":")+1);
        console.log("health == " +health);
        self.user.character.health = +health;
      }
      self.toastsrv.showToast(greeting.body);
      console.log("-=->>>>>>>>>>>>>>>>>>>>>>")
    });
  }

  getCategories() {
    this._categoryService.list()
      .subscribe(
      categories => {
        this.categories = [];
        // this.categories = categories.map(function(category){ return {id: category.id, text: category.name}});
        for (let i = 0; i < categories.length; i++) {
          let category = categories[i];
          this.categories.push({ id: category.id, text: category.name });
        }
      },
      error => this.errorMessage = <any>error,
    )
  };

  deleteTask(task: Task) {
    if (confirm("Are you sure?")) {
      this._taskService.delete(task)
        .subscribe(
        (tasks) => {this.tasks = tasks, this.updateCalendar()},
        error => this.errorMessage = <any>error
        );
    }
  }

  updateTaskStatus(task: Task) {
    this._taskService.updateStatus(task)
      .subscribe(
      (tasks) => {
        this.tasks = tasks
        this.getUser();
      },
      error => this.errorMessage = <any>error
      );
  }

  resetFilters() {
    this.filters = {};
  }

  openSaveTaskWindow(task: Task) {
    return this._modal.open(CustomModal, overlayConfigFactory({ task: task }, BSModalContext))
      .then(dialog => {console.log(dialog.result); return dialog.result})
      .then(() => this.getTasks());
  }


}
