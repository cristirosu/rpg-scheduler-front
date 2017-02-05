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
var app_settings_1 = require("./app.settings");
var WebSocketService = (function () {
    function WebSocketService() {
    }
    WebSocketService.prototype.subscribe = function (topic, subscribeFn) {
        var socket = new SockJS(app_settings_1.AppSettings.SOCKETG_URL);
        this.stompClient = Stomp.over(socket);
        var self = this;
        this.stompClient.connect({}, function (frame) {
            console.log("subscribing to " + topic);
            self.stompClient.subscribe('/topic/' + topic, subscribeFn);
            console.log("subscribed to " + topic);
        });
    };
    WebSocketService.prototype.sendName = function (topic) {
        this.stompClient.send("/app/hello/" + topic, {}, JSON.stringify({ 'name': 'MyUsername' }));
    };
    WebSocketService.prototype.disconnect = function () {
        if (this.stompClient !== undefined) {
            this.stompClient.disconnect();
        }
    };
    return WebSocketService;
}());
WebSocketService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], WebSocketService);
exports.WebSocketService = WebSocketService;
//# sourceMappingURL=websocket.service.js.map