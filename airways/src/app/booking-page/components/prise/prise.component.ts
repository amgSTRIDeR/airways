import { Component, Input } from '@angular/core';
import { PersonTotal } from '@booking/pages/review/total/total.component';
import { Store } from '@ngrx/store';
import { SettingsSelectors } from '@redux/selectors/settings.selectors';

@Component({
  selector: 'app-prise',
  templateUrl: './prise.component.html',
  styleUrls: ['./prise.component.scss'],
})
export class PriseComponent {
  @Input() total!: PersonTotal;
  currency = 'EUR';
  public currency$ = this.store.select(SettingsSelectors.CurrencySelector);

  constructor(private store: Store) {}
}
