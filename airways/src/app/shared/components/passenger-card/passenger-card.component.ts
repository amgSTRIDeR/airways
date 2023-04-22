import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-passenger-card',
  templateUrl: './passenger-card.component.html',
  styleUrls: ['./passenger-card.component.scss'],
})
export class PassengerCardComponent implements OnInit {
  @Input() name!: string;
  @Input() accessible!: boolean;
  @Input() card!: AbstractControl;
  @Input() i!: number;

  ngOnInit(): void {
    //console.log(this.firsName);
    console.log(this.card);
  }

  get newCard() {
    return this.card as FormGroup;
  }

  get firsName() {
    return this.newCard.value;
  }
}
