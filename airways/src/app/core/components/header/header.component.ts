import { Component, HostListener } from '@angular/core';
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
import { Observable } from 'rxjs';
import { BookingSelectors } from '@redux/selectors/booking-page.selectors';
import { MainPageSelectors } from '@redux/selectors/main-page.selectors';

const ICON = {
  name: 'basket',
  source: basket,
};

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
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

  constructor(
    private router: Router,
    private store: Store<BookingPageState>,
    private dialog: MatDialog,
    private iconService: IconService
  ) {
    this.addPathToIcon();

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
    this.dialog.open(AuthComponent);
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
}
