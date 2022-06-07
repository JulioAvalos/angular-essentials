import {Component, OnInit} from '@angular/core';
import {random} from 'lodash';
import {StarWarsService} from "./services/star-wars.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  title = 'angular-essentials';
  rootName = 'Julio';
  rootItems: string[] = ['Apples', 'Bananas', 'Cherries'];
  number = 0
  swService: StarWarsService;

  constructor(swService: StarWarsService) {
    this.swService = swService;
  }

  ngOnInit(): void {
    this.swService.fetchCharacters();
  }

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
