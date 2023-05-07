import { Component, Input } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { DetailsFormGroup } from '@booking/models/PassengerFormModels';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

@Component({
  selector: 'app-contact-details-form',
  templateUrl: './contact-details-form.component.html',
  styleUrls: ['./contact-details-form.component.scss'],
})
export class ContactDetailsFormComponent {
  public countryCode = [
    {
      name: 'Afghanistan',
      value: '+93',
    },
    { name: 'Albania', value: '+355' },
    { name: 'Belarus', value: '+375' },
    { name: 'Bolivia', value: '+591' },
    { name: 'Canada', value: '+1' },
    { name: 'China', value: '+86' },
    { name: 'Colombia', value: '+57' },
    { name: 'Dominica', value: '+1-767' },
    { name: 'Estonia', value: '+372' },
    { name: 'France', value: '+33' },
    { name: 'Japan', value: '+81' },
    { name: 'USA', value: '+1' },
  ];

  @Input() details!: FormGroup<DetailsFormGroup>;
}
