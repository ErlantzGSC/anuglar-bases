import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `

  <p>Counter: {{counter }}</p>
  <Button (click)="addNumber(1)">+1</Button>
  <button (click)="reset()">Reset</button>
  <Button (click)="addNumber(-1)">-1</Button>
  `
})

export class CounterComponent{
  public counter :number = 10;

  addNumber(amount: number):void {
    this.counter += amount;
  }

  reset():void{
    this.counter = 10;
  }
}
