import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CardModule } from '../card.module';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @Output() cardSelection = new EventEmitter<number>();

  showCardInContent(feature: number) {
    this.cardSelection.emit(feature);
  }

  about: string = 'Jestem Paweł, mieszkam w Krakowie i każdą wolną chwilę (których nie mam zbyt wiele) przeznaczam na ' +
    'naukę programowania. Rok temu ustanowiłem sobie cel: "zmienić swoje życie oraz pracę". I dążę do niego konsekwentnie. ' +
    'Poza programowaniem uwielbiam jeździć na rowerze (MTB-XC), interesuje się lotnictwem oraz szeroko pojętym IoT. ' +
    'Zachęcam do zapoznania się z moim skromnym życiorysem, ściągnięcia "oficjalnego" CV, a przede wszystkim do kontaktu. ';

  aboutPast: string = 'Już w liceum, zafascynowany chemią i biologią wybrałem biotechnologię jako kierunek mojej edukacji. Pięć lat studiów, ' +
    'był to cudowny czas poznawania fascynującej i trudnej wiedzy m.in. z zakresu genetyki, biologii molekularnej oraz wszelakich metod analitycznych. ' +
    'A także okres, w którym poznałem wielu wspaniałych ludzi. Pomimo mojej ogromnej chęci do przebranżowienia, nie żałuje wybranych studiów. Uważam ' +
    'biotechnologię za super ciekawy kierunek, aczkolwiek zbyt zaawansowany jak na aktualny rynek pracy.';

  aboutNow: string = 'Aktualnie pracuję w dziale Preparatyki Regionalnego Centrum Krwiodawstwa i Krwiolecznictwa w Krakowie. ' +
    'Brzmi enigmatycznie i tak też jest w rzeczywistości. Wiedza wyniesiona ze studiów jedynie w minimalnym stopniu ułatwiła mi ' +
    'wdrożenie w świat krwiodawstwa. Do moich głównych obowiązków należy wykonywanie preparatów krwiopochodnych, szkolenie pracowników oraz ' +
    'jako audytor - kontrola innych oddziałów. Umiejętności szybkiego przyswajania wiedzy, logicznego myślenia oraz dokładność przydały mi się zarówno na początku ' +
    'mojej drogi zawodowej, jak i podczas nauki programowania.  ';

  aboutFuture: string = 'Chęć rozwoju oraz poszukiwanie nowych wyzwań doprowadziły mnie do zainteresowania się tematem programowania. ' +
    'Aktualnie przerodziło się to w hobby, pasję, hektolitry wypitej kawy i mnóstwo godzin spędzonych w nocy przed komputerem. W Czasie ostatnich 12 miesięcy poznałem ' +
    'między innymi takie technologie jak: Java, Spring, MySQL, Angular. Poznałem również metodologię pracy Agile, sam staram się stosować Scrum w swojej nauce, oraz projektach. ' +
    'Dla doskonalenia pracy i w celu uzyskania "feedbacku" od bardziej doświadczonych osób. Obecnie uczestniczę jako kontrybutor w projekcie opensource. ' +
    'Ciągle się uczę, idę iteracyjnie do przodu i jestem pewien, że wkrótce będę mógł także ' +
    'zawodowo zająć się programowaniem.';

  @Output('kart') cards: Array<CardModule> = [
    new CardModule('Dzień Dobry!', this.about, '/assets/img/def.jpeg'),
    new CardModule('Przeszłość', this.aboutPast, '/assets/img/past.jpeg'),
    new CardModule('Teraźniejszość', this.aboutNow, '/assets/img/now.jpg'),
    new CardModule('Przyszłość', this.aboutFuture, '/assets/img/future.jpg'),
  ];


  constructor() {
  }


  ngOnInit() {
  }

}
