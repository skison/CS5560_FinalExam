import { Component } from '@angular/core';

import { RedditsPage } from '../reddits/reddits';
import { AboutPage } from '../about/about';
import { SettingsPage } from '../settings/settings';

import { StocksPage } from '../stocks/stocks';
import { LoginComponent } from '../login/login.component';
import { LogoutComponent } from '../logout/logout.component';
import { RegisterComponent } from '../register/register.component';

import { AuthService } from '../../app/services/auth.service';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = StocksPage;
  tab2Root: any = LoginComponent;
  tab3Root: any = LogoutComponent;
  tab4Root: any = RegisterComponent;

  constructor(public auth: AuthService) {

  }
}
