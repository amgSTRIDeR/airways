import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingCardRoutingModule } from './shopping-card-routing.module';
import { ShoppingCardComponent } from './pages/cards/shopping-card.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { SortButtonComponent } from './components/sort-button/sort-button.component';
import { OrderComponent } from './components/order/order.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { CardMenuComponent } from './components/order/card-menu/card-menu.component';

@NgModule({
  declarations: [
    ShoppingCardComponent,
    SortButtonComponent,
    OrderComponent,
    CardMenuComponent,
  ],
  imports: [
    CommonModule,
    ShoppingCardRoutingModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatMenuModule,
    FormsModule,
  ],
})
export class ShoppingCardModule {}
