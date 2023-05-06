import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  PassengerInfo,
  SelectedFlight,
} from '@redux/models/booking-page.models';
import { BookingSelectors } from '@redux/selectors/booking-page.selectors';
import { BookingActions } from '@redux/actions/booking-page.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss'],
})
export class ReviewComponent {
  public flight$: Observable<SelectedFlight | null> = this.store.select(
    BookingSelectors.flightsSelector
  );
  public passengersInfo$: Observable<PassengerInfo | null> = this.store.select(
    BookingSelectors.passengersInfoSelector
  );

  constructor(private store: Store, private router: Router) {}

  goToMainPage() {
    this.router.navigate(['main']);
  }

  backToPassengers(): void {
    this.store.dispatch(BookingActions.OnPassengersSubPage());
  }

  goToShoping() {
    this.router.navigate(['shopping-card']);
  }
}
