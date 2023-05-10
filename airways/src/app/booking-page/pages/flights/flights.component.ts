import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { BookingActions } from '@redux/actions/booking-page.actions';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.scss'],
})
export class FlightsComponent {
  constructor(private store: Store) {}

  goToPassengersPage() {
    this.store.dispatch(BookingActions.OnPassengersSubPage());
  }
}
