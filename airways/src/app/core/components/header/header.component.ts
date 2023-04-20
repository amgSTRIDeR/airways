import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public showBookWindow = false;
  public selectedDateFormat = 'MM/DD/YYYY';
  public selectedCurrency = 'EUR';

  constructor(private router: Router) {}

  toMainPage() {
    this.router.navigate(['/']);
  }
}
