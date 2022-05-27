import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  template: `
    <input type="text" (input)="onUserInput($event)" [value]="name" />
    <!-- <input type="text" [(ngModel)]="name" /> -->
    <p>Hello, {{ name }} !</p>
    <p>I'm the user component</p>
  `,
})
export class UserComponent {
  @Input() name = '';
  @Output() nameChange = new EventEmitter<string>();

  onUserInput(event: Event) {
    // this.name = (event.target as HTMLInputElement).value;
    this.nameChange.emit((event.target as HTMLInputElement).value);
  }
}
