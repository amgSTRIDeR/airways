import { Component, OnDestroy } from '@angular/core';
import { SettingsState } from '@redux/models/state.models';
import { Store } from '@ngrx/store';
import { DataService } from '@core/services/data.service';
import { AirportsRes, PassengersCount } from '@redux/models/main-page.models';
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
  public adultsCount = 1;
  public childrenCount = 0;
  public infantsCount = 0;

  public isRoundTrip = true;
  public originAirport: AirportsRes | null = null;
  public destinationAirport: AirportsRes | null = null;
  public departureDate: Date | null = null;
  public returnDate: Date | null = null;

  passengersCount$ = this.store.select(MainPageSelectors.PassengersCount);
  passengersSubscription!: Subscription;
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
    this.passengersSubscription = this.passengersCount$.subscribe(
      (passengers: PassengersCount | null): void => {
        if (passengers !== null) {
          this.adultsCount = passengers.adults;
          this.childrenCount = passengers.children;
          this.infantsCount = passengers.infants;
        }
      }
    );

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
    this.passengersSubscription.unsubscribe();
    this.isRoundTripSubscription.unsubscribe();
    this.originAirportSubscription.unsubscribe();
    this.destinationAirportSubscription.unsubscribe();
    this.departureDateSubscription.unsubscribe();
    this.returnDateSubscription.unsubscribe();
  }

  changeTripType(boolean: boolean) {
    this.store.dispatch(MainPageActions.IsRoundTrip({ isRoundTrip: boolean }));
  }

  decreasePassengersCount(type: string) {
    switch (type) {
      case 'adults': {
        if (this.adultsCount > 1) {
          this.store.dispatch(
            MainPageActions.PassengersCount({
              adults: this.adultsCount - 1,
              children: this.childrenCount,
              infants: this.infantsCount,
            })
          );
        }
        break;
      }
      case 'children': {
        if (this.childrenCount > 0) {
          this.store.dispatch(
            MainPageActions.PassengersCount({
              adults: this.adultsCount,
              children: this.childrenCount - 1,
              infants: this.infantsCount,
            })
          );
        }
        break;
      }
      case 'infants': {
        if (this.infantsCount > 0) {
          this.store.dispatch(
            MainPageActions.PassengersCount({
              adults: this.adultsCount,
              children: this.childrenCount,
              infants: this.infantsCount - 1,
            })
          );
        }
        break;
      }
    }
  }

  increasePassengersCount(type: string) {
    switch (type) {
      case 'adults': {
        this.store.dispatch(
          MainPageActions.PassengersCount({
            adults: this.adultsCount + 1,
            children: this.childrenCount,
            infants: this.infantsCount,
          })
        );
        break;
      }
      case 'children': {
        this.store.dispatch(
          MainPageActions.PassengersCount({
            adults: this.adultsCount,
            children: this.childrenCount + 1,
            infants: this.infantsCount,
          })
        );
        break;
      }
      case 'infants': {
        this.store.dispatch(
          MainPageActions.PassengersCount({
            adults: this.adultsCount,
            children: this.childrenCount,
            infants: this.infantsCount + 1,
          })
        );
        break;
      }
    }
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
