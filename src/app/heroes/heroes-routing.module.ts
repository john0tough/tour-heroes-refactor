import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes.component';
import { NgModule } from '@angular/core';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HeroesListComponent } from './heroes-list.component';
import { DashboardComponent } from '../dashboard/dashboard.component';

/* scope heroes */
const routes: Routes = [
    { path: '', pathMatch: 'prefix', redirectTo: 'dashboard'},
    { path: '', component: HeroesComponent,
        children: [
            { path: 'list', component: HeroesListComponent},
            { path: 'dashboard', component: DashboardComponent},
        ]},
    {path: ':id', component: HeroDetailComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HeroesRoutingModule {}
