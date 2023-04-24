import { Component, HostListener } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public showBookWindow = false;
  public isBookingPage = false;
  public isMainPage = false;
  public isUserSignIn = false;
  public isHamburgerMenuActive = false;
  public selectedDateFormat = 'MM/DD/YYYY';
  public selectedCurrency = 'EUR';
  windowWidth: number = window.innerWidth;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isBookingPage =
          event.url.startsWith('/booking-page') || event.url === '/';

        this.isMainPage = event.url.startsWith('/main');
      }
    });
  }

  @HostListener('window:resize')
  onWindowResize() {
    this.windowWidth = window.innerWidth;
    if (this.windowWidth >= 750) {
      this.isHamburgerMenuActive = false;
    }
  }

  toMainPage() {
    this.router.navigate(['main']);
  }
}
