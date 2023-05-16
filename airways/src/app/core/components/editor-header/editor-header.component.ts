import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { MainPageActions } from '@redux/actions/main-page.actions';
import { AirportsRes } from '@redux/models/main-page.models';
import { MainPageState } from '@redux/models/state.models';
import { MainPageSelectors } from '@redux/selectors/main-page.selectors';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-editor-header',
  templateUrl: './editor-header.component.html',
  styleUrls: ['./editor-header.component.scss'],
})
export class EditorHeaderComponent implements OnDestroy {
  public originAirport: AirportsRes | null = null;
  public destinationAirport: AirportsRes | null = null;
  public departureDate: Date | null = null;
  public returnDate: Date | null = null;
  public isRoundTrip = true;

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

  isRoundTrip$ = this.store.select(MainPageSelectors.IsRoundTripSelector);
  isRoundTripSubscription!: Subscription;

  constructor(private store: Store<MainPageState>) {
    this.originAirportSubscription = this.originAirport$.subscribe(
      (originAirport) => {
        this.originAirport = originAirport;
        this.loadAirports();
      }
    );

    this.destinationAirportSubscription = this.destinationAirport$.subscribe(
      (destinationAirport) => {
        this.destinationAirport = destinationAirport;
        this.loadAirports();
      }
    );

    this.departureDateSubscription = this.departureDate$.subscribe(
      (departureDate) => {
        this.departureDate = departureDate;
        this.loadAirports();
      }
    );

    this.returnDateSubscription = this.returnDate$.subscribe((returnDate) => {
      this.returnDate = returnDate;
      this.loadAirports();
    });

    this.isRoundTripSubscription = this.isRoundTrip$.subscribe((boolean) => {
      this.isRoundTrip = boolean;
    });
  }

  ngOnDestroy(): void {
    this.isRoundTripSubscription.unsubscribe();
    this.departureDateSubscription.unsubscribe();
    this.returnDateSubscription.unsubscribe();
    this.originAirportSubscription.unsubscribe();
    this.destinationAirportSubscription.unsubscribe();
  }

  loadAirports(): void {
    if (
      this.originAirport !== null &&
      this.destinationAirport !== null &&
      this.departureDate !== null &&
      (this.isRoundTrip ? this.returnDate !== null : true)
    ) {
      this.store.dispatch(
        MainPageActions.LoadAvailableFlights({
          originAirportKey: this.originAirport.key,
          destinationAirportKey: this.destinationAirport.key,
          departureDate: this.departureDate,
          returnDate: this.returnDate,
        })
      );
    }
  }
}
