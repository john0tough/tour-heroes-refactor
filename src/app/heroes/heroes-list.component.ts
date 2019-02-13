import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes-list',
  styleUrls: ['./heroes.component.css'],
  template: `
  <ul class="heroes">
    <li *ngFor="let hero of heroes">
        <a routerLink="{{ '../' + hero.id}}"><span class="badge">{{hero.id}}</span> {{hero.name}}</a>
    </li>
</ul>
`
})
export class HeroesListComponent implements OnInit {
  heroes: Hero[];
  constructor(private service: HeroService) { }
  selectedHero: Hero;

  ngOnInit() {
    this.service.getHeroes()
      .subscribe(heroes => {
        console.log(heroes);
        this.heroes = heroes;
      });
  }

  // onHeroSelect(newHero: Hero) {
  //   this.selectedHero = newHero;
  // }
}
