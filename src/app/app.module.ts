import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SmoothScrollToDirective, SmoothScrollDirective } from "ng2-smooth-scroll";




import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CardsComponent } from './content/cards/cards.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { ScrollPageComponent } from './content/scroll-page/scroll-page.component';
import { DropdownDirective } from './dropdown.directive';
import { CardModule } from './content/card.module';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardsComponent,
    ContentComponent,
    FooterComponent,
    ScrollPageComponent,
    SmoothScrollToDirective,
    SmoothScrollDirective,
    DropdownDirective
  ],
  imports: [
    BrowserModule
  ],

  providers: []
  ,
  bootstrap: [AppComponent]
})
export class AppModule { }
