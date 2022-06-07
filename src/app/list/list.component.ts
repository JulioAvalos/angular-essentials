import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {ICharacter} from '../interfaces';
import {StarWarsService} from '../services/star-wars.service';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit, OnDestroy {
  characters: ICharacter[] = [];
  activatedRoute: ActivatedRoute;
  swService: StarWarsService;
  loadedSide = 'all';
  subscription: Subscription;

  constructor(activatedRoute: ActivatedRoute, swService: StarWarsService) {
    this.activatedRoute = activatedRoute;
    this.swService = swService;

    this.subscription = this.swService.charactersChanged.subscribe(() => {
      this.characters = this.swService.getCharacters(this.loadedSide);
    });
  }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe((params: Params) => {
      this.characters = this.swService.getCharacters(params['side']);
      this.loadedSide = params['side'];
    });
  }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
}
