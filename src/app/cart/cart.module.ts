import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { CartNotificationComponent } from './components/cart-notification/cart-notification.component';
import { CheckoutPage } from './pages/checkout/checkout.component';

@NgModule({
  declarations: [
    CartNotificationComponent,
    CheckoutPage
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    CartNotificationComponent,
    CheckoutPage
  ]

})
export class CartModule { }
