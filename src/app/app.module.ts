import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, Http } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Storage, IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';

import { CardsPage } from '../pages/cards/cards';
import { MenusPage } from '../pages/menus/menus';
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

import { Api } from '../providers/api';
import { Settings } from '../providers/settings';
import { User } from '../providers/user';

import { Camera } from '@ionic-native/camera';
import { GoogleMaps } from '@ionic-native/google-maps';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { SportsService } from '../services/sports.service'
import { ProfilPage } from '../pages/profil/profil';
// The translate loader needs to know where to load i18n files
// in Ionic's static asset pipeline.
export function HttpLoaderFactory(http: Http) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export function provideSettings(storage: Storage) {
  /**
   * The Settings provider takes a set of default settings for your app.
   *
   * You can add new settings options at any time. Once the settings are saved,
   * these values will not overwrite the saved values (this can be done manually if desired).
   */
  return new Settings(storage, {
    option1: true,
    option2: 'Ionitron J. Framework',
    option3: '3',
    option4: 'Hello'
  });
}

@NgModule({
  declarations: [
    MyApp,
    CardsPage,
    MenusPage,
    ConsoPage,
    LoginPage,
    MapPage,
    MenuPage,
    SportPage,
    SettingsPage,
    SignupPage,
    ProfilPage,
    TabsPage,
    TutorialPage,
    WelcomePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [Http]
      }
    }),
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CardsPage,
    MenusPage,
    ConsoPage,
    LoginPage,
    MapPage,
    MenuPage,
    SportPage,
    SettingsPage,
    SignupPage,
    ProfilPage,
    TabsPage,
    TutorialPage,
    WelcomePage
  ],
  providers: [
    Api,
    User,
    Camera,
    GoogleMaps,
    SplashScreen,
    StatusBar,
    SportsService,
    { provide: Settings, useFactory: provideSettings, deps: [Storage] },
    // Keep this to enable Ionic's runtime error handling during development
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
