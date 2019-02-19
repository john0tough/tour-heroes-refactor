import { NgModule } from '@angular/core';
import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroesComponent } from './heroes.component';
import { HeroService } from '../hero.service';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HeroesListComponent } from './heroes-list.component';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from '../dashboard/dashboard.component';

@NgModule({
    imports: [CommonModule, FormsModule, HeroesRoutingModule],
    declarations: [
        HeroesComponent,
        HeroesListComponent,
        HeroDetailComponent,
        DashboardComponent
    ],
    providers: [HeroService]
})
export class HeroesModule {}
