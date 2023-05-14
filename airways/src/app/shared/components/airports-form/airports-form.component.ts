import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { MainPageActions } from '@redux/actions/main-page.actions';
import { AirportsRes } from '@redux/models/main-page.models';
import { MainPageState } from '@redux/models/state.models';
import { MainPageSelectors } from '@redux/selectors/main-page.selectors';

@Component({
  selector: 'app-airports-form',
  templateUrl: './airports-form.component.html',
  styleUrls: ['./airports-form.component.scss'],
})
export class AirportsFormComponent {
  airports: AirportsRes[] = [];
  public originAirport: AirportsRes | null = null;
  public destinationAirport: AirportsRes | null = null;

  constructor(private store: Store<MainPageState>) {
    this.store.dispatch(MainPageActions.LoadAirports());

    this.store.subscribe((state) => {
      this.airports = MainPageSelectors.AirportsSelector(state);
    });
  }

  switchLocations() {
    [this.originAirport, this.destinationAirport] = [
      this.destinationAirport,
      this.originAirport,
    ];

    this.setOriginAirport();
    this.setDestinationAirport();
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
