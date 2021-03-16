import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MultiStepRoutingModule } from './multi-step-routing.module';
import { StepIndexComponent } from './step-index/step-index.component';


@NgModule({
  declarations: [StepIndexComponent],
  imports: [
    CommonModule,
    MultiStepRoutingModule
  ]
})
export class MultiStepModule { }
