import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { FlightsRes, IAlternativeFlight, IOtherFlights, IPrice } from '@redux/models/main-page.models';
import { SettingsSelectors } from '@redux/selectors/settings.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-booking-flight-details',
  templateUrl: './booking-flight-details.component.html',
  styleUrls: ['./booking-flight-details.component.scss']
})
export class BookingFlightDetailsComponent implements OnInit, OnChanges {
  @Input() flightInfo?: FlightsRes;
  @Input() isBackFlight: boolean = false;

  public flightTitle: string = "";
  public chosenCurrency: string = 'EUR';
  public price?: number = 0;
  public alternativeFlights: IAlternativeFlight[] = [];

  private currencyInfo$: Observable<string> = this.store.select(
    SettingsSelectors.CurrencySelector
  );

  constructor(private store: Store){};

  ngOnInit(): void {
    this.currencyInfo$.subscribe((storeCurrency) => {
      this.chosenCurrency = storeCurrency;
      this.price = this.flightInfo?.price[this.chosenCurrency.toLowerCase() as keyof IPrice] || 0;
    });
  }

  ngOnChanges(): void {
    this.flightTitle = `${this.flightInfo?.form.city} to ${this.flightInfo?.to.city}`;
    this.getAlternativeFlightsArray();
  }

  getAlternativeFlightsArray(): void {
    this.alternativeFlights = [];
    for (let ind = -5; ind < 0; ind++) {
      const alternativeFlightInfo = this.flightInfo?.otherFlights[ind.toString() as keyof IOtherFlights];
      this.alternativeFlights.push({
        index: ind,
        takeoffDate: alternativeFlightInfo?.takeoffDate || this.addDays(new Date(this.flightInfo?.takeoffDate!), ind),
        price: alternativeFlightInfo?.price,
        seats: alternativeFlightInfo?.seats,
      });
    }
    this.alternativeFlights?.push({
      index: 0,
      takeoffDate: this.flightInfo?.takeoffDate,
      price: this.flightInfo?.price,
      seats: this.flightInfo?.seats,
    });
    for (let ind = 1; ind <= 5; ind++) {
      const alternativeFlightInfo = this.flightInfo?.otherFlights[ind.toString() as keyof IOtherFlights];
      this.alternativeFlights.push({
        index: ind,
        takeoffDate: alternativeFlightInfo?.takeoffDate || this.addDays(new Date(this.flightInfo?.takeoffDate!), ind),
        price: alternativeFlightInfo?.price,
        seats: alternativeFlightInfo?.seats,
      });
    }
  }

  addDays(date: Date, days: number): string {
    date.setDate(date.getDate() + days);
    return date.toString();
  }
}
