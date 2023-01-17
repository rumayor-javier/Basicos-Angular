import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
  deletedHero: string = '';

  deleteHero () {
    this.deletedHero = this.heroes.shift() || '';
  }
}