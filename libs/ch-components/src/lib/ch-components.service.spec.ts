import { TestBed } from '@angular/core/testing';

import { ChComponentsService } from './ch-components.service';

describe('ChComponentsService', () => {
  let service: ChComponentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChComponentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
