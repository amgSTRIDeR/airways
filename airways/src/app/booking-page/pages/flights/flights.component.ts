import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ALPHABET, PLACES_PER_ROW } from '@core/consts/booking';
import { Store } from '@ngrx/store';
import { BookingActions } from '@redux/actions/booking-page.actions';
import { SelectedFlightCounter } from '@redux/models/booking-page.models';
import { FlightRes, FlightsRes, ISeats } from '@redux/models/main-page.models';
import { BookingSelectors } from '@redux/selectors/booking-page.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.scss'],
})
export class FlightsComponent implements OnInit {
  constructor(private store: Store, private router: Router) {}

  private isTwoWays = false;
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
    const isExistBackFlight = this.isTwoWays && this.selectedBackFlightInfo;

    if (this.checkAllFlightsSelected() && this.selectedForwardFlightInfo)
      this.store.dispatch(
        BookingActions.AddSelectedFlight({
          twoWays: this.isTwoWays,
          forwardFlight: {
            ...this.selectedForwardFlightInfo,
            seats: {
              total: this.selectedForwardFlightInfo.seats.total,
              avaible: this.selectedForwardFlightInfo.seats.avaible,
              avaibleArr: this.generateFreePlaces(this.selectedForwardFlightInfo!.seats) 
            }
          },
          backFlight: this.isTwoWays && this.selectedBackFlightInfo ? {
            ...this.selectedBackFlightInfo,
            seats: {
              total: this.selectedBackFlightInfo.seats.total,
              avaible: this.selectedBackFlightInfo.seats.avaible,
              avaibleArr: this.generateFreePlaces(this.selectedBackFlightInfo!.seats) 
            }
          } : undefined,
        })
      );
    this.store.dispatch(BookingActions.OnPassengersSubPage());
  }

  generateFreePlaces(seats: ISeats) {
    const rowCount: number = Math.floor(seats.total / PLACES_PER_ROW);
    const lettersArr: string[] = ALPHABET.slice(0, PLACES_PER_ROW);
    const availablePlaces: string[] = [];

    while (availablePlaces.length < seats.avaible) {
      const newPlace: string = this.getRandomInd(rowCount) + lettersArr[this.getRandomInd(PLACES_PER_ROW)];
      if (availablePlaces.indexOf(newPlace) < 0) availablePlaces.push(newPlace);
    }

    return availablePlaces;    
  }

  getRandomInd(max: number) {
    return Math.floor(Math.random() * max);
  }

  backToMainPage(): void {
    this.router.navigate(['/main']);
  }
}
