import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  AllPassengerFormGroup,
  DetailsFormGroup,
  PassengerFormGroup,
} from '@booking/models/PassengerFormModels';
import nameValidator from '@booking/validators/name-validator';
import dateValidator from '@booking/validators/date-validator';
import phoneValidator from '@booking/validators/phone-validator';

export interface CountyCode {
  country: string;
  value: string;
}

@Component({
  selector: 'app-passengers',
  templateUrl: './passengers.component.html',
  styleUrls: ['./passengers.component.scss'],
})
export class PassengersComponent implements OnInit {
  adultCount = 1;
  childCount = 1;
  infantCount = 1;
  passengersForm!: FormGroup<AllPassengerFormGroup>;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.passengersForm = this.fb.group<AllPassengerFormGroup>({
      adult: this.fb.array<FormGroup<PassengerFormGroup>>([]),
      child: this.fb.array<FormGroup<PassengerFormGroup>>([]),
      infant: this.fb.array<FormGroup<PassengerFormGroup>>([]),
      details: this.fb.group<DetailsFormGroup>({
        countryCode: new FormControl('', [Validators.required]),
        phone: new FormControl('', [Validators.required, phoneValidator()]),
        email: new FormControl('', [Validators.required, Validators.email]),
      }),
    });

    this.addPersonToForm(this.adult, this.adultCount);
    this.addPersonToForm(this.child, this.childCount);
    this.addPersonToForm(this.infant, this.infantCount);
  }

  private addPersonToForm(
    typeOfControl: FormArray<FormGroup<PassengerFormGroup>>,
    count: number
  ) {
    while (count > 0) {
      const person: FormGroup<PassengerFormGroup> = this.fb.group({
        firstName: [
          '',
          [Validators.required, Validators.minLength(3), nameValidator()],
        ],
        lastName: [
          '',
          [Validators.required, Validators.minLength(3), nameValidator()],
        ],
        gender: ['', [Validators.required]],
        birthdayDate: ['', [Validators.required, dateValidator()]],
        invalid: '',
      });
      typeOfControl.push(person);
      count--;
    }
  }

  get adult(): FormArray<FormGroup<PassengerFormGroup>> {
    return this.passengersForm.controls.adult;
  }

  get child(): FormArray<FormGroup<PassengerFormGroup>> {
    return this.passengersForm.controls.child;
  }

  get infant(): FormArray<FormGroup<PassengerFormGroup>> {
    return this.passengersForm.controls.infant;
  }

  get details(): FormGroup<DetailsFormGroup> {
    return this.passengersForm.controls.details;
  }

  get allForm(): FormGroup<AllPassengerFormGroup> {
    return this.passengersForm;
  }

  logForm() {
    console.log(this.passengersForm.valid);
    console.log(this.passengersForm.value);
  }
}
