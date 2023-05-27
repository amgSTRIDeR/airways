import { Component, Input, Output, EventEmitter, OnInit, OnChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { BookingActions } from '@redux/actions/booking-page.actions';
import { SelectedFlightCounter } from '@redux/models/booking-page.models';
import { FlightRes, FlightsRes, IAlternativeFlight, IOtherFlights, IPrice } from '@redux/models/main-page.models';
import { BookingSelectors } from '@redux/selectors/booking-page.selectors';
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
  @Output() onFlightSelected = new EventEmitter<FlightRes | null>();

  public flightTitle: string = "";
  public chosenCurrency: string = 'EUR';
  public price?: number = 0;
  public alternativeFlights: IAlternativeFlight[] = [];
  public activeIndex: number = 0;
  public activeFlight?: FlightRes;
  public isFlightSelected: boolean = false;
  public selectedFlightCounterValue: number = 0;

  private currencyInfo$: Observable<string> = this.store.select(
    SettingsSelectors.CurrencySelector
  );

  private selectedFlightCounter$: Observable<SelectedFlightCounter> = this.store.select(
    BookingSelectors.selectedFlightCounterSelector
  );

  constructor(private store: Store){};

  ngOnInit(): void {
    this.currencyInfo$.subscribe((storeCurrency) => {
      this.chosenCurrency = storeCurrency;
      this.updateActiveFlight();
    });
    this.selectedFlightCounter$.subscribe((storeCounter) => this.selectedFlightCounterValue = storeCounter.value);
  }

  ngOnChanges(): void {
    this.flightTitle = `${this.flightInfo?.form.city} to ${this.flightInfo?.to.city}`;
    this.updateActiveFlight();
    this.getAlternativeFlightsArray();
  }

  increaseIndex(): void {
    if (this.activeIndex < 5) {
      this.activeIndex++;
      this.updateActiveFlight();
    }
    this.getNoTicketsMessage();
  }

  decreaseIndex(): void {
    if (this.activeIndex > -5) {
      this.activeIndex--;
      this.updateActiveFlight();
    }
    this.getNoTicketsMessage();
  }

  selectFlight(): void {
    this.isFlightSelected = true;
    this.store.dispatch(
      BookingActions.SelectedFlightCounter({
        value: this.selectedFlightCounterValue + 1,
      })
    );
    if (this.isBackFlight)
      this.store.dispatch(
        BookingActions.SelectBackFlight(this.activeFlight!)
      );
    if (!this.isBackFlight)
      this.store.dispatch(
        BookingActions.SelectForwardFlight(this.activeFlight!)
      );
  }

  editFlight(): void {
    this.isFlightSelected = false;
    this.store.dispatch(
      BookingActions.SelectedFlightCounter({
        value: this.selectedFlightCounterValue - 1,
      })
    );
  }

  updateActiveFlight(): void {
    this.activeFlight = this.activeIndex === 0 ? this.flightInfo : this.flightInfo?.otherFlights[this.activeIndex.toString() as keyof IOtherFlights];
    this.price = this.activeFlight?.price[this.chosenCurrency.toLowerCase() as keyof IPrice] || 0;
  }

  showAlternativeFlight(flightIndex: number): boolean {
    return Math.abs(this.activeIndex - flightIndex) <= 2 || this.activeIndex >= 3 && flightIndex > 0 || this.activeIndex <= -3 && flightIndex < 0;
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

  getNoTicketsMessage(): string {
    const currentDate = new Date().getTime();
    const activeFlightDate = new Date(this.addDays(new Date(this.flightInfo!.takeoffDate), this.activeIndex)).getTime();
    return activeFlightDate < currentDate ? 'Билеты в прошлом недоступны к продаже' : 'Билет на выбранную дату отсутствует';
  }

  addDays(date: Date, days: number): string {
    date.setDate(date.getDate() + days);
    return date.toString();
  }
}
