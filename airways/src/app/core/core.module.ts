import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorPageComponent } from '@core/pages/error-page/error-page.component';
import { FooterComponent } from '@core/components/footer/footer.component';

@NgModule({
  declarations: [FooterComponent, ErrorPageComponent],
  imports: [CommonModule],
  exports: [FooterComponent, ErrorPageComponent],
})
export class CoreModule {}
