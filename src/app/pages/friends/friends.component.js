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
var bootstrap_1 = require("angular2-modal/plugins/bootstrap");
var angular2_modal_1 = require("angular2-modal");
var friend_modal_component_1 = require("./friend.modal.component");
var friends_service_1 = require("../shared/services/friends.service");
var toast_service_1 = require("../shared/services/toast.service");
var FriendsComponent = (function () {
    function FriendsComponent(_modal, toastService, friendsService) {
        this._modal = _modal;
        this.toastService = toastService;
        this.friendsService = friendsService;
        this.friendsEmail = "";
        this.friends = [];
    }
    FriendsComponent.prototype.ngOnInit = function () {
        this.getFriends();
    };
    FriendsComponent.prototype.openFriendDetails = function (friend) {
        console.log(friend);
        return this._modal.open(friend_modal_component_1.FriendDetailsModal, angular2_modal_1.overlayConfigFactory({ friend: friend }, bootstrap_1.BSModalContext))
            .then(function (dialog) { console.log(dialog.result); return dialog.result; })
            .then(function () { return console.log("here"); });
    };
    FriendsComponent.prototype.deleteFriend = function (friend) {
        var _this = this;
        if (confirm("Are you sure?")) {
            this.friendsService.deleteFriend(friend)
                .subscribe(function () {
                _this.toastService.showSuccess("Succesfuly deleted friend");
                _this.getFriends();
            }, function (error) {
                _this.toastService.showError("Error while deleting friend");
            });
        }
    };
    FriendsComponent.prototype.addFriend = function () {
        var _this = this;
        console.log(this.friendsEmail);
        if (this.friendsEmail === undefined || this.friendsEmail.trim() === "") {
            this.toastService.showError("Email address is mandatory");
        }
        else {
            this.friendsService.addFriend(this.friendsEmail)
                .subscribe(function () {
                _this.toastService.showSuccess("Friend request sent!");
            }, function (error) {
                _this.toastService.showError("Error while adding friend");
            });
        }
    };
    FriendsComponent.prototype.getFriends = function () {
        var _this = this;
        this.friendsService.getFriends()
            .subscribe(function (response) {
            _this.friends = response;
        }, function (error) {
            _this.toastService.showError("There was an error while retrieving friends.");
        });
    };
    return FriendsComponent;
}());
FriendsComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/friends/friends.component.html',
        providers: [bootstrap_1.Modal]
    }),
    __metadata("design:paramtypes", [bootstrap_1.Modal,
        toast_service_1.ToastService,
        friends_service_1.FriendsService])
], FriendsComponent);
exports.FriendsComponent = FriendsComponent;
//# sourceMappingURL=friends.component.js.map