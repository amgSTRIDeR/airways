import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorPageComponent } from '@core/pages/error-page/error-page.component';
import { FooterComponent } from '@core/components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { BookingHeaderComponent } from './components/booking-header/booking-header.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSelectModule } from '@angular/material/select';
import { StepperComponent } from './components/stepper/stepper.component';

@NgModule({
  declarations: [
    FooterComponent,
    ErrorPageComponent,
    HeaderComponent,
    BookingHeaderComponent,
    StepperComponent,
  ],
  imports: [CommonModule, MatTooltipModule, MatStepperModule, MatSelectModule],
  exports: [
    FooterComponent,
    ErrorPageComponent,
    HeaderComponent,
    BookingHeaderComponent,
    StepperComponent,
  ],
})
export class CoreModule {}
