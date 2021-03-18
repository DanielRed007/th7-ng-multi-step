import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MultiStepRoutingModule } from "./multi-step-routing.module";
import { StepIndexComponent } from "./step-index/step-index.component";
import { Step1Component } from "./step1/step1.component";
import { Step2Component } from "./step2/step2.component";
import { Step3Component } from "./step3/step3.component";
import { CheckoutComponent } from "./checkout/checkout.component";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    StepIndexComponent,
    Step1Component,
    Step2Component,
    Step3Component,
    CheckoutComponent,
  ],
  imports: [CommonModule, MultiStepRoutingModule, ReactiveFormsModule],
})
export class MultiStepModule {}
