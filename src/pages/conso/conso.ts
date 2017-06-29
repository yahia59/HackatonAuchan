import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {SportsService} from '../../services/sports.service'

@Component({
  selector: 'page-conso',
  templateUrl: 'conso.html'
})
export class ConsoPage {

  date: String;
  inventory: any[];
  itemsEat: any[];
  menus: any[];
  TotalKCalDay: number;
  selected: string;


  constructor(public navCtrl: NavController, private _totalKCalDay: SportsService) {
  }

  ngOnInit() {
    this._totalKCalDay.$totalKCalDay.subscribe(value => this.TotalKCalDay = value);
    this.selected = 'portions';

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
      },
      {
        cug: '119299',
        name: 'Roquefort',
        cal: '361',
        count: '3'
      },
      {
        cug: '305410',
        name: 'Betteraves',
        cal: '146',
        count: '2'
      },
      {
        cug: '566484',
        name: 'Fines herbes',
        cal: '0',
        count: '50'
      }
    ];
    this.menus = [
      {
        name: 'Cannellonis de Betteraves',
        img: 'cannellonisbetterave.jpg',
        cal: '507',
        ingredients: [
          {
            cug: '119299',
            name: 'Roquefort',
            cal: '361',
            count: '3'
          },
          {
            cug: '305410',
            name: 'Betteraves',
            cal: '146',
            count: '2'
          },
          {
            cug: '566484',
            name: 'Fines herbes',
            cal: '0',
            count: '3'
          }
        ]
      },
      {
        name: 'Toast Oeuf/Avocat',
        img: 'oeufavocat.png',
        cal: '648',
        ingredients: []
      }
    ];
    this.itemsEat = [];
  }

  eatItem(index) {
    this.itemsEat.push(this.inventory[index]);
    this.inventory[index].count--;
    this.TotalKCalDay += parseInt(this.inventory[index].cal);
    if (!this.inventory[index].count) {
      this.inventory.splice(index, 1);
    }
    this._totalKCalDay.setTotalKCalDay(this.TotalKCalDay);
  }

  eatMenu(index) {
    for (let item in this.menus[index].ingredients) {
      this.itemsEat.push(this.menus[index].ingredients[item]);
      console.log(this.menus[index].ingredients[item]);
    }
    console.log(this.itemsEat)
    this.TotalKCalDay += parseInt(this.menus[index].cal);

    this._totalKCalDay.setTotalKCalDay(this.TotalKCalDay);
  }

}
