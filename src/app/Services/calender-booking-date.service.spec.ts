import { TestBed } from '@angular/core/testing';

import { CalenderBookingDateService } from './calender-booking-date.service';

describe('CalenderBookingDateService', () => {
  let service: CalenderBookingDateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalenderBookingDateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
