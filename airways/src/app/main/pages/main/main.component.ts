import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Airport } from '@shared/interfaces/airport.interface';
import { SettingsState } from '@redux/models/state.models';
import { SettingsSelectors } from '@redux/selectors/settings.selectors';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  airports: Airport[] = [];
  public originAirport: Airport = { key: '', name: '', country: '', city: '' };
  public destinationAirport: Airport = {
    key: '',
    name: '',
    country: '',
    city: '',
  };
  dateType$ = this.store.pipe(select(SettingsSelectors.DateTypeSelector));
  public tripType = 'roundTrip';
  public departureDate!: Date;
  public returnDate!: Date;

  constructor(private http: HttpClient, private store: Store<SettingsState>) {}

  ngOnInit(): void {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Accept: 'application/json',
      }),
    };

    this.http
      .get<Airport[]>('/api/search/airport', httpOptions)
      .subscribe((data) => {
        this.airports = data;
      });
  }

  switchLocations() {
    const temp = this.originAirport;
    this.originAirport = this.destinationAirport;
    this.destinationAirport = temp;
  }
}
