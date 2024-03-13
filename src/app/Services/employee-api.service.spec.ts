import { TestBed } from '@angular/core/testing';

import { EMployeeApiService } from './employee-api.service';

describe('EMployeeApiService', () => {
  let service: EMployeeApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EMployeeApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
