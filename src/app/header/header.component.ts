import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() menuItem = new EventEmitter<string>();
  selectedElement: string;
  collapsed = true;

  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }


  menuSelected(item: string) {
    this.menuItem.emit(item);

  }

  aFunction(element: string) {
    this.selectedElement = element;
  }

  constructor() {
  }

  ngOnInit() {
  }

}

