import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { MainPageActions } from '@redux/actions/main-page.actions';
import { PassengersCount } from '@redux/models/main-page.models';
import { SettingsState } from '@redux/models/state.models';
import { MainPageSelectors } from '@redux/selectors/main-page.selectors';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-passengers-form',
  templateUrl: './passengers-form.component.html',
  styleUrls: ['./passengers-form.component.scss'],
})
export class PassengersFormComponent implements OnDestroy {
  public passengers = {
    adults: 1,
    children: 0,
    infants: 0,
  };

  passengersCount$ = this.store.select(MainPageSelectors.PassengersCount);
  passengersSubscription!: Subscription;

  constructor(private store: Store<SettingsState>) {
    this.passengersSubscription = this.passengersCount$.subscribe(
      (passengers: PassengersCount | null): void => {
        if (passengers !== null) {
          this.passengers = {
            adults: passengers.adults,
            children: passengers.children,
            infants: passengers.infants,
          };
        }
      }
    );
  }

  ngOnDestroy(): void {
    this.passengersSubscription.unsubscribe();
  }

  updatePassengersState() {
    this.store.dispatch(MainPageActions.PassengersCount(this.passengers));
  }

  decreasePassengersCount(type: string) {
    switch (type) {
      case 'adults': {
        if (this.passengers.adults > 1) {
          this.passengers.adults--;
          this.updatePassengersState();
        }
        break;
      }
      case 'children': {
        if (this.passengers.children > 0) {
          this.passengers.children--;
          this.updatePassengersState();
        }
        break;
      }
      case 'infants': {
        if (this.passengers.infants > 0) {
          this.passengers.infants--;
          this.updatePassengersState();
        }
        break;
      }
    }
  }

  increasePassengersCount(type: string) {
    switch (type) {
      case 'adults': {
        this.passengers.adults++;
        this.updatePassengersState();
        break;
      }
      case 'children': {
        this.passengers.children++;
        this.updatePassengersState();
        break;
      }
      case 'infants': {
        this.passengers.infants++;
        this.updatePassengersState();
        break;
      }
    }
  }
}
