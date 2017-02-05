"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var angular2_modal_1 = require("angular2-modal");
var bootstrap_1 = require("angular2-modal/plugins/bootstrap");
var friend_model_1 = require("../../../../../../../../Angular Projects/peta tempalte/ng2-admin/src/app/models/friend.model");
var friends_service_1 = require("../shared/services/friends.service");
var toast_service_1 = require("../shared/services/toast.service");
var router_1 = require("@angular/router");
var FriendsModalContext = (function (_super) {
    __extends(FriendsModalContext, _super);
    function FriendsModalContext() {
        return _super.apply(this, arguments) || this;
    }
    return FriendsModalContext;
}(bootstrap_1.BSModalContext));
exports.FriendsModalContext = FriendsModalContext;
/**
 * A Sample of how simple it is to create a new window, with its own injects.
 */
var FriendDetailsModal = (function () {
    function FriendDetailsModal(dialog, friendsService, toastService, router) {
        this.dialog = dialog;
        this.friendsService = friendsService;
        this.toastService = toastService;
        this.router = router;
        this.friend = new friend_model_1.Friend();
        this.context = dialog.context;
        if (dialog.context.friend)
            this.friend = dialog.context.friend;
        dialog.setCloseGuard(this);
    }
    FriendDetailsModal.prototype.ngOnInit = function () {
        console.log("seeeeeeeeee");
    };
    FriendDetailsModal.prototype.deleteFriend = function (friend) {
        var _this = this;
        if (confirm("Are you sure?")) {
            this.friendsService.deleteFriend(friend)
                .subscribe(function () {
                _this.toastService.showSuccess("Succesfuly deleted friend");
                _this.closeModal();
            }, function (error) {
                _this.toastService.showError("Error while deleting friend");
                _this.closeModal();
            });
        }
    };
    FriendDetailsModal.prototype.closeModal = function () {
        this.dialog.close();
    };
    FriendDetailsModal.prototype.doAction = function () {
        this.closeModal();
        this.router.navigate(['/friends/' + this.friend.id]);
    };
    return FriendDetailsModal;
}());
FriendDetailsModal = __decorate([
    core_1.Component({
        selector: 'modal-content',
        templateUrl: 'app/friends/friend.modal.component.html'
    }),
    __metadata("design:paramtypes", [angular2_modal_1.DialogRef,
        friends_service_1.FriendsService,
        toast_service_1.ToastService,
        router_1.Router])
], FriendDetailsModal);
exports.FriendDetailsModal = FriendDetailsModal;
//# sourceMappingURL=friend.modal.component.js.map