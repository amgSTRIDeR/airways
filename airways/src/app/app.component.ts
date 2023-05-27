import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { GoogleApiService } from '@core/services/google-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public isMainPage = false;

  constructor(
    private router: Router,
    private readonly google: GoogleApiService
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isMainPage = event.url.startsWith('/main');
      }
    });

    if (sessionStorage.getItem('nonce')) {
      google.login();
    }
  }
}
