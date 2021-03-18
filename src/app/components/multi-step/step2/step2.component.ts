import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-step2",
  templateUrl: "./step2.component.html",
  styleUrls: ["./step2.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Step2Component implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToStep3() {
    this.router.navigateByUrl("multi-step/step-3");
  }

  goToStep1() {
    this.router.navigateByUrl("multi-step/step-1");
  }
}
