import { TestBed } from '@angular/core/testing';

import { CoorditanesService } from './coorditanes.service';

describe('CoorditaneServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CoorditanesService = TestBed.get(CoorditanesService);
    expect(service).toBeTruthy();
  });
});
