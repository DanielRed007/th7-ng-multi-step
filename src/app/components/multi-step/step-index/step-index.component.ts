import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-step-index',
  templateUrl: './step-index.component.html',
  styleUrls: ['./step-index.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StepIndexComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
