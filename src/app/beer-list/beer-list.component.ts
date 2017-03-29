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

    title = 'Kevins beer database';

    beers: Beer[];

    searchBy: string = '';

    constructor(private beerApiService: BeerApiService) {
    }

    ngOnInit() {
        this.loadBeers();
    }

    loadBeers() {
        this.beerApiService.getBeers(this.searchBy).subscribe(data => {
            this.beers = data;

        }, error => {
            alert(error);
        }, () => {
            //finally
        });
    }

}
