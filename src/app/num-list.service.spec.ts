import { TestBed } from '@angular/core/testing';

import { NumListService } from './num-list.service';

describe('NumListService', () => {
  let service: NumListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NumListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
