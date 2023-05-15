import { Component, OnDestroy } from '@angular/core';
import { SettingsState } from '@redux/models/state.models';
import { Store } from '@ngrx/store';
import { DataService } from '@core/services/data.service';
import { AirportsRes } from '@redux/models/main-page.models';
import { MainPageSelectors } from '@redux/selectors/main-page.selectors';
import { MainPageActions } from '@redux/actions/main-page.actions';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnDestroy {
  public isRoundTrip = true;
  public originAirport: AirportsRes | null = null;
  public destinationAirport: AirportsRes | null = null;
  public departureDate: Date | null = null;
  public returnDate: Date | null = null;

  isRoundTrip$ = this.store.select(MainPageSelectors.IsRoundTripSelector);
  isRoundTripSubscription!: Subscription;
  originAirport$ = this.store.select(MainPageSelectors.AirportForwardSelector);
  originAirportSubscription!: Subscription;
  destinationAirport$ = this.store.select(
    MainPageSelectors.AirportBackSelector
  );
  destinationAirportSubscription!: Subscription;
  departureDate$ = this.store.select(MainPageSelectors.FlightForwardSelector);
  departureDateSubscription!: Subscription;
  returnDate$ = this.store.select(MainPageSelectors.FlightBackSelector);
  returnDateSubscription!: Subscription;

  constructor(
    private store: Store<SettingsState>,
    private readonly dataService: DataService,
    private router: Router
  ) {
    this.isRoundTripSubscription = this.isRoundTrip$.subscribe((boolean) => {
      this.isRoundTrip = boolean;
    });

    this.originAirportSubscription = this.originAirport$.subscribe(
      (originAirport) => {
        this.originAirport = originAirport;
      }
    );

    this.destinationAirportSubscription = this.destinationAirport$.subscribe(
      (destinationAirport) => {
        this.destinationAirport = destinationAirport;
      }
    );

    this.departureDateSubscription = this.departureDate$.subscribe(
      (departureDate) => {
        this.departureDate = departureDate;
      }
    );

    this.returnDateSubscription = this.returnDate$.subscribe((returnDate) => {
      this.returnDate = returnDate;
    });
  }

  ngOnDestroy(): void {
    this.isRoundTripSubscription.unsubscribe();
    this.originAirportSubscription.unsubscribe();
    this.destinationAirportSubscription.unsubscribe();
    this.departureDateSubscription.unsubscribe();
    this.returnDateSubscription.unsubscribe();
  }

  changeTripType(boolean: boolean) {
    this.store.dispatch(MainPageActions.IsRoundTrip({ isRoundTrip: boolean }));
  }

  onSubmit() {
    if (
      this.originAirport !== null &&
      this.destinationAirport !== null &&
      this.departureDate !== null
    ) {
      this.store.dispatch(
        MainPageActions.LoadAvailableFlights({
          originAirportKey: this.originAirport.key,
          destinationAirportKey: this.destinationAirport.key,
          departureDate: this.departureDate,
          returnDate: this.returnDate,
        })
      );
      this.router.navigate(['/booking-page']);
    }
  }
}
