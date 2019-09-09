import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angulardemo',
  templateUrl: './angulardemo.component.html',
  styleUrls: ['./angulardemo.component.scss']
})
export class AngularDemoComponent {

  nameFirst = 'Kevin';

  isActive = false;
  isChecked = false;

  lastAction = '(nothing yet)';

  showElements = false;

  states: string[] = [ 'Nebraska', 'Alabama', 'Missouri', 'Montana', 'Florida', 'New York', 'California'];

  selectedState = '';

  inputEvent: string;

  selectedNumber = 2;

  clickMe() {
    this.lastAction = 'Div Clicked';
  }

  buttonClicked() {
    this.lastAction = 'Button Clicked';
  }

  selectState(state: string) {
    this.selectedState = state;
  }

  addState(state: string) {
    if (!state) {
      return;
    }

    if (this.states.indexOf(state) < 0) {
      this.states.push(state);
    }
  }

  deleteState(state: string) {

    if (this.states.indexOf(state) < 0) {
      return;
    }

    this.states.splice(this.states.indexOf(state), 1);
  }

}
