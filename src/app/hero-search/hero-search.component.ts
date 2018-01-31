import { Component, OnInit } from '@angular/core';
import { HeroService } from '../service/hero.service';
import { Hero } from '../hero';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { debounceTime } from 'rxjs/operators/debounceTime';
import { distinctUntilChanged } from 'rxjs/operators/distinctUntilChanged';
import { switchMap } from 'rxjs/operators/switchMap';

@Component({
    selector: 'app-hero-search',
    templateUrl: './hero-search.component.html',
    styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit {
    heroes$: Observable<Hero[]>;
    private searchTerm = new Subject<string>();
    constructor(private heroService: HeroService) { }

    ngOnInit() {
        this.heroes$ = this.searchTerm.pipe(
            debounceTime(300),
            distinctUntilChanged(),
            switchMap((term: string) => this.heroService.searchHeroes(term))
        );
    }

    search(term: string): void {
        this.searchTerm.next(term);
    }

}
