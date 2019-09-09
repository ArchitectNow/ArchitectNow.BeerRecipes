import { TestBed, inject } from '@angular/core/testing';

import { BeerApiService } from './beerapi.service';
import {HttpClient} from '@angular/common/http';

describe('BeerApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BeerApiService]
    });
  });

  it('should ...', inject([BeerApiService, HttpClient], (service: BeerApiService) => {
    expect(service).toBeTruthy();
  }));
});
