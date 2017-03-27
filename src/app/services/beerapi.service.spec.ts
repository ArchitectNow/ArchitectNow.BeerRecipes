import { TestBed, inject } from '@angular/core/testing';

import { BeerApiService } from './beerapi.service';

describe('BeerApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BeerApiService]
    });
  });

  it('should ...', inject([BeerApiService], (service: BeerApiService) => {
    expect(service).toBeTruthy();
  }));
});
