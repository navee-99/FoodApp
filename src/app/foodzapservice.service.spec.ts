import { TestBed } from '@angular/core/testing';

import { FoodzapserviceService } from './foodzapservice.service';

describe('FoodzapserviceService', () => {
  let service: FoodzapserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoodzapserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
