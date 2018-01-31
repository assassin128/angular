import { HeroDetailComponent } from '../../components/hero-detail/hero-detail.component';
import { HeroesComponent } from '../../components/heroes/heroes.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../../components/dashboard/dashboard.component';

const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'heroes', component: HeroesComponent },
    { path: 'detail/:id', component: HeroDetailComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: '**', redirectTo: '/dashboard' } /* realy app redirect to 404 component */
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
