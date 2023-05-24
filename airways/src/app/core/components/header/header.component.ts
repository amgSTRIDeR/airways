import { Component, HostListener, OnDestroy } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { BookingActions } from '@redux/actions/booking-page.actions';
import { MainPageActions } from '@redux/actions/main-page.actions';
import { BookingPageState } from '@redux/models/state.models';
import { MatDialog } from '@angular/material/dialog';
import { AuthComponent } from '@core/components/auth/auth.component';

import { basket } from '@core/svg/SVG';
import { IconService } from '@core/services/icon.service';
import { BasketSelectors } from '@redux/selectors/basket.selectors';
import { Order } from '@redux/models/basket.models';
import { Observable, Subscription } from 'rxjs';
import { BookingSelectors } from '@redux/selectors/booking-page.selectors';
import { MainPageSelectors } from '@redux/selectors/main-page.selectors';
import { AuthSelectors } from '@redux/selectors/auth.selectors';
import { AuthActions } from '@redux/actions/auth.actions';

const ICON = {
  name: 'basket',
  source: basket,
};

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnDestroy {
  public showBookWindow = false;
  public isMainPage = false;
  public isUserSignIn = false;
  public isHamburgerMenuActive = false;
  public ordersCount$: Observable<Order[]> = this.store.select(
    BasketSelectors.Orders
  );

  onBookingPage$ = this.store.select(BookingSelectors.onBookingPageSelector);
  onFlightPage$ = this.store.select(
    BookingSelectors.currentPageDirectionSelector
  );
  showBookWindow$ = this.store.select(MainPageSelectors.IsShowMainFormSelector);
  windowWidth: number = window.innerWidth;
  public user$ = this.store.select(AuthSelectors.AuthUserSelector);

  private IsLogIn$ = this.store.select(AuthSelectors.IsLogIn);
  private IsLogInSub!: Subscription;

  constructor(
    private router: Router,
    private store: Store<BookingPageState>,
    private dialog: MatDialog,
    private iconService: IconService
  ) {
    this.addPathToIcon();
    this.addIsLog();

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (event.url.startsWith('/booking-page')) {
          this.store.dispatch(BookingActions.OnBookingPage());
        } else {
          this.store.dispatch(BookingActions.OutBookingPage());
        }

        this.isMainPage = event.url.startsWith('/main') || event.url === '/';
      }
    });

    this.showBookWindow$.subscribe((value) => {
      this.showBookWindow = value;
    });
  }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  // ngOnInit(): void {
  //   this.dialog.open(AuthComponent);
  // }

  @HostListener('window:resize')
  onWindowResize() {
    this.windowWidth = window.innerWidth;
    if (this.windowWidth >= 750) {
      this.isHamburgerMenuActive = false;
    }
  }

  public openAuthDialog() {
    if (!this.isUserSignIn) this.dialog.open(AuthComponent);
  }

  public toMainPage() {
    this.router.navigate(['main']);
  }

  public toShoppingCardPage() {
    this.router.navigate(['shopping-card']);
  }

  toggleBookWindowVisibility() {
    this.showBookWindow = !this.showBookWindow;
    this.store.dispatch(
      MainPageActions.ChangeIsShownValue({
        IsShownMainPage: this.showBookWindow,
      })
    );
  }

  private addPathToIcon() {
    this.iconService.add(ICON.name, ICON.source);
  }

  private addIsLog() {
    this.IsLogInSub = this.IsLogIn$.subscribe((isLog) => {
      if (isLog) this.dialog.closeAll();
      this.isUserSignIn = isLog;
    });
  }

  toggleHamburgerMenu() {
    this.isHamburgerMenuActive = !this.isHamburgerMenuActive;
  }

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    if (event.target instanceof HTMLElement) {
      if (
        !document.querySelector('.hamburger-icon')?.contains(event.target) &&
        !document.querySelector('.hamburger-menu')?.contains(event.target) &&
        !document.querySelector('.ng-trigger')?.contains(event.target)
      ) {
        this.toggleHamburgerMenu();
      }
    }
  }

  logOut() {
    this.store.dispatch(AuthActions.logOut());
  }
}
