import { Injectable } from '@angular/core';
import { ICharacter } from '../interfaces';
import { LogService } from './log.service';

@Injectable()
export class StarWarsService {
  private characters = [
    { name: 'Luke Skywalker', side: '' },
    { name: 'Darth Vader', side: '' },
  ];

  private logService: LogService;

  constructor(logService: LogService) {
    this.logService = logService;
  }

  getCharacters(chosenList: string) {
    if (chosenList === 'all') {
      return this.characters.slice();
    }
    return this.characters.filter((char) => {
      return char.side === chosenList;
    });
  }

  onSideChosen(charInfo: ICharacter) {
    const pos = this.characters.findIndex((char) => {
      return char.name === charInfo.name;
    });

    this.characters[pos].side = charInfo.side;
    this.logService.writeLog(
      'Change side of ' + charInfo.name + ', new side: ' + charInfo.side
    );
  }
}