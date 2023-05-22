import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { CurrentPageDirection } from '@redux/models/state.models';
import { Observable } from 'rxjs';
import { BookingSelectors } from '@redux/selectors/booking-page.selectors';
import { BookingActions } from '@redux/actions/booking-page.actions';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StepperComponent {
  public page$: Observable<CurrentPageDirection> = this.store.select(
    BookingSelectors.currentPageDirectionSelector
  );

  constructor(private store: Store) {}

  public changePageDirection(index: number) {
    if (index === 0) this.store.dispatch(BookingActions.OnFlightSubPage());
    if (index === 1) this.store.dispatch(BookingActions.OnPassengersSubPage());
    if (index === 2) this.store.dispatch(BookingActions.OnReviewSubPage());
  }

  public changePageNameToIndex(page: string) {
    if (page === 'flight') return 0;
    if (page === 'passengers') return 1;
    return 2;
  }
}
