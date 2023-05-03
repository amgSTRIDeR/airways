import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from '@main/pages/main/main.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { AirportsFilterPipe } from './pipes/airports-filter.pipe';

@NgModule({
  declarations: [MainComponent, AirportsFilterPipe],
  imports: [
    CommonModule,
    MainRoutingModule,
    MatFormFieldModule,
    MatSelectModule,
  ],
})
export class MainModule {}
