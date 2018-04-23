import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../app/services/auth.service';
import { ToastComponent } from '../../app/shared/toast/toast.component';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html'
})

export class LogoutComponent implements OnInit {

  constructor(private auth: AuthService, public toast: ToastComponent) { }

  ngOnInit() {
    //this.tabs.tab1Root;
    /*this.auth.logout();*/
    if (this.auth.loggedIn) {
      /*this.router.navigate(['/']);*/
    }
  }

  logout()
  {
    this.auth.logout();
  }

}
