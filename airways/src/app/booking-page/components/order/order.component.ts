import { Component, Input } from '@angular/core';
import {
  passengerInformation,
  plainInformation,
} from '@booking/pages/review/review.component';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent {
  @Input() data?: plainInformation;
  @Input() passengers?: passengerInformation[];
}
