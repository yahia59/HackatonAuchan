import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()

export class SportsService {

  $totalKCalDay: Observable<number>;
  _$totalKCalDay: BehaviorSubject<number> = new BehaviorSubject(0);

  totalKCalDay:number;

  constructor() {
    this.$totalKCalDay = this._$totalKCalDay.asObservable();
    this.$totalKCalDay.subscribe(value => localStorage.setItem('TotalKCalDay', value.toString()));
  }

  setTotalKCalDay(value: number) {
    this._$totalKCalDay.next(value);
  }

  getSportList() {
    return  [
      {
        name:'Footing',
        calorie:500,
        baseCalorie:500,
        times:30,

      },
      {
        name:'Natation',
        calorie:500,
        baseCalorie:500,
        times:30
      },
      {
        name:'Marche',
        calorie:300,
        baseCalorie:300,
        times:30
      },
      {
        name:'Foot',
        calorie:450,
        baseCalorie:450,
        times:30
      },
      {
        name:'Tennis',
        calorie:400,
        basCalorie:400,
        times:30
      },
      {
        name:'Cross Fit',
        calorie:500,
        baseCalorie:500,
        times:'1h'
      },
      {
        name:'Ping Pong',
        calorie:450,
        baseCalorie:450,
        times:30
      }]
  }

}

export interface Sports {
  name: string;
  calorie: number;
  times: string;
}
