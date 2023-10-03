import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
    selector: 'app-cart-notification',
    templateUrl: './cart-notification.component.html',
    styleUrls: ['./cart-notification.component.sass']
  })
  export class CartNotificationComponent {
    
    constructor(public cartService: CartService) {}

  }