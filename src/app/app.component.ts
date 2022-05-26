import { Component } from '@angular/core';
import { random } from 'lodash';

// declare var _: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-essentials';
  rootName = 'Julio';

  rootItems: string[] = ['Apples', 'Bananas', 'Cherries'];

  number = 0;

  onNameChange(newName: string) {
    this.rootName = newName;
  }

  onItemWasAdded(newItem: string) {
    this.rootItems.push(newItem);
    console.log(this.rootItems);
  }

  onIncrease() {
    this.number = random(1, 10);
  }
}
