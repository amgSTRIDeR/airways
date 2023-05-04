import { isDevMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from '@core/core.module';
import { SettingsReducer } from '@redux/reducers/settings.reducer';
import { AuthReducer } from '@redux/reducers/auth.reducer';
import { MainPageReducer } from '@redux/reducers/main-page.reducer';
import { BookingPageReducer } from '@redux/reducers/booking-page.reducer';
import { BasketPageReducer } from '@redux/reducers/basket.reduser';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(
      {
        settings: SettingsReducer,
        auth: AuthReducer,
        mainPage: MainPageReducer,
        booking: BookingPageReducer,
        basket: BasketPageReducer,
      },
      {}
    ),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot([]),
    BrowserAnimationsModule,
    CoreModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
