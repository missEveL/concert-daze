import { TestBed } from '@angular/core/testing';

import { ConcertSpectService } from './concert-spect.service';

describe('ConcertSpectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConcertSpectService = TestBed.get(ConcertSpectService);
    expect(service).toBeTruthy();
  });
});
