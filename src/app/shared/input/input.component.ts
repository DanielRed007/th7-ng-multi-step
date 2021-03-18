import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from "@angular/core";

@Component({
  selector: "stp-input",
  templateUrl: "./input.component.html",
  styleUrls: ["./input.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent implements OnInit {
  @Input() id!: string;
  @Input() label!: string;
  @Input() type!: string;
  @Input() error!: string;

  constructor() {}

  ngOnInit(): void {}
}
