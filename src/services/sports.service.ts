import { Injectable } from '@angular/core';

@Injectable()

export class SportsService {

  constructor() {
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
