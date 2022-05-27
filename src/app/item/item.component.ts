import { Component, Input, OnInit } from '@angular/core';
import { StarWarsService } from '../services/star-wars.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  @Input() character: any;
  swService: StarWarsService;

  constructor(swService: StarWarsService) {
    this.swService = swService;
  }

  ngOnInit(): void {}

  onAssign(side: string) {
    this.swService.onSideChosen({ name: this.character.name, side: side });
  }
}
