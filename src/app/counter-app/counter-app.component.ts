import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-app',
  templateUrl: './counter-app.component.html',
  styleUrls: ['./counter-app.component.css'],
})
export class CounterAppComponent {
  counterValue: number = 0;
  finalMessage: string = '';
  btnDisable: boolean = false;
  constructor() {}

  addOne() {
    console.log('work');
    if (this.counterValue < 10) {
      this.counterValue++;
    } else {
      this.finalMessage = 'Congratulations you did it';
    }
  }

  minusOne() {
    this.counterValue--;
  }
}
