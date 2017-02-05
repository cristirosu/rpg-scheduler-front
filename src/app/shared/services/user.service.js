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
var UserService = (function () {
    // TODO: ADD OBSERVABLE, SAVE USER, SAVE TOKEN
    function UserService(_http, authService) {
        this._http = _http;
        this.authService = authService;
    }
    UserService.prototype.getUser = function () {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json', 'Authorization': this.authService.token });
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http
            .get(app_settings_1.AppSettings.API_URL + '/user', options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    UserService.prototype.getUserById = function (id) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json', 'Authorization': this.authService.token });
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http
            .get(app_settings_1.AppSettings.API_URL + '/users/' + id, options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    UserService.prototype.handleError = function (error) {
        var msg = "Status code " + error.status + " on url " + error.url;
        console.log(msg);
        return Observable_1.Observable.throw(msg);
    };
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, authentication_service_1.AuthenticationService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map