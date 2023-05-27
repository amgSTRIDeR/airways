import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SingInForm } from '@core/models/auth.models';
import { GoogleApiService } from '@core/services/google-api.service';

@Component({
  selector: 'app-input-name',
  templateUrl: './input-name.component.html',
  styleUrls: ['./input-name.component.scss'],
})
export class InputNameComponent {
  @Input() singInForm!: FormGroup<SingInForm>;
  @Input() nameType!: 'firstName' | 'lastName';
  public userGivenName = '';
  public userFamilyName = '';

  get FG(): FormControl<string | null> | null {
    if (this.nameType === 'firstName') {
      this.singInForm.controls.firstName.setValue(this.userGivenName);
      return this.singInForm.controls.firstName;
    } else if (this.nameType === 'lastName') {
      this.singInForm.controls.lastName.setValue(this.userFamilyName);
      return this.singInForm.controls.lastName;
    } else {
      return null;
    }
  }

  constructor(private readonly google: GoogleApiService) {
    google.userProfileSubject.subscribe((info) => {
      this.userGivenName = info.info.given_name;
      this.userFamilyName = info.info.family_name;
    });
  }
}
