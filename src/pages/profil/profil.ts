import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';

import { MainPage } from '../../pages/pages';
import { User } from '../../providers/user';

import { TranslateService } from '@ngx-translate/core';
import { SportsService } from '../../services/sports.service';


@Component({
  selector: 'page-profil',
  templateUrl: 'profil.html'
})
export class ProfilPage implements OnInit {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  account: {name: string, firstname: string, wahoo: string, weight:number, size:number, gender:string, email: string, password: string } = {
    name: 'Morge',
    firstname: 'Eric',
    wahoo: '12684590',
    weight: 90,
    size: 173,
    gender: 'm',
    email: 'emorge@auchan.fr',
    password: 'test',

  };


  public typesLife:any[];

  sendSport:any[];
  sendTypeLife:any[];
  sendGoal:any[];

  typeMenLife:any[];
  typeWomenLife:any[];

  goals:any[];

  newsletters:boolean;
  useTerm:boolean;
  sports:any;


  selectCategory(event) {
  }

  // Our translated text strings
  private signupErrorString: string;

  constructor(public navCtrl: NavController,
    public user: User,
    public toastCtrl: ToastController,
    public translateService: TranslateService,
    private _sports: SportsService) {

    this.translateService.get('SIGNUP_ERROR').subscribe((value) => {
      this.signupErrorString = value;
    });

    this.sports = this._sports.getSportList();

    this.typeMenLife = [
      {
        name: 'Sédentaire',
        calorie: '2000 k/J'
      },
      {
        name: 'Actif',
        calorie: '2200 k/J'
      },
      {
        name: 'Sportif',
        calorie: '2400 k/J'
      }
    ];
    this.typeWomenLife = [
      {
        name: 'Sédentaire',
        calorie: '1800 k/J'
      },
      {
        name: 'Actif',
        calorie: '2000 k/J'
      },
      {
        name: 'Sportif',
        calorie: '2200 k/J'
      }
    ];

    this.goals = ['Perte de Poids', 'Maintien', 'Prise de Poids'];
  }

    ngOnInit(){
    }


  doSignup() {
    // Attempt to login in through our User service
    this.navCtrl.push(MainPage);
    // this.user.signup(this.account).subscribe((resp) => {
    //   this.navCtrl.push(MainPage);
    // }, (err) => {
    //
    //   this.navCtrl.push(MainPage);
    // TODO: Remove this when you add your signup endpoint
    //
    //   // Unable to sign up
    //   let toast = this.toastCtrl.create({
    //     message: this.signupErrorString,
    //     duration: 3000,
    //     position: 'top'
    //   });
    //   toast.present();
    // });
  }
}
