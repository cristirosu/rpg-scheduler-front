import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import {FriendDetailsComponennt} from "./friend.details.component";
import {routing} from "./friend.details.routing";

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [
    FriendDetailsComponennt
  ]
})
export default class FriendDetailsModule {}
