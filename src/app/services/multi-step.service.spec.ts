import { TestBed } from '@angular/core/testing';

import { MultiStepService } from './multi-step.service';

describe('MultiStepService', () => {
  let service: MultiStepService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MultiStepService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
