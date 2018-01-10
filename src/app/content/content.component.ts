import { Component, OnInit } from '@angular/core';


import { CardsComponent } from './cards/cards.component';
import { CardModule } from './card.module';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  time = 0;
  cardContent = new CardsComponent().cards[this.time];
  loadedMenu: string;

  onSelection(feature: number) {
    this.time = feature;
    this.cardContent = new CardsComponent().cards[this.time];
    this.loadedMenu = 'default';

  }


  onNavigate(feature: string) {
    this.loadedMenu = feature;
    this.cardContent = new CardsComponent().cards[0];

  }

  constructor() {
  }

  ngOnInit() {
  }

}
