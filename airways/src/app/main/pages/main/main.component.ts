import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Airport } from '@shared/interfaces/airport.interface';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  airports: Airport[] = [];
  selectedAirport = '';

  constructor(private http: HttpClient) {}

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
}
