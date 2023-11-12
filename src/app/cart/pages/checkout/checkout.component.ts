import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { OrdersService } from 'src/app/cabinet/services/orders.service';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.sass']
})
export class CheckoutPage {
    orderConfirmed: boolean = false

    constructor(
        public cartService: CartService, 
        private ordersService: OrdersService,
        public modalService: ModalService) {}

    ngOnInit() {
        this.modalService.closeDialog()
    }

    getPrice(product: any) {
        let price: any = 0;
        product.searchStatus.map((status: any) => {
            if (status.searchPosition === 'price') {
                price = status
            }
        })
        return price
    }

    confirmOrder() {
        this.cartService.productsFromStorage.map(item => {
            this.ordersService.addToOrdersList(item._id).subscribe({
                next: response => this.orderConfirmed = true,
                error: err => console.log(err),
                complete: () => this.cartService.clearCart()
            })
        })
    }

}