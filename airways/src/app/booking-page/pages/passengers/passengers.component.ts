import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

export interface CountyCode {
  country: string;
  value: string;
}

export interface personData {
  firstName: string;
  lastName: string;
  gender: string;
  birthdayDate: string;
}

const countryCode: CountyCode[] = [
  {
    country: 'Afghanistan',
    value: '+93',
  },
  { country: 'Albania', value: '+355' },
  { country: 'Belarus', value: '+375' },
  { country: 'Bolivia', value: '+591' },
  { country: 'Canada', value: '+1' },
  { country: 'China', value: '+86' },
  { country: 'Colombia', value: '+57' },
  { country: 'Dominica', value: '+1-767' },
  { country: 'Estonia', value: '+372' },
  { country: 'France', value: '+33' },
  { country: 'Japan', value: '+81' },
  { country: 'USA', value: '+1' },
];

@Component({
  selector: 'app-passengers',
  templateUrl: './passengers.component.html',
  styleUrls: ['./passengers.component.scss'],
})
export class PassengersComponent implements OnInit {
  cards = [2, 1, 3, 4];

  adultCount = 3;
  childCount = 2;
  infantCount = 1;
  passengersForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.passengersForm = this.fb.group({
      adult: this.fb.array([]),
      child: this.fb.array([]),
      infant: this.fb.array([]),
      details: this.fb.group({
        countryCode: this.fb.array([]),
        phone: '',
        email: '',
      }),
    });
    this.addCountryCodeToForm();
    this.addPersonToForm(this.adult, this.adultCount);
    this.addPersonToForm(this.child, this.childCount);
    this.addPersonToForm(this.infant, this.infantCount);
  }

  private addCountryCodeToForm(): void {
    for (const countryCodeElement of countryCode) {
      const fg = this.fb.group({
        country: [countryCodeElement.country],
        value: [countryCodeElement.value],
      });
      this.countryCode.push(fg);
    }
  }

  private addPersonToForm(typeOfControl: FormArray, count: number) {
    const person = this.fb.group({
      firstName: '',
      lastName: '',
      gender: '',
      birthdayDate: '',
      invalid: false,
    });
    while (count > 0) {
      typeOfControl.push(person);
      count--;
    }
  }

  get adult() {
    return this.passengersForm.get('adult') as FormArray;
  }

  get child() {
    return this.passengersForm.get('child') as FormArray;
  }

  get infant() {
    return this.passengersForm.get('infant') as FormArray;
  }

  get details() {
    return this.passengersForm.get('details') as FormGroup;
  }

  get countryCode(): FormArray {
    return this.details.get('countryCode') as FormArray;
  }

  get allForm() {
    return this.passengersForm as FormGroup;
  }

  logForm() {
    console.log(this.passengersForm.value);
  }
}
