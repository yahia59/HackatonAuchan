import {Component} from '@angular/core';
import { NavController } from 'ionic-angular';
import { SportsService } from '../../services/sports.service'

@Component({
  selector: 'page-conso',
  templateUrl: 'conso.html'
})
export class ConsoPage {

  date: String;
  inventory: any[];
  itemsEat: any[];
  TotalKCalDay: number;


  constructor(public navCtrl: NavController, private _totalKCalDay:SportsService ) {
  }

  ngOnInit() {
    this._totalKCalDay.$totalKCalDay.subscribe(value => this.TotalKCalDay = value);

    this.date = new Date().toISOString();
    this.inventory = [
      {
        cug: '80659',
        name: 'Pain au chocolat',
        cal: '400',
        count: '3'
      },
      {
        cug: '11974',
        name: 'Pizza',
        cal: '266',
        count: '2'
      },
      {
        cug: '12095',
        name: 'Pizza',
        cal: '282',
        count: '1'
      },
      {
        cug: '141418',
        name: 'Coca',
        cal: '38',
        count: '5'
      },
      {
        cug: '10087',
        name: 'Carottes rapées',
        cal: '29',
        count: '1'
      },
      {
        cug: '863632',
        name: 'Taboulé',
        cal: '160',
        count: '1'
      },
      {
        cug: '243954',
        name: 'Tarte aux pommes',
        cal: '237',
        count: '8'
      }
    ]
    this.itemsEat = []
  }

  eatItem(index){
    this.itemsEat.push(this.inventory[index]);
    this.inventory[index].count--;
    this.TotalKCalDay += parseInt(this.inventory[index].cal);
    if (!this.inventory[index].count) {
      this.inventory.splice(index, 1);
    }
    this._totalKCalDay.setTotalKCalDay(this.TotalKCalDay);
  }

}
