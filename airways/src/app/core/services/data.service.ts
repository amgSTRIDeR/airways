import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AirportsRes } from '@redux/models/main-page.models';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    }),
  };

  constructor(private readonly http: HttpClient) {}

  getAirports() {
    return this.http.get<AirportsRes[]>(
      '/api/search/airport',
      this.httpOptions
    );
  }
}
