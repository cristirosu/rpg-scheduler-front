import { Routes, RouterModule }  from '@angular/router';
import { AchievementsComponent } from './achievements.component';

const routes: Routes = [
  {
    path: '',
    component: AchievementsComponent
  }
];

export const routing = RouterModule.forChild(routes);
