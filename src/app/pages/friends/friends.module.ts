import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { routing } from './friends.routing';
import {FriendsComponent} from "./friends.component";
import {FormsModule} from '@angular/forms';
import {FriendDetailsModal} from "./friend.modal.component";


@NgModule({
  imports: [
    CommonModule,
    routing,
    FormsModule
  ],
  declarations: [
    FriendsComponent
  ]
})
export default class NewModule {}
