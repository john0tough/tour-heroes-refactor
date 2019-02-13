import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes.component';
import { NgModule } from '@angular/core';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HeroesListComponent } from './heroes-list.component';

/* scope heroes */
const routes: Routes = [
    { path: '', pathMatch: 'prefix', redirectTo: 'list'},
    { path: '', component: HeroesComponent,
        children: [
            {path: 'list', component: HeroesListComponent}
        ]},
    {path: ':id', component: HeroDetailComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HeroesRoutingModule {}
