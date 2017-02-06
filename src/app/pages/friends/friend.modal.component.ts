import { Component, OnInit } from '@angular/core';

import { DialogRef, ModalComponent, CloseGuard } from 'angular2-modal';
import { BSModalContext } from 'angular2-modal/plugins/bootstrap';



import {Router} from "@angular/router";
import {Friend} from "../../models/friend.model";
import {ToastService} from "../../shared/services/toast.service";
import {FriendsService} from "../../shared/services/friends.service";
import {BaToastNotificationService} from "../../theme/services/baToasts/baToasts.service";

export class FriendsModalContext extends BSModalContext {
    public friend: Friend;
}

/**
 * A Sample of how simple it is to create a new window, with its own injects.
 */
@Component({
    selector: 'modal-content',
    templateUrl: 'friend.modal.component.html'
})
export class FriendDetailsModal implements CloseGuard, ModalComponent<FriendsModalContext>, OnInit {
    context: FriendsModalContext;
    friend: Friend = new Friend();

    constructor(
        public dialog: DialogRef<FriendsModalContext>,
        public friendsService: FriendsService,
        public toastService: ToastService,
        public toastServ: BaToastNotificationService,
        private router: Router
    ) {
        this.context = dialog.context;
        if (dialog.context.friend) this.friend = dialog.context.friend;

        dialog.setCloseGuard(this);
    }

    ngOnInit() {
        console.log("seeeeeeeeee");
    }

    deleteFriend(friend: Friend){
        if (confirm("Are you sure?")) {
      this.friendsService.deleteFriend(friend)
        .subscribe(
        () => {
            this.toastServ.showToast("Succesfuly deleted friend");
            this.closeModal();
        },
        error => {
            this.toastServ.showToast("Error while deleting friend")
            this.closeModal();
        }
        );
    }
    }

    closeModal() {
        this.dialog.close();
    }

    doAction(){
        this.closeModal();
        this.router.navigate(['/pages/friends/' + this.friend.id]);
    }
}
