import { MessageService } from './message.service';
import { HEROES } from './mock-heroes';
import { Hero } from './../models/hero';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/rx';
import { of } from 'rxjs/observable/of';
// import { Observable, of } from 'rxjs';
@Injectable()
export class HeroService {

  // 服务中的服务
  constructor(public messageService: MessageService) { }


  // getHeroes() {
  //   return HEROES;
  // }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('接口获取到数据');
    return of(HEROES);
  }


  getHero(id): Observable<Hero> {
    this.messageService.add(`接口获取到数据id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }

}
