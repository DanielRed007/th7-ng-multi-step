import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-step3",
  templateUrl: "./step3.component.html",
  styleUrls: ["./step3.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Step3Component implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToCheckout() {
    this.router.navigateByUrl("multi-step/checkout");
  }

  goToStep2() {
    this.router.navigateByUrl("multi-step/step-2");
  }
}
