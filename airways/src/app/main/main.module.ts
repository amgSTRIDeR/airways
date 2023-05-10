import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from '@main/pages/main/main.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { AirportsFilterPipe } from './pipes/airports-filter.pipe';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { DateTypeService } from '@core/services/date-type.service';

@NgModule({
  declarations: [MainComponent, AirportsFilterPipe],
  imports: [
    CommonModule,
    MainRoutingModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [DateTypeService],
})
export class MainModule {}
