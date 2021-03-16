import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StepIndexComponent } from './step-index/step-index.component';

const routes: Routes = [{ path: '', component: StepIndexComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MultiStepRoutingModule {}
