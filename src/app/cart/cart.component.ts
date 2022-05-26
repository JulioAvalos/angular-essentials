import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  @Input() items: string[] = [];
  @Output() itemAdded = new EventEmitter<string>();
  newItem = '';

  constructor() { }

  ngOnInit(): void {
  }

  onAddItem() {
    this.itemAdded.emit(this.newItem)
  }

}
