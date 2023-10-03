import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { ModalService } from 'src/app/shared/components/modal/modal.service';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.sass']
})
export class CheckoutPage {
    orderConfirmed: boolean = false

    constructor(public cartService: CartService, public modalService: ModalService) {}

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
        this.orderConfirmed = true
        this.cartService.clearCart()
    }

}