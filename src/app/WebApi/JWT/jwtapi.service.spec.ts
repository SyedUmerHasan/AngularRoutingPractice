import { TestBed } from '@angular/core/testing';

import { JWTapiService } from './jwtapi.service';

describe('JWTapiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JWTapiService = TestBed.get(JWTapiService);
    expect(service).toBeTruthy();
  });
});
