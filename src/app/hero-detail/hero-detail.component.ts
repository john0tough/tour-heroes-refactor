import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../hero.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero: Hero;
  constructor(private route: ActivatedRoute, private service: HeroService, private location: Location) {}

  ngOnInit() {
    this.getHero();
  }

  getHero(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id'), 10);
    this.service.getHero(id).subscribe(hero => (this.hero = hero));
  }

  goBack(): void {
    console.log(this.location);
    this.location.back();
  }
}
