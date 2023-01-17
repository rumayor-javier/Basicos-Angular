import { Component } from "@angular/core";

@Component({
    selector: 'app-hero',
    templateUrl: 'hero.component.html'
})
export class HeroComponent {
    title: string = 'Heroes Component';
    name: string = 'Ironman';
    age: number = 45;

    get capitalizedName(): string {
        return this.name.toUpperCase();
    }

    getName(): string {
        return `${ this.name}, ${this.age} years`
    }

    changeName():void {
        this.name = 'Spiderman';
    }

    changeAge():void {
        this.age = 30;
    }
}