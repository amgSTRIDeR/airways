import { Component, HostListener } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { BookingActions } from '@redux/actions/booking-page.actions';
import { BookingPageState } from '@redux/models/state.models';
import { BookingSelectors } from '@redux/selectors/booking-page.selectors';

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
  isOnBookingPage$ = this.store.pipe(
    select(BookingSelectors.onBookingPageSelector)
  );

  windowWidth: number = window.innerWidth;

  constructor(private router: Router, private store: Store<BookingPageState>) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (event.url.startsWith('/booking-page') || event.url === '/') {
          this.store.dispatch(BookingActions.OnBookingPage());
        } else {
          this.store.dispatch(BookingActions.OutBookingPage());
        }

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
