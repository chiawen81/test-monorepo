import { TestBed } from '@angular/core/testing';

import { YourLibService } from './your-lib.service';

describe('YourLibService', () => {
  let service: YourLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YourLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
