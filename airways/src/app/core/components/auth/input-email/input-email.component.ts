import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LogInForm, SingInForm } from '@core/models/auth.models';
import { GoogleApiService } from '@core/services/google-api.service';

@Component({
  selector: 'app-input-email',
  templateUrl: './input-email.component.html',
  styleUrls: ['./input-email.component.scss'],
})
export class InputEmailComponent {
  @Input() logInForm?: FormGroup<LogInForm>;
  @Input() singInForm?: FormGroup<SingInForm>;
  public userEmail = '';

  get FG(): FormControl<string | null> | null {
    if (this.singInForm) return this.singInForm.controls.email;
    if (this.logInForm) return this.logInForm.controls.email;
    return null;
  }

  constructor(private readonly google: GoogleApiService) {
    google.userProfileSubject.subscribe((info) => {
      this.userEmail = info.info.email;
    });
  }
}
