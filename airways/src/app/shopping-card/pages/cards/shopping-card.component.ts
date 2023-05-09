import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Order } from '@redux/models/basket.models';
import { BasketSelectors } from '@redux/selectors/basket.selectors';
import { BaskedActions } from '@redux/actions/bascet.actions';
import { CurrencyType } from '@redux/models/settings.models';
import { SettingsSelectors } from '@redux/selectors/settings.selectors';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-card',
  templateUrl: './shopping-card.component.html',
  styleUrls: ['./shopping-card.component.scss'],
})
export class ShoppingCardComponent implements OnInit, OnDestroy {
  public totalPrice$: Observable<number> = this.store.select(
    BasketSelectors.TotalPrice
  );
  public currency$: Observable<CurrencyType> = this.store.select(
    SettingsSelectors.CurrencySelector
  );
  private orderSubscription!: Subscription;
  public orders!: Order[];
  public promoCode = '';

  constructor(private store: Store, private router: Router) {}

  ngOnInit(): void {
    this.getOrders();
  }

  ngOnDestroy(): void {
    this.orderSubscription.unsubscribe();
  }

  public get ordersChecked(): number {
    return this.orders.reduce((acc, el) => {
      if (el.isChecked) acc += 1;
      return acc;
    }, 0);
  }

  public activatePromoCode() {
    this.store.dispatch(BaskedActions.PromoCode({ code: this.promoCode }));
    this.promoCode = '';
  }

  public addNewTrip() {
    this.router.navigate(['/main']);
  }

  private getOrders(): void {
    const orders$: Observable<Order[]> = this.store.select(
      BasketSelectors.Orders
    );
    this.orderSubscription = orders$.subscribe((orders: Order[]) => {
      this.orders = orders;
    });
  }
}
