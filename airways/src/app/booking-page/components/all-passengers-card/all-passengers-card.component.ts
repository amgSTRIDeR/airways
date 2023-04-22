import { Component, Input } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-all-passengers-card',
  templateUrl: './all-passengers-card.component.html',
  styleUrls: ['./all-passengers-card.component.scss'],
})
export class AllPassengersCardComponent {
  @Input() name!: string;
  @Input() accessible!: boolean;
  @Input() cards!: number[];
  @Input() form!: FormArray;
  @Input() allForm!: FormGroup;
}
