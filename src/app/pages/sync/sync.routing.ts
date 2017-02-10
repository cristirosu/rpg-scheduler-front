import { Routes, RouterModule }  from '@angular/router';
import {SyncComponent} from "./sync.component";

const routes: Routes = [
  {
    path: '',
    component: SyncComponent
  }
];

export const routing = RouterModule.forChild(routes);
