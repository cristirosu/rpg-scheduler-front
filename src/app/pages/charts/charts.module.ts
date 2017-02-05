import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { routing }       from './charts.routing';
import { Charts } from './charts.component';
import { ChartistJsService } from './components/chartistJs/chartistJs.service';
import {BarChartDemoComponent} from "./components/chartistJs/chart.component";
import { ChartsModule } from 'ng2-charts/ng2-charts';
import {ChartService} from "../../shared/services/chart.service";



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ChartsModule,
    NgaModule,
    routing
  ],
  declarations: [
    Charts,
    BarChartDemoComponent
  ],
  providers: [
    ChartistJsService,
    ChartService
  ]
})
export default class CustomChartsModule {}
