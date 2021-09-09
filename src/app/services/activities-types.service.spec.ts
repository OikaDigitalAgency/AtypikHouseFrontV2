import { TestBed } from '@angular/core/testing';

import { ActivitiesTypesService } from './activities-types.service';

describe('ActivitiesTypesService', () => {
  let service: ActivitiesTypesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActivitiesTypesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
