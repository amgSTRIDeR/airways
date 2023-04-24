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
  adultCount = 5;
  childCount = 2;
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
        phone: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required]),
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
        firstName: ['', [Validators.required, Validators.minLength(5)]],
        lastName: ['', [Validators.required]],
        gender: ['', [Validators.required]],
        birthdayDate: ['', [Validators.required]],
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

  get countryCode(): FormControl<string | null> {
    return this.details.controls.countryCode;
  }

  get allForm(): FormGroup<AllPassengerFormGroup> {
    return this.passengersForm;
  }

  logForm() {
    console.log(this.passengersForm.valid);
    console.log(this.passengersForm.value);
  }
}
