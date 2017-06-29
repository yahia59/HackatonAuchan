import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SportsService } from '../../services/sports.service';


@Component({
  selector: 'page-sport',
  templateUrl: 'sport.html'
})
export class SportPage implements OnInit {

  TotalKCal:number;
  TotalKCalWeek:number;
  TotalKCalLoose:number;
  TotalKCalWeekLoose:number;
  TotalKCalDayLoose:number;
  TotalKCalDay:number;

  TotalKCalWeekStart:string;
  TotalKCalStart:string;
  TotalKCalDayStart:string;

  customAdd:number;

  sports:any;

  constructor(public navCtrl: NavController,
              private _sports: SportsService) { }

  ngOnInit(){
    this.TotalKCalDay = parseInt(localStorage.getItem('TotalKCalDay'));
    this.TotalKCalWeek = parseInt(localStorage.getItem('TotalKCalWeek'));
    this.TotalKCal = parseInt(localStorage.getItem('TotalKCal'));
    this.TotalKCalLoose = parseInt(localStorage.getItem('TotalKCalLoose'));
    this.TotalKCalWeekLoose = parseInt(localStorage.getItem('TotalKCalWeekLoose'));
    this.TotalKCalDayLoose = parseInt(localStorage.getItem('TotalKCalDayLoose'));

    this.TotalKCalStart = localStorage.getItem('TotalKCalStart');
    this.TotalKCalWeekStart = localStorage.getItem('TotalKCalWeekStart');
    this.TotalKCalDayStart = localStorage.getItem('TotalKCalDayStart');

    this.sports = this._sports.getSportList();



  }

  addKCalLoose(nmb) {
    this.TotalKCalLoose = this.TotalKCalLoose + nmb;
    this.TotalKCalWeekLoose = this.TotalKCalWeekLoose + nmb;
    this.TotalKCalDayLoose = this.TotalKCalDayLoose + nmb;

    localStorage.setItem('TotalKCalLoose', this.TotalKCalLoose.toString());
    localStorage.setItem('TotalKCalWeekLoose', this.TotalKCalWeekLoose.toString());
    localStorage.setItem('TotalKCalDayLoose', this.TotalKCalDayLoose.toString());
    document.getElementById("test").getElementsByClassName("scroll-content")[0].scrollTop = 0;
  }

  add(index){
    this.sports[index].times += 30;
    this.sports[index].calorie += this.sports[index].baseCalorie;
  }
  minus(index){
    if(this.sports[index].times != 0) {
      this.sports[index].times -= 30;
      this.sports[index].calorie -= this.sports[index].baseCalorie;
    }
  }

  logForm(form) {
    this.TotalKCalLoose = +this.TotalKCalLoose + +this.customAdd;
    this.TotalKCalWeekLoose = +this.TotalKCalWeekLoose + +this.customAdd;
    this.TotalKCalDayLoose = +this.TotalKCalDayLoose + +this.customAdd;

    localStorage.setItem('TotalKCalLoose', this.TotalKCalLoose.toString());
    localStorage.setItem('TotalKCalWeekLoose', this.TotalKCalWeekLoose.toString());

    form.form.reset();
  }
}
