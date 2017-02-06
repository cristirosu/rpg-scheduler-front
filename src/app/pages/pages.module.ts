import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';

import { routing }       from './pages.routing';
import { NgaModule } from '../theme/nga.module';

import { Pages } from './pages.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  imports: [CommonModule, NgaModule, routing, FormsModule],
  declarations: [Pages]
})
export class PagesModule {
}
