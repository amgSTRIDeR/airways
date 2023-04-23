import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-passenger-card',
  templateUrl: './passenger-card.component.html',
  styleUrls: ['./passenger-card.component.scss'],
})
export class PassengerCardComponent {
  @Input() name!: string;
  @Input() accessible!: boolean;
}
