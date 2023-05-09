import { Component, Input, OnInit } from '@angular/core';
import { Order } from '@redux/models/basket.models';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SettingsSelectors } from '@redux/selectors/settings.selectors';
import { BaskedActions } from '@redux/actions/bascet.actions';
import { BookingActions } from '@redux/actions/booking-page.actions';
import { Router } from '@angular/router';

export interface OrderForHtml {
  flightNum: string;
  from: string;
  to: string;
  forvardDate: { takeoffDate: string; landingDate: string };
  backDate: { takeoffDate: string; landingDate: string } | null;
  adult: number;
  child: number;
  infant: number;
  price: number;
  id: string;
  isChecked: boolean;
}

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {
  @Input() order!: Order;
  public data!: OrderForHtml;
  public currency$: Observable<string> = this.store.select(
    SettingsSelectors.CurrencySelector
  );

  constructor(private store: Store, private router: Router) {}

  ngOnInit(): void {
    this.data = this.addVerables();
  }

  public addCheckboxValueToStore() {
    this.store.dispatch(BaskedActions.CheckFlight({ id: this.order.id }));
  }

  public deleteFlight() {
    this.store.dispatch(BaskedActions.DeleteFlight({ id: this.data.id }));
  }

  public editFlight() {
    this.store.dispatch(
      BookingActions.EditFlightAction({
        id: this.order.id,
        flights: this.order.flights,
        passengersInfo: this.order.passengersInfo,
        passengersCount: this.order.passengersCount,
        totalPrice: this.order.total,
      })
    );
    this.router.navigate(['/booking-page']);
  }

  private addVerables() {
    const flightNum = this.order.flights.forwardFlight.flightNumber;
    const from = this.order.flights.forwardFlight.form.city;
    const to = this.order.flights.forwardFlight.to.city;
    const forvardDate = {
      takeoffDate: this.order.flights.forwardFlight.takeoffDate,
      landingDate: this.order.flights.forwardFlight.landingDate,
    };
    const backDate = this.order.flights.backFlight
      ? {
          takeoffDate: this.order.flights.backFlight.takeoffDate,
          landingDate: this.order.flights.backFlight.landingDate,
        }
      : null;
    const adult = this.order.passengersInfo.adult.length;
    const child = this.order.passengersInfo.child.length;
    const infant = this.order.passengersInfo.infant.length;
    const price = this.order.total.totalPrice;
    const id = this.order.id;
    const isChecked = this.order.isChecked;
    return {
      flightNum,
      from,
      to,
      forvardDate,
      backDate,
      adult,
      child,
      infant,
      price,
      id,
      isChecked,
    };
  }
}
