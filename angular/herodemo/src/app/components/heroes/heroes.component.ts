import { HeroService } from './../../services/hero.service';
import { Hero } from './../../models/hero';
import { Component, OnInit } from '@angular/core';
import { HEROES } from '../../services/mock-heroes';



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  // hero='WindStorm';

  // hero: Hero = {
  //   id: 1,
  //   name: 'lizc'
  // };

  // heroes = HEROES;
  heroes: Hero[];

  // selectedHero: Hero;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    // this.heroes = this.heroService.getHeroes();
    // this.heroes =
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);

  }


  // selectHero(hero: Hero) {
  //   this.selectedHero = hero;
  // }

  // clearSelected() {
  //   this.selectedHero = null;
  // }

}
