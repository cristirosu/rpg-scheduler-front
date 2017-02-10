import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { routing } from './sync.routing';
import {SyncComponent} from "./sync.component";
import {NgaModule} from "../../theme/nga.module";
import {RatingModule} from "ng2-bootstrap";
import {Inputs} from "../forms/components/inputs/inputs.component";
import {Forms} from "../forms/forms.component";
import {StandardInputs} from "../forms/components/inputs/components/standardInputs/standardInputs.component";
import {ValidationInputs} from "../forms/components/inputs/components/validationInputs/validationInputs.component";
import {GroupInputs} from "../forms/components/inputs/components/groupInputs/groupInputs.component";
import {CheckboxInputs} from "../forms/components/inputs/components/checkboxInputs/checkboxInputs.component";
import {Rating} from "../forms/components/inputs/components/ratinginputs/ratinginputs.component";
import {SelectInputs} from "../forms/components/inputs/components/selectInputs/selectInputs.component";
import {InlineForm} from "../forms/components/layouts/components/inlineForm/inlineForm.component";
import {BlockForm} from "../forms/components/layouts/components/blockForm/blockForm.component";
import {HorizontalForm} from "../forms/components/layouts/components/horizontalForm/horizontalForm.component";
import {BasicForm} from "../forms/components/layouts/components/basicForm/basicForm.component";
import {WithoutLabelsForm} from "../forms/components/layouts/components/withoutLabelsForm/withoutLabelsForm.component";

@NgModule({
  imports: [
    CommonModule,
    routing,
    NgaModule,
    RatingModule,
    routing
  ],
  declarations: [
    SyncComponent
  ]
})
export default class SyncModule {}
