import { Injectable } from '@angular/core';
import { ICharacter, SwResponse } from '../interfaces';
import { LogService } from './log.service';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class StarWarsService {
  private characters = [
    { name: 'Luke Skywalker', side: '' },
    { name: 'Darth Vader', side: '' },
  ];

  private logService: LogService;
  charactersChanged = new Subject<void>();
  http: HttpClient;

  constructor(logService: LogService, http: HttpClient) {
    this.logService = logService;
    this.http = http;
  }

  fetchCharacters() {
    this.http
      .get<SwResponse>('https://swapi.dev/api/people')
      .subscribe((response) => {
        const extractedChars = response.results;
        this.characters = extractedChars.map((char) => ({
          name: char.name,
          side: '',
        }));
        this.charactersChanged.next();
      });
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
    this.charactersChanged.next();
    this.logService.writeLog(
      'Change side of ' + charInfo.name + ', new side: ' + charInfo.side
    );
  }

  addCharacter({ name, side }: ICharacter) {
    const pos = this.characters.findIndex((char) => {
      return char.name === name;
    });
    if (pos !== -1) {
      return;
    }
    const newChar = { name, side };
    this.characters.push(newChar);
  }
}
