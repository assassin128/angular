import { HeroService } from './../../service/hero/hero.service';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../../models/hero/hero';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    heroes: Hero[];

    constructor(private heroService: HeroService) { }

    ngOnInit() {
        this.getHeroes();
    }

    getHeroes(): void {
        this.heroService.getHeroes().subscribe(res => this.heroes = res.slice(1, 5));
    }

}
