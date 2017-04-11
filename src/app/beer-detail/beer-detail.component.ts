import { Component} from '@angular/core';
import { Beer } from '../models/beer';

@Component({
    selector: 'app-beer-detail',
    templateUrl: './beer-detail.component.html',
    styleUrls: ['./beer-detail.component.scss']
})
export class BeerDetailComponent {

    @Input()
    beer: Beer;

    detail = false;
    constructor() {

    }
    showDetail() {
        this.detail = !this.detail;
    }
}
