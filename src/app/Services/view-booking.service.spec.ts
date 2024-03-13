import { TestBed } from '@angular/core/testing';

import { ViewBookingService } from './view-booking.service';

describe('ViewBookingService', () => {
  let service: ViewBookingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewBookingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
