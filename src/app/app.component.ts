import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, Config } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { CardsPage } from '../pages/cards/cards';
import { MenusPage } from '../pages/menus/menus';
import { FirstRunPage } from '../pages/pages';
import { ConsoPage } from '../pages/conso/conso';
import { LoginPage } from '../pages/login/login';
import { MapPage } from '../pages/map/map';
import { MenuPage } from '../pages/menu/menu';
import { SportPage } from '../pages/sport/sport';
import { SettingsPage } from '../pages/settings/settings';
import { SignupPage } from '../pages/signup/signup';
import { TabsPage } from '../pages/tabs/tabs';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { WelcomePage } from '../pages/welcome/welcome';

import { Settings } from '../providers/providers';

import { TranslateService } from '@ngx-translate/core'
import { ProfilPage } from '../pages/profil/profil';

@Component({
  template: `<ion-menu [content]="content">
    <ion-header>
      <ion-toolbar>
        <ion-title>Menu</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-list>
        <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">
          {{p.title}}
        </button>
      </ion-list>
    </ion-content>

  </ion-menu>
  <ion-nav #content [root]="rootPage"></ion-nav>`
})
export class MyApp {
  rootPage = FirstRunPage;

  @ViewChild(Nav) nav: Nav;

  pages: any[] = [
    { title: 'Profil', component: ProfilPage },
    { title: 'Consommations', component: ConsoPage },
    { title: 'Sport', component: SportPage },
    { title: 'Content', component: MenusPage },
  ]

  constructor(private translate: TranslateService, private platform: Platform, settings: Settings, private config: Config, private statusBar: StatusBar, private splashScreen: SplashScreen) {
    this.initTranslate();
  }

  ionViewDidLoad() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  initTranslate() {
    // Set the default language for translation strings, and the current language.
    this.translate.setDefaultLang('en');

    if (this.translate.getBrowserLang() !== undefined) {
      this.translate.use(this.translate.getBrowserLang());
    } else {
      this.translate.use('en'); // Set your language here
    }

    this.translate.get(['BACK_BUTTON_TEXT']).subscribe(values => {
      this.config.set('ios', 'backButtonText', values.BACK_BUTTON_TEXT);
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  ngOnInit() {
    if (localStorage.getItem("TotalKCal") === null) {
      localStorage.setItem('TotalKCal', '294800');
      localStorage.setItem('TotalKCalStart', '14-02-2017');
      localStorage.setItem('TotalKCalWeek', '15400');
      localStorage.setItem('TotalKCalWeekStart', '22-06-2017');
      localStorage.setItem('TotalKCalDay', '0');
      localStorage.setItem('TotalKCalDayStart', '29-06-2017');
      localStorage.setItem('TotalKCalLoose', '274800');
      localStorage.setItem('TotalKCalWeekLoose', '16400');
      localStorage.setItem('TotalKCalDayLoose', '2200');
    }
    console.log(localStorage.getItem("TotalKCal"))

  }
}
