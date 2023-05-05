import { Component } from '@angular/core';
import { SettingsState } from '@redux/models/state.models';
import { SettingsSelectors } from '@redux/selectors/settings.selectors';
import { Store, select } from '@ngrx/store';
import { DataService } from '@core/services/data.service';
import { AirportsRes } from '@redux/models/main-page.models';

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
  public tripType = 'roundTrip';
  public departureDate!: Date;
  public returnDate!: Date;

  constructor(
    private store: Store<SettingsState>,
    private readonly dataService: DataService
  ) {
    this.dataService.getAirports().subscribe((data) => {
      this.airports = data;
    });
  }

  switchLocations() {
    [this.originAirport, this.destinationAirport] = [
      this.destinationAirport,
      this.originAirport,
    ];
  }
}
