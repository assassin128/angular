import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clubs',
  templateUrl: './clubs.component.html',
  styleUrls: ['./clubs.component.css']
})
export class ClubsComponent implements OnInit {
  clubs = [{name: 'Liverpool'}, {name: 'Chelsea'}, {name: 'Manchester United'}];
  inputClub: string;
  constructor() { }

  ngOnInit() {
  }

  addClubs() {
    if (this.inputClub !== '') {
      this.clubs.push({ name: this.inputClub });
    }
  }

}
