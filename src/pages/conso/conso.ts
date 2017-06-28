import {Component} from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-conso',
  templateUrl: 'conso.html'
})
export class ConsoPage {

  date: String;
  inventory: any[];


  constructor(public navCtrl: NavController) { }

  ngOnInit(){

    localStorage.setItem('TotalKCal', '0');
    localStorage.setItem('TotalKCalStart', '14-02-2017');
    localStorage.setItem('TotalKCalWeek', '0');
    localStorage.setItem('TotalKCalWeekStart', '22-06-2017');
    localStorage.setItem('TotalKCalDay', '0');
    localStorage.setItem('TotalKCalDayStart', '29-06-2017');
    localStorage.setItem('TotalKCalLoose', '0');
    localStorage.setItem('TotalKCalWeekLoose', '0');
    localStorage.setItem('TotalKCalDayLoose', '0');

    this.date = new Date().toISOString();
    console.log(this.date)
    this.inventory = [
      {
        cug: '573891',
        stock: '1'
      },
      {
        cug: '10087',
        stock: '1'
      },
      {
        cug: '86363',
        stock: '1'
      }
    ]
  }



}
