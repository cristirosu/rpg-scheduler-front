import { Component, OnInit } from '@angular/core';


import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';
import { Overlay, overlayConfigFactory } from 'angular2-modal';
import { FriendDetailsModal } from './friend.modal.component';
import {Friend} from "../../models/friend.model";
import {ToastService} from "../../shared/services/toast.service";
import {FriendsService} from "../../shared/services/friends.service";
import {Router} from "@angular/router";
import {BaToastNotificationService} from "../../theme/services/baToasts/baToasts.service";

@Component({
    templateUrl: './friends.component.html',
    providers: [Modal]
})
export class FriendsComponent implements OnInit{

    friendsEmail : string = "";
    friends: Array<Friend> = [];

    constructor(
        public _modal: Modal,
        public toastService: ToastService,
        public toastServ: BaToastNotificationService,
        public friendsService: FriendsService,
        private router: Router
    ) { }

    ngOnInit(){
        this.getFriends();
    }

    openFriendDetails(friend: Friend) {
        console.log(friend);
        return this._modal.open(FriendDetailsModal, overlayConfigFactory({ friend: friend }, BSModalContext))
            .then(dialog => { console.log(dialog.result); return dialog.result })
            .then(() => console.log("here"));
    }

    deleteFriend(friend: Friend) {
        if (confirm("Are you sure?")) {
            this.friendsService.deleteFriend(friend)
                .subscribe(
                () => {
                    this.toastServ.showToast("Succesfuly deleted friend");
                    this.getFriends();
                },
                error => {
                    this.toastServ.showToast("Error while deleting friend")
                }
                );
        }
    }

    addFriend(){
        console.log(this.friendsEmail);
        if(this.friendsEmail === undefined || this.friendsEmail.trim() === ""){
            this.toastServ.showToast("Email address is mandatory");
        } else{
            this.friendsService.addFriend(this.friendsEmail)
                .subscribe(
                    () => {
                        this.toastServ.showToast("Friend request sent!")
                    },
                    error => {
                        this.toastServ.showToast("Error while adding friend");
                    }
                )
        }
    }

  navigateToFriendsDetails(id: number){
    this.router.navigate(['/pages/friends/' + id]);
  }

    getFriends(){
        this.friendsService.getFriends()
            .subscribe(
            (response) => {
                this.friends = response;
        },
        error => {
            this.toastServ.showToast("There was an error while retrieving friends.")
        })
    }


}
