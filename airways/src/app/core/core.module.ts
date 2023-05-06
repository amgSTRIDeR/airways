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
import { DateSelectComponent } from './components/date-select/date-select.component';
import { CurrencySelectComponent } from './components/currency-select/currency-select.component';

@NgModule({
  declarations: [
    FooterComponent,
    ErrorPageComponent,
    HeaderComponent,
    BookingHeaderComponent,
    StepperComponent,
    DateSelectComponent,
    CurrencySelectComponent,
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
