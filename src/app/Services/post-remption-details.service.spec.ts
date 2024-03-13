import { TestBed } from '@angular/core/testing';

import { PostRemptionDetailsService } from './post-remption-details.service';

describe('PostRemptionDetailsService', () => {
  let service: PostRemptionDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostRemptionDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
