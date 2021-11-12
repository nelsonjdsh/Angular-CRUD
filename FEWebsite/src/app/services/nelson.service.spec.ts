import { TestBed } from '@angular/core/testing';

import { NelsonService } from './nelson.service';

describe('NelsonService', () => {
  let service: NelsonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NelsonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
