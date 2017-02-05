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
var router_1 = require("@angular/router");
var achievement_service_1 = require("../shared/services/achievement.service");
var user_service_1 = require("../shared/services/user.service");
var FriendDetailsComponennt = (function () {
    function FriendDetailsComponennt(route, _achievementService, _userService) {
        this.route = route;
        this._achievementService = _achievementService;
        this._userService = _userService;
        console.log("constrcutct");
    }
    FriendDetailsComponennt.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = +params['id']; // (+) converts string 'id' to a number
            _this.getAchievements(_this.id);
            _this.getFriend(_this.id);
            // In a real app: dispatch action to load the details here.
        });
    };
    FriendDetailsComponennt.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    FriendDetailsComponennt.prototype.getAchievements = function (id) {
        var _this = this;
        this._achievementService.getAchievementsByUserId(id)
            .subscribe(function (achievements) { return _this.achievements = achievements; });
    };
    FriendDetailsComponennt.prototype.getFriend = function (id) {
        var _this = this;
        this._userService.getUserById(id)
            .subscribe(function (friend) {
            _this.friend = friend;
            console.log(_this.friend);
        });
    };
    return FriendDetailsComponennt;
}());
FriendDetailsComponennt = __decorate([
    core_1.Component({
        templateUrl: 'app/friends/friend.details.component.html',
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        achievement_service_1.AchievementService,
        user_service_1.UserService])
], FriendDetailsComponennt);
exports.FriendDetailsComponennt = FriendDetailsComponennt;
//# sourceMappingURL=friend.details.component.js.map