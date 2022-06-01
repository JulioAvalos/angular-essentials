import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ICharacter } from '../interfaces';
import { StarWarsService } from '../services/star-wars.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  characters: ICharacter[] = [];
  activatedRoute: ActivatedRoute;
  swService: StarWarsService;

  constructor(activatedRoute: ActivatedRoute, swService: StarWarsService) {
    this.activatedRoute = activatedRoute;
    this.swService = swService;
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.characters = this.swService.getCharacters(params['side']);
    });
  }
}
