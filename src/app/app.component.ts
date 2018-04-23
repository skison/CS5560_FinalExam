import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import {RedditService} from './services/reddit.service';

import {StocksService} from './services/stocks.service';
import { AfterViewChecked, ChangeDetectorRef } from '@angular/core';
import { AuthService } from './services/auth.service';

import { TabsPage } from '../pages/tabs/tabs';





@Component({
  templateUrl: 'app.html',
  providers: [RedditService, StocksService]
})
export class MyApp implements AfterViewChecked {
  rootPage = TabsPage;

  constructor(public auth: AuthService,
    private changeDetector: ChangeDetectorRef,
    platform: Platform) {
      
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  // This fixes: https://github.com/DavideViolante/Angular-Full-Stack/issues/105
  ngAfterViewChecked() {
    this.changeDetector.detectChanges();
  }
}
