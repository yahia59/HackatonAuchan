import { Injectable } from '@angular/core';

@Injectable()

export class SportsService {

  constructor() {
  }

  getSportList() {
    return  [
      {
        name:'Course à pied',
        calorie:1000,
        temps:'1 h'
      },
      {
        name:'Natation',
        calorie:500,
        temps:'1 h'
      },
      {
        name:'Marche',
        calorie:300,
        temps:'1 h'
      },
      {
        name:'Foot',
        calorie:900,
        temps:'1 h'
      },
      {
        name:'Tennis',
        calorie:800,
        temps:'1 h'
      },
      {
        name:'Cross Fit',
        calorie:1000,
        temps:'1 h'
      },
      {
        name:'Ping Pong',
        calorie:900,
        temps:'1 h'
      }]
  }

}

export interface Sports {
  name: string;
  calorie: number;
  times: string;
}
