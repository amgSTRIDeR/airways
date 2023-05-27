import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BookingActions } from '@redux/actions/booking-page.actions';
import { FlightsRes } from '@redux/models/main-page.models';
import { BookingSelectors } from '@redux/selectors/booking-page.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.scss'],
})
export class FlightsComponent implements OnInit {
  constructor(private store: Store) {}

  private isTwoWays = false;
  public forwardFlightInfo!: FlightsRes;
  // public forwardFlightInfo: FlightsRes = {"seats": {"total": 547,"avaible": 535},"flightNumber": "OK-6455","timeMins": 261,"form": {"key": "AMS","name": "Amsterdam-Schiphol","city": "Amsterdam","gmt": "+1.0","country": "Netherlands"},"to": {"key": "BER","name": "Berlin Metropolitan Area","city": "Berlin","gmt": "+1.0","country": "Germany"},"takeoffDate": "2023-05-14T02:27:00.000Z","landingDate": "2023-05-14T06:43:00.000Z","price": {"eur": 285,"usd": 314.38349999999997,"rub": 25213.95,"pln": 1308.1499999999999},"otherFlights": {}};

  public backFlightInfo?: FlightsRes;
  // public backFlightInfo?: FlightsRes = {"seats": {"total": 528,"avaible": 499},"flightNumber": "OB-9749","timeMins": 254,"form": {"key": "BER","name": "Berlin Metropolitan Area","city": "Berlin","gmt": "+1.0","country": "Germany"},"to": {"key": "AMS","name": "Amsterdam-Schiphol","city": "Amsterdam","gmt": "+1.0","country": "Netherlands"},"takeoffDate": "2023-05-16T01:20:00.000Z","landingDate": "2023-05-16T05:36:00.000Z","price": {"eur": 476,"usd": 525.0756,"rub": 42111.72,"pln": 2184.84},"otherFlights": {"1": {"seats": {"total": 627,"avaible": 20},"flightNumber": "GI-796","timeMins": 256,"form": {"key": "BER","name": "Berlin Metropolitan Area","city": "Berlin","gmt": "+1.0","country": "Germany"},"to": {"key": "AMS","name": "Amsterdam-Schiphol","city": "Amsterdam","gmt": "+1.0","country": "Netherlands"},"takeoffDate": "2023-05-17T22:13:00.000Z","landingDate": "2023-05-18T02:29:00.000Z","price": {"eur": 481,"usd": 530.5911,"rub": 42554.07,"pln": 2207.79}},"3": {"seats": {"total": 235,"avaible": 101},"flightNumber": "ZH-6779","timeMins": 258,"form": {"key": "BER","name": "Berlin Metropolitan Area","city": "Berlin","gmt": "+1.0","country": "Germany"},"to": {"key": "AMS","name": "Amsterdam-Schiphol","city": "Amsterdam","gmt": "+1.0","country": "Netherlands"},"takeoffDate": "2023-05-19T11:32:00.000Z","landingDate": "2023-05-19T15:48:00.000Z","price": {"eur": 484,"usd": 533.9004,"rub": 42819.479999999996,"pln": 2221.56}},"4": {"seats": {"total": 405,"avaible": 399},"flightNumber": "TM-3311","timeMins": 256,"form": {"key": "BER","name": "Berlin Metropolitan Area","city": "Berlin","gmt": "+1.0","country": "Germany"},"to": {"key": "AMS","name": "Amsterdam-Schiphol","city": "Amsterdam","gmt": "+1.0","country": "Netherlands"},"takeoffDate": "2023-05-20T18:25:00.000Z","landingDate": "2023-05-20T22:41:00.000Z","price": {"eur": 460,"usd": 507.426,"rub": 40696.2,"pln": 2111.4}},"5": {"seats": {"total": 278,"avaible": 246},"flightNumber": "QP-7158","timeMins": 258,"form": {"key": "BER","name": "Berlin Metropolitan Area","city": "Berlin","gmt": "+1.0","country": "Germany"},"to": {"key": "AMS","name": "Amsterdam-Schiphol","city": "Amsterdam","gmt": "+1.0","country": "Netherlands"},"takeoffDate": "2023-05-21T02:52:00.000Z","landingDate": "2023-05-21T07:08:00.000Z","price": {"eur": 484,"usd": 533.9004,"rub": 42819.479999999996,"pln": 2221.56}},"-1": {"seats": {"total": 452,"avaible": 161},"flightNumber": "DG-1244","timeMins": 261,"form": {"key": "BER","name": "Berlin Metropolitan Area","city": "Berlin","gmt": "+1.0","country": "Germany"},"to": {"key": "AMS","name": "Amsterdam-Schiphol","city": "Amsterdam","gmt": "+1.0","country": "Netherlands"},"takeoffDate": "2023-05-15T13:46:00.000Z","landingDate": "2023-05-15T18:02:00.000Z","price": {"eur": 491,"usd": 541.6220999999999,"rub": 43438.77,"pln": 2253.69}}}};

  private flightsInfo$: Observable<FlightsRes[] | null> = this.store.select(
    BookingSelectors.AvailableFlightsSelector
  );

  ngOnInit(): void {
    this.flightsInfo$.subscribe((event) => {
      if (event && event?.length > 0) {
        this.isTwoWays = event.length > 1;
        this.forwardFlightInfo = event![0];
        if (this.isTwoWays) this.backFlightInfo = event![1];
      }
    });
  }

  logForm() {
    this.store.dispatch(
      BookingActions.AddSelectedFlight({
        twoWays: this.isTwoWays,
        forwardFlight: this.forwardFlightInfo,
        backFlight: this.backFlightInfo,
      })
    );
    this.store.dispatch(BookingActions.OnPassengersSubPage());
  }

  backToMainPage() {
    this.store.dispatch(BookingActions.OutBookingPage());
  }
}
