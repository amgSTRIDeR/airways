import { Component, HostListener, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { BookingActions } from '@redux/actions/booking-page.actions';
import { MainPageActions } from '@redux/actions/main-page.actions';
import { BookingPageState } from '@redux/models/state.models';
import { BookingSelectors } from '@redux/selectors/booking-page.selectors';
import { MatDialog } from '@angular/material/dialog';
import { AuthComponent } from '@core/components/auth/auth.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public showBookWindow = false;
  public isBookingPage = false;
  public isMainPage = false;
  public isUserSignIn = false;
  public isHamburgerMenuActive = false;

  windowWidth: number = window.innerWidth;

  constructor(
    private router: Router,
    private store: Store<BookingPageState>,
    private dialog: MatDialog
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (event.url.startsWith('/booking-page') || event.url === '/') {
          this.store.dispatch(BookingActions.OnBookingPage());
          this.isBookingPage = true;
        } else {
          this.store.dispatch(BookingActions.OutBookingPage());
          this.isBookingPage = false;
        }

        this.isMainPage = event.url.startsWith('/main');
      }
    });
  }

  ngOnInit(): void {
    this.dialog.open(AuthComponent);
  }

  @HostListener('window:resize')
  onWindowResize() {
    this.windowWidth = window.innerWidth;
    if (this.windowWidth >= 750) {
      this.isHamburgerMenuActive = false;
    }
  }

  public openAuthDialog() {
    this.dialog.open(AuthComponent);
  }

  public toMainPage() {
    this.router.navigate(['main']);
  }

  toggleBookWindowVisibility() {
    this.showBookWindow = !this.showBookWindow;
    this.store.dispatch(
      MainPageActions.ChangeIsShownValue({
        IsShownMainPage: this.showBookWindow,
      })
    );
  }
}
