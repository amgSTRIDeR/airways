import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BookingActions } from '@redux/actions/booking-page.actions';
import { SelectedFlightCounter } from '@redux/models/booking-page.models';
import { FlightRes, FlightsRes } from '@redux/models/main-page.models';
import { BookingSelectors } from '@redux/selectors/booking-page.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.scss'],
})
export class FlightsComponent implements OnInit {
  constructor(private store: Store) {}

  private isTwoWays: boolean = false;
  public forwardFlightInfo!: FlightsRes;
  public backFlightInfo?: FlightsRes;

  public selectedForwardFlightInfo: FlightRes | null = null;
  public selectedBackFlightInfo: FlightRes | null = null;
  public selectedFlightCounterValue: number = 0;

  private flightsInfo$: Observable<FlightsRes[] | null> = this.store.select(
    BookingSelectors.AvailableFlightsSelector
  );

  private selectedForwardFlightInfo$: Observable<FlightRes | null> = this.store.select(
    BookingSelectors.selectForwardFlightSelector
  );

  private selectedBackFlightInfo$: Observable<FlightRes | null> = this.store.select(
    BookingSelectors.selectBackFlightSelector
  );

  private selectedFlightCounter$: Observable<SelectedFlightCounter> = this.store.select(
    BookingSelectors.selectedFlightCounterSelector
  );

  ngOnInit(): void {
    this.flightsInfo$.subscribe((event) => {
      if (event && event?.length > 0) {
        this.isTwoWays = event.length > 1;
        this.forwardFlightInfo = event![0];
        if (this.isTwoWays) this.backFlightInfo = event![1];
      }
    })
    this.selectedForwardFlightInfo$.subscribe((storeFlightInfo) => { if (!!storeFlightInfo) this.selectedForwardFlightInfo = storeFlightInfo });
    this.selectedBackFlightInfo$.subscribe((storeFlightInfo) => { if (storeFlightInfo) this.selectedBackFlightInfo = storeFlightInfo });
    this.selectedFlightCounter$.subscribe((storeCounter) => this.selectedFlightCounterValue = storeCounter.value);
  }

  checkAllFlightsSelected() {
    return this.isTwoWays && this.selectedFlightCounterValue === 2 || !this.isTwoWays && this.selectedFlightCounterValue === 1;
  }

  logForm(): void {
    if (this.checkAllFlightsSelected() && this.selectedForwardFlightInfo)
      this.store.dispatch(
        BookingActions.AddSelectedFlight({
          twoWays: this.isTwoWays,
          forwardFlight: this.selectedForwardFlightInfo,
          backFlight: this.isTwoWays && this.selectedBackFlightInfo ? this.selectedBackFlightInfo : undefined,
        })
      );
    this.store.dispatch(BookingActions.OnPassengersSubPage());
  }

  backToMainPage(): void {
    this.store.dispatch(BookingActions.OutBookingPage());
  }
}
