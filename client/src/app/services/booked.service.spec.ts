import { TestBed, inject } from '@angular/core/testing';

import { BookedService } from './booked.service';

describe('BookedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BookedService]
    });
  });

  it('should be created', inject([BookedService], (service: BookedService) => {
    expect(service).toBeTruthy();
  }));
});
