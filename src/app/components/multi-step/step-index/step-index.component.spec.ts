import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepIndexComponent } from './step-index.component';

describe('StepIndexComponent', () => {
  let component: StepIndexComponent;
  let fixture: ComponentFixture<StepIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
