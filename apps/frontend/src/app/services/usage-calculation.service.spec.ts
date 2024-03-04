import { TestBed } from '@angular/core/testing';

import { UsageCalculationService } from './usage-calculation.service';

describe('UsageCalculationService', () => {
  let service: UsageCalculationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsageCalculationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
