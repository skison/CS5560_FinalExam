import { NgModule, ErrorHandler, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { SharedModule } from './shared/shared.module';

import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { RedditsPage } from '../pages/reddits/reddits';
import { SettingsPage } from '../pages/settings/settings';
import {DetailsPage} from '../pages/details/details';
import { TabsPage } from '../pages/tabs/tabs';

import { StocksPage } from '../pages/stocks/stocks';
import { D3Service } from 'd3-ng2-service'; //for d3 capabilities
import { AuthService } from './services/auth.service';
import { AuthGuardLogin } from './services/auth-guard-login.service';
import { UserService } from './services/user.service';
import { JwtModule } from '@auth0/angular-jwt';
import { LoginComponent } from '../pages/login/login.component';
import { LogoutComponent } from '../pages/logout/logout.component';
import { RegisterComponent } from '../pages/register/register.component';

export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    RedditsPage,
    SettingsPage,
    DetailsPage,
    TabsPage,

    StocksPage,
    LoginComponent,
    LogoutComponent,
    RegisterComponent
  ],
  imports: [
    SharedModule,
    IonicModule.forRoot(MyApp),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        // whitelistedDomains: ['localhost:3000', 'localhost:4200']
      }
    })
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    RedditsPage,
    SettingsPage,
    DetailsPage,
    TabsPage,

    StocksPage,
    LoginComponent,
    LogoutComponent,
    RegisterComponent
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler}, 
    AuthService,
    AuthGuardLogin,
    UserService,
    D3Service //d3 service provider
  ]
})
export class AppModule {}
