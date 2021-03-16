import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { UserComponent } from './user/user.component';
import { RightsComponent } from './rights/rights.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [UserComponent, RightsComponent, DashboardComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  exports: [DashboardComponent]
})
export class AdminModule { }
