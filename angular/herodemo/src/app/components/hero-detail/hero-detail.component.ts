import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from './../../services/hero.service';
import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../../models/hero';


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  // @Input() hero: Hero;
  hero: Hero;
  constructor(private heroService: HeroService,
    private location: Location,
    private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.getHero();
  }

  getHero(): void {
    const id = +this.activatedRoute.snapshot.paramMap.get('id');

    this.heroService.getHero(id).subscribe(hero => this.hero = hero);
  }

  goback() {
    this.location.back();
  }

}
