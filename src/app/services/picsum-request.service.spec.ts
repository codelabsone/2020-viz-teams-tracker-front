import { TestBed } from '@angular/core/testing';

import { PicsumRequestService } from './picsum-request.service';

describe('PicsumRequestService', () => {
  let service: PicsumRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PicsumRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
