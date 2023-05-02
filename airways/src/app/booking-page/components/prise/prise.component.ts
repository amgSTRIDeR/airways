import { Component, Input } from '@angular/core';
import { PersonTotal } from '@booking/pages/review/review.component';

@Component({
  selector: 'app-prise',
  templateUrl: './prise.component.html',
  styleUrls: ['./prise.component.scss'],
})
export class PriseComponent {
  @Input() total!: PersonTotal;
  currency = 'EUR';
}
