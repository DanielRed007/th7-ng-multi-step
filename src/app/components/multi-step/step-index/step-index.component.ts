import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-step-index",
  templateUrl: "./step-index.component.html",
  styleUrls: ["./step-index.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StepIndexComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToSteps() {
    this.router.navigateByUrl("/step-1");
  }
}
