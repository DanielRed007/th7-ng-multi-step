import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-step1",
  templateUrl: "./step1.component.html",
  styleUrls: ["./step1.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Step1Component implements OnInit {
  public step1Form: FormGroup | undefined;
  public inputConfig = [
    {
      label: "First Name",
      id: "inputFirstName",
      type: "text",
      error: "Field is required",
    },
  ];

  constructor(private router: Router, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.step1Form = this.fb.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      dateOfBirth: [null, Validators.required],
      gender: ["", Validators.required],
      nationality: ["", Validators.required],
    });
  }

  goToStep2() {
    this.router.navigateByUrl("multi-step/step-2");
  }

  goToIndex() {
    this.router.navigateByUrl("multi-step");
  }
}
