import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  characters = [
    { name: 'Luke Skywaler', side: '' },
    { name: 'Darth Vader', side: '' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
