import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-all-passengers-card',
  templateUrl: './all-passengers-card.component.html',
  styleUrls: ['./all-passengers-card.component.scss'],
})
export class AllPassengersCardComponent {
  @Input() name!: string;
  @Input() accessible!: boolean;
  @Input() cards!: number[];
}
