import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-step1",
  templateUrl: "./step1.component.html",
  styleUrls: ["./step1.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Step1Component implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToStep2() {
    this.router.navigateByUrl("multi-step/step-2");
  }

  goToIndex() {
    this.router.navigateByUrl("multi-step");
  }
}
