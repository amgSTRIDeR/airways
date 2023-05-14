import { Component, OnDestroy } from '@angular/core';
import { SettingsState } from '@redux/models/state.models';
import { SettingsSelectors } from '@redux/selectors/settings.selectors';
import { Store, select } from '@ngrx/store';
import { DataService } from '@core/services/data.service';
import { AirportsRes, PassengersCount } from '@redux/models/main-page.models';
import { DateTypeService } from '@core/services/date-type.service';
import { MainPageSelectors } from '@redux/selectors/main-page.selectors';
import { MainPageActions } from '@redux/actions/main-page.actions';
import { FormBuilder } from '@angular/forms';
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

  passengersCount$ = this.store.select(MainPageSelectors.PassengersCount);
  passengersSubscription!: Subscription;
  isRoundTrip$ = this.store.select(MainPageSelectors.IsRoundTripSelector);
  isRoundTripSubscription!: Subscription;

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

    this.isRoundTripSubscription = this.isRoundTrip$.subscribe((x) => {
      this.isRoundTrip = x;
    });
  }

  ngOnDestroy(): void {
    this.passengersSubscription.unsubscribe();
    this.isRoundTripSubscription.unsubscribe();
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
    //   if (
    //     this.originAirport !== null &&
    //     this.destinationAirport !== null &&
    //     this.departureDate !== null
    //   ) {
    //     this.dataService
    //       .searchFlight(
    //         this.originAirport?.key,
    //         this.destinationAirport?.key,
    //         this.departureDate,
    //         this.returnDate
    //       )
    //       .subscribe((data) => {
    //         this.store.dispatch(MainPageActions.FlightsForBooking(data[0]));
    //         this.store.dispatch(
    //           MainPageActions.FlightsForBookingReturn(data[1] || null)
    //         );
    //         this.router.navigate(['/booking-page']);
    //       });
    //   }
  }
}
