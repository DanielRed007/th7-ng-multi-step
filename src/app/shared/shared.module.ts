import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header/header.component";
import { RouterModule } from "@angular/router";
import { InputComponent } from "./input/input.component";

@NgModule({
  declarations: [HeaderComponent, InputComponent],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent, InputComponent],
})
export class SharedModule {}
