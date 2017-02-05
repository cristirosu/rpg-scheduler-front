import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { AchievementsComponent } from './achievements.component';
import { routing } from './achievements.routing';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [
    AchievementsComponent
  ]
})
export default class NewModule {}
