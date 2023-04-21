import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public showBookWindow = false;
  public isUserSignIn = false;
  public isHamburgerMenuActive = false;
  public selectedDateFormat = 'MM/DD/YYYY';
  public selectedCurrency = 'EUR';
  windowWidth: number = window.innerWidth;

  constructor(private router: Router) {}

  @HostListener('window:resize')
  onWindowResize() {
    this.windowWidth = window.innerWidth;
    if (this.windowWidth >= 750) {
      this.isHamburgerMenuActive = false;
    }
  }

  toMainPage() {
    this.router.navigate(['/']);
  }
}
