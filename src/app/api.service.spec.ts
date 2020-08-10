import { TestBed } from '@angular/core/testing';

import { ApiService } from './api.service';


/*
Author : Devika Walavalkar
This file is the spec file for the api service
*/

describe('ApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiService = TestBed.get(ApiService);
    expect(service).toBeTruthy();
  });
});
