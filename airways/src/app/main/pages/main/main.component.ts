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
  airports: AirportsRes[] = [];
  public adultsCount = 1;
  public childrenCount = 0;
  public infantsCount = 0;
  public isRoundTrip = true;
  public isHintVisible = false;
  public originAirport: AirportsRes | null = null;
  public destinationAirport: AirportsRes | null = null;
  public departureDate: Date | null = null;
  public returnDate: Date | null = null;

  dateType$ = this.store.select(SettingsSelectors.DateTypeSelector);
  // flightForward$ = this.store.pipe(
  //   select(MainPageSelectors.FlightForwardSelector)
  // );
  // flightBack$ = this.store.pipe(select(MainPageSelectors.FlightBackSelector));

  // airportForward$ = this.store.pipe(
  //   select(MainPageSelectors.AirportForwardSelector)
  // );
  // airportBack$ = this.store.pipe(select(MainPageSelectors.AirportBackSelector));

  passengersCount$ = this.store.select(MainPageSelectors.PassengersCount);
  passengersSubscription!: Subscription;

  constructor(
    private store: Store<SettingsState>,
    private readonly dataService: DataService,
    private dateTypeService: DateTypeService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.dataService.getAirports().subscribe((data) => {
      this.airports = data;
    });

    this.dateType$.subscribe((dateType) => {
      this.dateTypeService.changeDateType(dateType);
    });
    this.passengersSubscription = this.passengersCount$.subscribe(
      (passengers: PassengersCount | null): void => {
        if (passengers !== null) {
          this.adultsCount = passengers.adults;
          this.childrenCount = passengers.children;
          this.infantsCount = passengers.infants;
        }
      }
    );

    // this.store
    //   .pipe(select(MainPageSelectors.FlightsForBookingSelector))
    //   .subscribe((flights) => {
    //     console.log(flights);
    //   });

    // this.store
    //   .pipe(select(MainPageSelectors.FlightsForBookingReturnSelector))
    //   .subscribe((flights) => {
    //     console.log(flights);
    //   });
  }

  ngOnDestroy(): void {
    this.passengersSubscription.unsubscribe();
  }

  mainForm = this.fb.group({
    // title: [
    //   '',
    //   [Validators.required, Validators.minLength(3), Validators.maxLength(20)],
    // ],
    // description: ['', Validators.maxLength(255)],
    // imageLink: [
    //   '',
    //   [
    //     Validators.required,
    //     Validators.pattern(/^(http(s?):\/\/).+(\.(jpeg|jpg|png|gif))$/),
    //   ],
    // ],
    // videoLink: [
    //   '',
    //   [
    //     Validators.required,
    //     Validators.pattern(/^(http(s?):\/\/).+(\.(mp4|mpeg|avi|mov))$/),
    //   ],
    // ],
    // creationDate: ['', [Validators.required, this.dateValidator]],
  });

  changeTripType(boolean: boolean) {
    this.isRoundTrip = boolean;
  }

  switchLocations() {
    [this.originAirport, this.destinationAirport] = [
      this.destinationAirport,
      this.originAirport,
    ];

    this.setOriginAirport();
    this.setDestinationAirport();
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
      this.dataService
        .searchFlight(
          this.originAirport?.key,
          this.destinationAirport?.key,
          this.departureDate,
          this.returnDate
        )
        .subscribe((data) => {
          this.store.dispatch(MainPageActions.FlightsForBooking(data[0]));
          this.store.dispatch(
            MainPageActions.FlightsForBookingReturn(data[1] || null)
          );
          this.router.navigate(['/booking-page']);
        });
    }
  }

  setDepartureDate() {
    this.store.dispatch(
      MainPageActions.FlightForward({
        date: this.departureDate,
      })
    );
  }

  setReturnDate() {
    this.store.dispatch(
      MainPageActions.FlightBack({
        date: this.returnDate,
      })
    );
  }

  setOriginAirport() {
    if (this.originAirport !== null) {
      this.store.dispatch(MainPageActions.AirportForward(this.originAirport));
    }
  }

  setDestinationAirport() {
    if (this.destinationAirport !== null) {
      this.store.dispatch(MainPageActions.AirportBack(this.destinationAirport));
    }
  }
}
