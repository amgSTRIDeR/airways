import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
})
export class StepperComponent {
  scrollPosition = '0px';

  @HostListener('window:scroll')
  onWindowScroll() {
    this.scrollPosition = window.pageYOffset + 'px';
  }
}
