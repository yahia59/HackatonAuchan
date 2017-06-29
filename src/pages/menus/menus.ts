import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-content',
  templateUrl: 'menus.html'
})
export class MenusPage {

  checktoggle:boolean;



  constructor(public navCtrl: NavController, navParams: NavParams, public toastCtrl: ToastController) {
    this.checktoggle=false;
  }
  presentToast() {
    this.checktoggle= !this.checktoggle;
  }
}
