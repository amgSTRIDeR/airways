import { Component, HostListener, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { SettingsActions } from '@redux/actions/settings.actions';
import { CurrencyType, DateType } from '@redux/models/settings.models';
import { SettingsState } from '@redux/models/state.models';
import { SettingsSelectors } from '@redux/selectors/settings.selectors';
import { Observable } from 'rxjs';

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
  public selectedDateFormat: DateType = 'MM/DD/YYYY';
  public selectedCurrency: CurrencyType = 'USA';
  public currency$!: Observable<CurrencyType>;
  public dateType$!: Observable<DateType>;
  windowWidth: number = window.innerWidth;

  constructor(private router: Router, private store: Store<SettingsState>) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isBookingPage =
          event.url.startsWith('/booking-page') || event.url === '/';

        this.isMainPage = event.url.startsWith('/main');
      }
    });
  }

  ngOnInit() {
    this.currency$ = this.store.pipe(
      select(SettingsSelectors.CurrencySelector)
    );
    this.currency$.subscribe((currency) => (this.selectedCurrency = currency));

    this.dateType$ = this.store.pipe(
      select(SettingsSelectors.DateTypeSelector)
    );
    this.dateType$.subscribe(
      (dateType) => (this.selectedDateFormat = dateType)
    );
  }

  changeCurrency(currency: CurrencyType) {
    this.store.dispatch(SettingsActions.selectCurrency({ currency }));
  }

  changeDateType(dateType: DateType) {
    this.store.dispatch(SettingsActions.selectDateType({ dateType }));
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
