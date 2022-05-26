import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit {
  characters = [
    { name: 'Luke Skywaler', side: '' },
    { name: 'Darth Vader', side: '' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
