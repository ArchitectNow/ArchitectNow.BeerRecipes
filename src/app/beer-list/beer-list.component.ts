import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

import { BeerApiService } from '../services/beerapi.service';
import { Beer } from '../models/beer';

@Component({
    selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.scss']
})
export class BeerListComponent implements OnInit {

    title = "Punk'd Beer Database";

    beers: Beer[];

    searchBy: string = '';

    isLoading: boolean = false;
    lastErr: any = null;

    constructor(private beerApiService: BeerApiService) {
    }

    ngOnInit() {
        this.loadBeers();
    }

    loadBeers() {
        this.isLoading = true;

        this.beerApiService.getBeers(this.searchBy).subscribe(data => {
            this.beers = data;
        }, error => {
            this.lastErr = error;
        }, () => {
            this.isLoading = false;
        });
    }

}
