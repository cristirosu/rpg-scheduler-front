import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { Dashboard } from './dashboard.component';
import { routing }       from './dashboard.routing';

import { PopularApp } from './popularApp';
import { PieChart } from './pieChart';
import { TrafficChart } from './trafficChart';
import { UsersMap } from './usersMap';
import { LineChart } from './lineChart';
import { Feed } from './feed';
import { Todo } from './todo';
import { Calendar } from './calendar';
import { CalendarService } from './calendar/calendar.service';
import { FeedService } from './feed/feed.service';
import { LineChartService } from './lineChart/lineChart.service';
import { PieChartService } from './pieChart/pieChart.service';
import { TodoService } from './todo/todo.service';
import { TrafficChartService } from './trafficChart/trafficChart.service';
import { UsersMapService } from './usersMap/usersMap.service';
import {HttpModule} from "@angular/http";
import { ChartsModule } from 'ng2-charts/ng2-charts';
import {TasksComponent} from "./tasks/tasks.component";
import {WebSocketService} from "../../shared/services/websocket.service";
import {FriendsService} from "../../shared/services/friends.service";
import {ToastService} from "../../shared/services/toast.service";
import {AuthenticationService} from "../../shared/services/authentication.service";
import {AuthGuard} from "../../shared/guards/auth.guard";
import {AchievementService} from "../../shared/services/achievement.service";
import {TaskService} from "../../shared/services/task.service";
import {CategoryService} from "../../shared/services/category.service";
import {UserService} from "../../shared/services/user.service";
import {SelectModule} from "ng2-select/index";
import {CustomModal} from "./tasks/task-edit.component";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    HttpModule,
    ChartsModule,
    SelectModule,
    routing
  ],
  declarations: [
    PopularApp,
    PieChart,
    TrafficChart,
    UsersMap,
    LineChart,
    Feed,
    Todo,
    Calendar,
    Dashboard,
    TasksComponent
  ],
  providers: [
    CalendarService,
    FeedService,
    LineChartService,
    PieChartService,
    TodoService,
    TrafficChartService,
    UsersMapService,

  ]
})
export default class DashboardModule {}
