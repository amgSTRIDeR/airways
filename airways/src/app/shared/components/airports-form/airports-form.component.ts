import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { MainPageActions } from '@redux/actions/main-page.actions';
import { AirportsRes } from '@redux/models/main-page.models';
import { MainPageState } from '@redux/models/state.models';
import { MainPageSelectors } from '@redux/selectors/main-page.selectors';
import { Subscription, filter } from 'rxjs';

@Component({
  selector: 'app-airports-form',
  templateUrl: './airports-form.component.html',
  styleUrls: ['./airports-form.component.scss'],
})
export class AirportsFormComponent implements OnDestroy {
  airports: AirportsRes[] = [];
  public originAirport: AirportsRes | null = null;
  public destinationAirport: AirportsRes | null = null;
  public showSwitch = this.router.url === '/main';

  originAirport$ = this.store.select(MainPageSelectors.AirportForwardSelector);
  originAirportSubscription!: Subscription;

  destinationAirport$ = this.store.select(
    MainPageSelectors.AirportBackSelector
  );
  destinationAirportSubscription!: Subscription;

  constructor(private store: Store<MainPageState>, private router: Router) {
    this.store
      .select(MainPageSelectors.AirportsSelector)
      .pipe(filter((airports) => !airports || airports.length === 0))
      .subscribe((airports) => {
        if (!airports || airports.length === 0) {
          this.store.dispatch(MainPageActions.LoadAirports());
        }
      });

    this.store.subscribe((state) => {
      this.airports = MainPageSelectors.AirportsSelector(state);
    });

    this.originAirportSubscription = this.originAirport$.subscribe(
      (airport) => {
        this.originAirport = airport;
      }
    );

    this.destinationAirportSubscription = this.destinationAirport$.subscribe(
      (airport) => {
        this.destinationAirport = airport;
      }
    );
  }

  ngOnDestroy(): void {
    this.originAirportSubscription.unsubscribe();
    this.destinationAirportSubscription.unsubscribe();
  }

  switchLocations() {
    [this.originAirport, this.destinationAirport] = [
      this.destinationAirport,
      this.originAirport,
    ];

    this.setOriginAirport(this.originAirport);
    this.setDestinationAirport(this.destinationAirport);
  }

  setOriginAirport(originAirport: AirportsRes | null) {
    this.store.dispatch(
      MainPageActions.AirportForward({ airport: originAirport })
    );
  }

  setDestinationAirport(destinationAirport: AirportsRes | null) {
    this.store.dispatch(
      MainPageActions.AirportBack({ airport: destinationAirport })
    );
  }
}
