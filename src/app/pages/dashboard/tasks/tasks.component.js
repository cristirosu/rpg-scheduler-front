"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var user_service_1 = require("../shared/services/user.service");
var task_service_1 = require("../shared/services/task.service");
var category_service_1 = require("../shared/services/category.service");
var bootstrap_1 = require("angular2-modal/plugins/bootstrap");
var task_edit_component_1 = require("./task-edit.component.ts");
var angular2_modal_1 = require("angular2-modal");
var websocket_service_1 = require("../shared/services/websocket.service");
var toast_service_1 = require("../shared/services/toast.service");
var TasksComponent = TasksComponent_1 = (function () {
    function TasksComponent(_userService, _taskService, _categoryService, _modal, socketService, toastService) {
        this._userService = _userService;
        this._taskService = _taskService;
        this._categoryService = _categoryService;
        this._modal = _modal;
        this.socketService = socketService;
        this.toastService = toastService;
        this.tasks = [];
        this.filters = {};
        this.showFilters = false;
    }
    TasksComponent.prototype.ngOnInit = function () {
        this.getUser();
        this.getTasks();
        this.getCategories();
    };
    TasksComponent.prototype.getUser = function () {
        var _this = this;
        this._userService.getUser()
            .subscribe(function (user) {
            _this.user = user;
            if (!TasksComponent_1.accountNotifications) {
                _this.subscribeForAccountNotifications();
                TasksComponent_1.accountNotifications = true;
            }
        }, function (error) { return _this.errorMessage = error; });
    };
    TasksComponent.prototype.getTasks = function () {
        var _this = this;
        this._taskService.list(this.filters)
            .subscribe(function (tasks) { return _this.tasks = tasks; }, function (error) { return _this.errorMessage = error; });
    };
    TasksComponent.prototype.subscribeForAccountNotifications = function () {
        var self = this;
        this.socketService.subscribe(this.user.id, function (greeting) {
            console.log("recieved a message");
            console.log(greeting);
            self.toastService.showInfo(greeting.body);
            console.log("-=->>>>>>>>>>>>>>>>>>>>>>");
        });
    };
    TasksComponent.prototype.getCategories = function () {
        var _this = this;
        this._categoryService.list()
            .subscribe(function (categories) {
            _this.categories = [];
            // this.categories = categories.map(function(category){ return {id: category.id, text: category.name}});
            for (var i = 0; i < categories.length; i++) {
                var category = categories[i];
                _this.categories.push({ id: category.id, text: category.name });
            }
        }, function (error) { return _this.errorMessage = error; });
    };
    ;
    TasksComponent.prototype.deleteTask = function (task) {
        var _this = this;
        if (confirm("Are you sure?")) {
            this._taskService.delete(task)
                .subscribe(function (tasks) { return _this.tasks = tasks; }, function (error) { return _this.errorMessage = error; });
        }
    };
    TasksComponent.prototype.updateTaskStatus = function (task) {
        var _this = this;
        this._taskService.updateStatus(task)
            .subscribe(function (tasks) {
            _this.tasks = tasks;
            _this.getUser();
        }, function (error) { return _this.errorMessage = error; });
    };
    TasksComponent.prototype.resetFilters = function () {
        this.filters = {};
    };
    TasksComponent.prototype.openSaveTaskWindow = function (task) {
        var _this = this;
        return this._modal.open(task_edit_component_1.CustomModal, angular2_modal_1.overlayConfigFactory({ task: task }, bootstrap_1.BSModalContext))
            .then(function (dialog) { console.log(dialog.result); return dialog.result; })
            .then(function () { return _this.getTasks(); });
    };
    return TasksComponent;
}());
TasksComponent.accountNotifications = false;
TasksComponent = TasksComponent_1 = __decorate([
    core_1.Component({
        templateUrl: 'app/tasks/tasks.component.html',
        providers: [bootstrap_1.Modal],
    }),
    __metadata("design:paramtypes", [user_service_1.UserService,
        task_service_1.TaskService,
        category_service_1.CategoryService,
        bootstrap_1.Modal,
        websocket_service_1.WebSocketService,
        toast_service_1.ToastService])
], TasksComponent);
exports.TasksComponent = TasksComponent;
var TasksComponent_1;
//# sourceMappingURL=tasks.component.js.map
