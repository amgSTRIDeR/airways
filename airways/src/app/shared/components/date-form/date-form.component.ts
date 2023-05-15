import { Component, OnDestroy } from '@angular/core';
import { DateTypeService } from '@core/services/date-type.service';
import { Store } from '@ngrx/store';
import { MainPageActions } from '@redux/actions/main-page.actions';
import { MainPageState } from '@redux/models/state.models';
import { MainPageSelectors } from '@redux/selectors/main-page.selectors';
import { SettingsSelectors } from '@redux/selectors/settings.selectors';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-date-form',
  templateUrl: './date-form.component.html',
  styleUrls: ['./date-form.component.scss'],
})
export class DateFormComponent implements OnDestroy {
  public departureDate: Date | null = null;
  public returnDate: Date | null = null;
  public isHintVisible = false;
  public isRoundTrip = true;
  isRoundTrip$ = this.store.select(MainPageSelectors.IsRoundTripSelector);
  dateType$ = this.store.select(SettingsSelectors.DateTypeSelector);
  dateTypeSubscription!: Subscription;
  isRoundTripSubscription!: Subscription;

  constructor(
    private store: Store<MainPageState>,
    private dateTypeService: DateTypeService
  ) {
    this.dateTypeSubscription = this.dateType$.subscribe((dateType) => {
      this.dateTypeService.changeDateType(dateType);
    });

    this.isRoundTripSubscription = this.isRoundTrip$.subscribe((boolean) => {
      this.isRoundTrip = boolean;

      if (!boolean) {
        this.returnDate = null;
        this.setReturnDate();
      }
    });
  }

  ngOnDestroy(): void {
    this.dateTypeSubscription.unsubscribe();
    this.isRoundTripSubscription.unsubscribe();
  }

  setDepartureDate() {
    this.store.dispatch(
      MainPageActions.FlightForward({
        date: this.departureDate,
      })
    );
  }

  setReturnDate() {
    this.store.dispatch(
      MainPageActions.FlightBack({
        date: this.returnDate,
      })
    );
  }
}
