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

    this.date = new Date().toISOString();
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
