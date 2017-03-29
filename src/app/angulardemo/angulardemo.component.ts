import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angulardemo',
  templateUrl: './angulardemo.component.html',
  styleUrls: ['./angulardemo.component.scss']
})
export class AngularDemoComponent {

  nameFirst: string = "Kevin";

  isActive: boolean = false;
  isChecked: boolean = false;

  lastAction: string = "(nothing yet)";

  clickMe() {
    this.lastAction = "Div Clicked";
  }

  buttonClicked() {
    this.lastAction = "Button Clicked";
  }

  showElements: boolean = false;

  states: string[] = [ "Nebraska", "Alabama", "Missouri", "Montana", "Florida","New York", "California"];

  selectedState: string = "";

  inputEvent: string;

  selectState(state: string) {
    this.selectedState = state;
  }

  addState(state: string) {
    if (!state) {
      return;
    }

    if (this.states.indexOf(state)<0)
    {
      this.states.push(state);
    }
  }

  deleteState(state: string) {

    if (this.states.indexOf(state)<0)
    {
      return;
    }

    this.states.splice(this.states.indexOf(state),1);
  }

  selectedNumber: number = 2;

}
