import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  text = 'default starting text';
  persons: string[] = ['Max', 'Manuel', 'Anna', 'Jones', 'Sam'];

  onChangeText() {
    this.text = 'YEERRRRRRR';
  }

  onPersonCreated(personCreated: string) {
    this.persons.push(personCreated);
  }
}
