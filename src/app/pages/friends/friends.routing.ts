import { Routes, RouterModule }  from '@angular/router';
import {FriendsComponent} from "./friends.component";

const routes: Routes = [
  {
    path: '',
    component: FriendsComponent
  }
];

export const routing = RouterModule.forChild(routes);
