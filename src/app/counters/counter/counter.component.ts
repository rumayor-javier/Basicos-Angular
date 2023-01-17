import { Component} from '@angular/core'

@Component({
    selector: 'app-counter',
    template: `
    <h1>{{ title }}</h1>
    <h3>
        La base es: <strong>{{ base }}</strong>
    </h3>

    <button (click)="calc(-base)">- {{ base }}</button>
        <span>{{ count }}</span>
    <button (click)="calc(base)">+ {{ base }}</button>
    `
})
export class CounterComponent {
    title: string = 'Count Component';
    count: number = 10;
    base: number = 5;
  
    calc( value: number ) {
      this.count += value;
    }
}