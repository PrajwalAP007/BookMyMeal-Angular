import { TestBed } from '@angular/core/testing';

import { PreRemptionDetailsService } from './pre-remption-details.service';

describe('PreRemptionDetailsService', () => {
  let service: PreRemptionDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PreRemptionDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
