import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { StepIndexComponent } from "./step-index/step-index.component";
import { Step1Component } from "./step1/step1.component";

const routes: Routes = [
  { path: "", component: StepIndexComponent },
  { path: "step-1", component: Step1Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MultiStepRoutingModule {}
