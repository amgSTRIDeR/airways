import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import passwordValidator from '@booking/validators/password-validator';
import { LogInForm, SingInForm } from '@core/models/auth.models';
import { facebook, google } from '@core/svg/SVG';
import { IconService } from '@core/services/icon.service';
import nameValidator from '@booking/validators/name-validator';
import phoneValidator from '@booking/validators/phone-validator';

const ICONS: { name: string; source: string }[] = [
  {
    name: 'facebook',
    source: facebook,
  },
  {
    name: 'google',
    source: google,
  },
];

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  public logInForm!: FormGroup<LogInForm>;
  public singInForm!: FormGroup<SingInForm>;
  public logIn = true;

  constructor(private fb: FormBuilder, private iconService: IconService) {
    this.addPathToIcon();
  }

  ngOnInit(): void {
    this.createForms();
  }

  public submitLogInForm() {
    if (this.logInForm.valid) {
      //  something to do;;
    }
  }

  public submitSingInForm() {
    if (this.singInForm.valid) {
      //  something to do;;
    }
  }

  private addPathToIcon() {
    for (const icon of ICONS) {
      this.iconService.add(icon.name, icon.source);
    }
  }

  private createForms() {
    this.logInForm = this.fb.group<LogInForm>({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, passwordValidator()]),
    });

    this.singInForm = this.fb.group<SingInForm>({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, passwordValidator()]),
      firstName: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(10),
        nameValidator(),
      ]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(10),
        nameValidator(),
      ]),
      gender: new FormControl('', [Validators.required]),
      birthdayDate: new FormControl('', [Validators.required]),
      countryCode: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required, phoneValidator()]),
      citizenship: new FormControl('', [Validators.required]),
      privacyPolicy: new FormControl('', [Validators.required]),
    });
  }
}
