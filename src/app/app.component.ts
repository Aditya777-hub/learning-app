import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CardsComponent } from "./cards/cards.component";
import { LearnComponent } from "./learn/learn.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterLink, RouterLinkActive, CardsComponent, LearnComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  selectedTab: string = '';
  showCards: boolean = true;
  showlearn: boolean = true;

  constructor(private router: Router) {

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {

        this.showCards = event.url === '/';
      }
    });

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {

        this.showlearn = event.url === '/';
      }
    });
  }

  selectTab(tab: string) {
    this.selectedTab = tab;
  }
}
