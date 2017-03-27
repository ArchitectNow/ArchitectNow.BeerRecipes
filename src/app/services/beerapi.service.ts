import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Beer } from '../models/beer';


@Injectable()
export class BeerApiService {

    private apiRoot: string = 'https://api.punkapi.com/v2/';

    constructor(private http: Http) {

    }

    getBeers(searchBy: string): Observable<Beer[]> {

        var filter = searchBy ? '?beer_name=' + searchBy : '';

        return this.http.get(this.apiRoot + 'beers' + filter).map((resp: Response) => <Beer[]>resp.json());
    }

    getBeer(id: number): Observable<Beer> {
        let headers = new Headers({
            'Content-Type': 'application/json'
        });

        var options = new RequestOptions({ headers: headers });

        return this.http.get(this.apiRoot + 'beers/' + id, options).map((resp: Response) => <Beer>resp.json());
    }
}
