import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../../models/hero/hero';
import { HeroService } from '../../service/hero/hero.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
    selector: 'app-hero-detail',
    templateUrl: './hero-detail.component.html',
    styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
    @Input() hero: Hero;

    constructor(private heroService: HeroService, private routerActive: ActivatedRoute, private location: Location) { }

    ngOnInit() {
        this.getHero();
    }

    getHero(): void {
        const id = +this.routerActive.snapshot.paramMap.get('id');
        this.heroService.getHero(id).subscribe(res => this.hero = res);
    }

    goBack(): void {
        this.location.back();
    }

    save(): void {
        this.heroService.updateHero(this.hero).subscribe(() => this.goBack());
    }

}
