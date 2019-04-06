import { TestBed } from '@angular/core/testing';

import { RssServiceService } from './rss-service.service';

describe('RssServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RssServiceService = TestBed.get(RssServiceService);
    expect(service).toBeTruthy();
  });
});
