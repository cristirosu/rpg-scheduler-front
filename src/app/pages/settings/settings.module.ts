import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { routing } from './settings.routing';
import {SettingsComponent} from "./settings.component";

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [
    SettingsComponent
  ]
})
export default class NewModule {}
