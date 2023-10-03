import { Component, OnInit } from '@angular/core';
import { ModalService } from '../modal.service';
import { CartService } from 'src/app/cart/services/cart.service';

@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-modal.component.html',
  styleUrls: ['./cart-modal.component.sass']
})
export class CartModalComponent implements OnInit {
    // counterValue!: number
    // productId!: number
    openedForDeleting!: string | null

    constructor(
        public modalService: ModalService, 
        public cartService: CartService) 
    {}

    addToOpenedToDelete(id: string) {
        this.openedForDeleting = id
    }

    removeFromOpenedToDelete(e: any) {
        if (e.target.classList.contains('modal-login__close') || e.target.classList.contains('more-block')) {
            return
        } else {
            this.openedForDeleting = null
        }
    }

    ngOnInit() {
        this.cartService.getCart()
    }

    onCounterChange(event: { productId: number; value: number }) {
        this.cartService.findAndUdpate(event.productId, event.value)
    }

    getPrice(product: any) {
        let price: any;
        product.searchStatus.map((status: any) => {
            if (status.searchPosition === 'price') {
                price = status
            }
        })
        return price
    }

}