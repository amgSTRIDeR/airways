import { Component } from '@angular/core';
import { SettingsState } from '@redux/models/state.models';
import { SettingsSelectors } from '@redux/selectors/settings.selectors';
import { Store, select } from '@ngrx/store';
import { DataService } from '@core/services/data.service';
import { AirportsRes, PassengersCount } from '@redux/models/main-page.models';
import { DateTypeService } from '@core/services/date-type.service';
import { MainPageSelectors } from '@redux/selectors/main-page.selectors';
import { MainPageActions } from '@redux/actions/main-page.actions';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  airports: AirportsRes[] = [];
  public originAirport: AirportsRes | null = null;
  public destinationAirport: AirportsRes | null = null;

  dateType$ = this.store.pipe(select(SettingsSelectors.DateTypeSelector));

  passengersCount$ = this.store.pipe(select(MainPageSelectors.PassengersCount));

  public adultsCount = 0;
  public childrenCount = 0;
  public infantsCount = 0;

  public isRoundTrip = true;
  public departureDate!: Date;
  public returnDate!: Date;
  public isHintVisible = false;

  constructor(
    private store: Store<SettingsState>,
    private readonly dataService: DataService,
    private dateTypeService: DateTypeService
  ) {
    this.dataService.getAirports().subscribe((data) => {
      this.airports = data;
    });

    this.dateType$.subscribe((dateType) => {
      this.dateTypeService.changeDateType(dateType);
    });

    this.passengersCount$.subscribe(
      (passengers: PassengersCount | null): void => {
        if (passengers !== null) {
          this.adultsCount = passengers.adults;
          this.childrenCount = passengers.children;
          this.infantsCount = passengers.infants;
        }
      }
    );
  }

  // Через метод потому что при изменении переменной напрямую oneWay не всегда показывается как выбранный (без понятия почему)
  changeTripType(boolean: boolean) {
    this.isRoundTrip = boolean;
  }

  switchLocations() {
    [this.originAirport, this.destinationAirport] = [
      this.destinationAirport,
      this.originAirport,
    ];
  }

  decreasePassengersCount(type: string) {
    switch (type) {
      case 'adults': {
        if (this.adultsCount > 0) {
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
}
