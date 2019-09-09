import { Injectable } from '@angular/core';
import { Beer } from '../models/beer';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class BeerApiService {

    private apiRoot = 'https://api.punkapi.com/v2/';

    constructor(private http: HttpClient) {

    }

    getBeers(searchBy: string): Observable<Beer[]> {

        const filter = searchBy ? '?beer_name=' + searchBy : '';

        return this.http.get<Beer[]>(this.apiRoot + 'beers' + filter);
    }

    getBeer(id: number): Observable<Beer> {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          // 'Authorization': 'my-auth-token'
        })
      };
        return this.http.get<Beer>(this.apiRoot + 'beers/' + id, httpOptions);
    }
}
