import { NgModule } from '@angular/core';
import { FlightsComponent } from '@booking/pages/flights/flights.component';
import { BookingPageRoutingModule } from '@booking/booking-page-routing.module';
import { BookingPageComponent } from '@booking/booking-page.component';
import { PassengersComponent } from '@booking/pages/passengers/passengers.component';
import { ReviewComponent } from '@booking/pages/review/review.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    BookingPageComponent,
    FlightsComponent,
    PassengersComponent,
    ReviewComponent,
  ],
  imports: [CommonModule, BookingPageRoutingModule, SharedModule],
})
export class BookingPageModule {}
