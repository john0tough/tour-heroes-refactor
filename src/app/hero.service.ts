import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';
import { Hero } from './hero';
import { Observable, of } from 'rxjs';
import { MessageService } from './core/message.service';

@Injectable()
export class HeroService {

  constructor(
    private service: MessageService
    ) { }

  getHeroes(): Observable<Hero[]> {
    this.service.add('Heroes Service: fetched heroes');
    return of(HEROES);
  }
  getHero(id: number): Observable<Hero> {
    this.service.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}
