import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-step1",
  templateUrl: "./step1.component.html",
  styleUrls: ["./step1.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Step1Component implements OnInit {
  public step1Form: FormGroup | undefined;

  constructor(private router: Router, private fb: FormBuilder) {}

  ngOnInit(): void {}

  initForm() {
    this.step1Form = this.fb.group({});
  }

  goToStep2() {
    this.router.navigateByUrl("multi-step/step-2");
  }

  goToIndex() {
    this.router.navigateByUrl("multi-step");
  }
}
