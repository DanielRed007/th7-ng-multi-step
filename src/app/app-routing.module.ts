import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";

const routes: Routes = [
  // {
  //   path: "admin",
  //   loadChildren: () =>
  //     import("./components/admin/admin.module").then((m) => m.AdminModule),
  // },
  {
    path: "multi-step",
    loadChildren: () =>
      import("./components/multi-step/multi-step.module").then(
        (m) => m.MultiStepModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
