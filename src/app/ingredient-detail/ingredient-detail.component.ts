import { Component, OnInit, Input, Output } from '@angular/core';
import { Ingredient } from '../models/ingredient';
@Component({
    selector: 'app-ingredient-detail',
    templateUrl: './ingredient-detail.component.html',
    styleUrls: ['./ingredient-detail.component.scss']
})
export class IngredientDetailComponent implements OnInit {

    @Input() ingredient: Ingredient;

    constructor() { }

    ngOnInit() {

    }

}
