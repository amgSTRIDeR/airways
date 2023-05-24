import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SingInForm } from '@core/models/auth.models';

@Component({
  selector: 'app-input-birthday',
  templateUrl: './input-birthday.component.html',
  styleUrls: ['./input-birthday.component.scss'],
})
export class InputBirthdayComponent {
  @Input() singInForm!: FormGroup<SingInForm>;

  get FG(): FormControl<string | null> | null {
    return this.singInForm.controls.birthdayDate;
  }
}
