import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconLabelComponent } from './components/icon-label/icon-label.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { PassengerCardComponent } from './components/passenger-card/passenger-card.component';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  declarations: [IconLabelComponent, PassengerCardComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatTooltipModule,
    MatButtonToggleModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatSlideToggleModule,
  ],
  exports: [
    IconLabelComponent,
    MatCardModule,
    MatIconModule,
    PassengerCardComponent,
    MatInputModule,
    MatTooltipModule,
    MatButtonToggleModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatSlideToggleModule,
  ],
})
export class SharedModule {}
