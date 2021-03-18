import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MultiStepRoutingModule } from "./multi-step-routing.module";
import { StepIndexComponent } from "./step-index/step-index.component";
import { Step1Component } from "./step1/step1.component";

@NgModule({
  declarations: [StepIndexComponent, Step1Component],
  imports: [CommonModule, MultiStepRoutingModule],
})
export class MultiStepModule {}
