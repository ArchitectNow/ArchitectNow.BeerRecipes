import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { BeerApiService } from '../services/beerapi.service';
import { Beer } from '../models/beer';

@Component({
    selector: 'app-beer-detail',
    templateUrl: './beer-detail.component.html',
    styleUrls: ['./beer-detail.component.scss']
})
export class BeerDetailComponent implements OnInit {
    beer = new Beer();

    constructor(private beerApiService: BeerApiService,
                private route: ActivatedRoute) {
    }

    ngOnInit() {
        const id = 1;

        this.route.params
            .subscribe((params: Params) => {
                if (!this.beer || this.beer.id !== id) {
                    this.loadBeer(+params['id']);
                }
            });
    }

    private loadBeer(id: number) {
        this.beerApiService.getBeer(id).subscribe(data => {
            this.beer = data[0];
        }, error => {
            alert(error);
        }, () => {
            // finally
        });
    }

}
