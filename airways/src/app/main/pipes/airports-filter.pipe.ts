import { Pipe, PipeTransform } from '@angular/core';
import { Airport } from '@shared/interfaces/airport.interface';

@Pipe({
  name: 'airportsFilter',
})
export class AirportsFilterPipe implements PipeTransform {
  transform(airports: Airport[], selectedAirport: Airport): Airport[] {
    if (!selectedAirport) {
      return airports;
    }
    return airports.filter((airport) => airport.key !== selectedAirport.key);
  }
}
