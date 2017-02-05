import { Routes, RouterModule }  from '@angular/router';

import { Charts } from './charts.component';
import { BarChartDemoComponent } from './components/chartistJs/chart.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Charts,
    children: [
      { path: 'chartist-js', component: BarChartDemoComponent }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
