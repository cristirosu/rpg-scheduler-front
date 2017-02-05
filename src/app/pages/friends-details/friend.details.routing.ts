import { Routes, RouterModule }  from '@angular/router';
import {FriendDetailsComponennt} from "./friend.details.component";

const routes: Routes = [
  {
    path: '',
    component: FriendDetailsComponennt
  }
];

export const routing = RouterModule.forChild(routes);
