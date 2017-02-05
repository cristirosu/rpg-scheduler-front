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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/throw");
var authentication_service_1 = require("./authentication.service");
var app_settings_1 = require("../services/app.settings");
var TaskService = (function () {
    function TaskService(_http, authService) {
        this._http = _http;
        this.authService = authService;
    }
    TaskService.prototype.list = function (filters) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json', 'Authorization': this.authService.token });
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.get(app_settings_1.AppSettings.API_URL + '/tasks', options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    TaskService.prototype.save = function (task) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json', 'Authorization': this.authService.token });
        var options = new http_1.RequestOptions({ headers: headers });
        var data = JSON.stringify(task);
        return this._http.put(app_settings_1.AppSettings.API_URL + '/tasks', data, options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    TaskService.prototype.get = function (task) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json', 'Authorization': this.authService.token });
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.get(app_settings_1.AppSettings.API_URL + '/tasks/' + task.id, options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    TaskService.prototype.delete = function (task) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json', 'Authorization': this.authService.token });
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.delete(app_settings_1.AppSettings.API_URL + '/tasks/' + task.id, options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    TaskService.prototype.updateStatus = function (task) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json', 'Authorization': this.authService.token });
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.put(app_settings_1.AppSettings.API_URL + '/tasks/' + task.id + '/status', {}, options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    TaskService.prototype.handleError = function (error) {
        var msg = "Status code " + error.status + " on url " + error.url;
        console.log(msg);
        return Observable_1.Observable.throw(msg);
    };
    return TaskService;
}());
TaskService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, authentication_service_1.AuthenticationService])
], TaskService);
exports.TaskService = TaskService;
//# sourceMappingURL=task.service.js.map