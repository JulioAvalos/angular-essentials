import { Component, OnInit } from '@angular/core';
import { ICharacter } from '../interfaces';
import { StarWarsService } from '../services/star-wars.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit {
  characters: ICharacter[] = [];
  chosenList = 'all';
  swService: StarWarsService;

  constructor(swService: StarWarsService) {
    this.swService = swService;
  }

  ngOnInit(): void {}

  onChoose(side: string) {
    this.chosenList = side;
  }

  getCharacters() {
    this.characters = this.swService.getCharacters(this.chosenList);
    return this.characters;
  }
}
