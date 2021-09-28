import { TestBed } from '@angular/core/testing';

import { WeaterService } from './weater.service';

describe('WeaterService', () => {
  let service: WeaterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeaterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
