import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-rights',
  templateUrl: './rights.component.html',
  styleUrls: ['./rights.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RightsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
