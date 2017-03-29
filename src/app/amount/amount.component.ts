import { Component, OnInit, Input } from '@angular/core';
import { Amount } from '../models/amount';

@Component({
  selector: 'app-amount',
  templateUrl: './amount.component.html',
  styleUrls: ['./amount.component.scss']
})
export class AmountComponent implements OnInit {

  @Input() amount: Amount;

  constructor() { }

  ngOnInit() {
  }

}
