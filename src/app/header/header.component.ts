import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() menuItem = new EventEmitter<string>();

  menuSelected(item: string) {
    this.menuItem.emit(item);
  }


  selectedElement: string;

  aFunction(element: string) {
    this.selectedElement = element;
  }

  constructor() {
  }

  ngOnInit() {
  }

}

