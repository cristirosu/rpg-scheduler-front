import { Routes, RouterModule }  from '@angular/router';
import { Pages } from './pages.component';
import {FriendDetailsComponennt} from "./friends-details/friend.details.component";
import { AuthGuard } from 'app/shared/guards/auth.guard';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => System.import('./login/login.module')
  },
  {
    path: 'register',
    loadChildren: () => System.import('./register/register.module')
  },
  {
    path: 'pages',
    component: Pages,
    canActivate: [ AuthGuard ],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', loadChildren: () => System.import('./dashboard/dashboard.module') },
      { path: 'editors', loadChildren: () => System.import('./editors/editors.module') },
      //{ path: 'components', loadChildren: () => System.import('./components/components.module') }
      { path: 'charts', loadChildren: () => System.import('./charts/charts.module') },
      { path: 'ui', loadChildren: () => System.import('./ui/ui.module') },
      { path: 'forms', loadChildren: () => System.import('./forms/forms.module') },
      { path: 'tables', loadChildren: () => System.import('./tables/tables.module') },
      { path: 'maps', loadChildren: () => System.import('./maps/maps.module') },
      { path: 'friends', loadChildren: () => System.import('./friends/friends.module') },
      { path: 'friends/:id',  loadChildren: () => System.import('./friends-details/friend.details.module') },
      { path: 'achievements',  loadChildren: () => System.import('./achievements/achievements.module') },
      { path: 'new',  loadChildren: () => System.import('./achievements/achievements.module.ts') },
      { path: 'settings',  loadChildren: () => System.import('./settings/settings.module') }
    ]
  }
];


export const routing = RouterModule.forChild(routes);
