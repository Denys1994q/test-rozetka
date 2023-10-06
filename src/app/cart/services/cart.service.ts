import { Injectable } from '@angular/core';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { ProductInterface } from 'src/app/core/services/api-response-types';
import { ProductService } from 'src/app/product/services/product.service';

@Injectable({ providedIn: 'root' })

export class CartService {
    productsFromStorage: ProductInterface[] = []
    totalProductsNumber = 0
    totalPrice = 0
    productInCart: boolean = false

    constructor(private modalService: ModalService, private productService: ProductService) { }

    getCart(): any {
        const cartData: any = localStorage.getItem('shoppingCart');
        this.productsFromStorage = JSON.parse(cartData) 
        this.getTotal()
        if (this.productService.product && this.productService.product._id) {
            this.checkIfProductInCart(this.productService.product._id)
        }
    }

    getTotal() {
        const cartData: any = localStorage.getItem('shoppingCart');
        this.productsFromStorage = JSON.parse(cartData) 
        // видалити не працюэ 
        let totalAmount = 0
        if ((this.productsFromStorage && this.productsFromStorage.length > 0)) {
            totalAmount  = this.productsFromStorage.reduce((accumulator: number, product: any) => accumulator + product.amount, 0);
            this.totalProductsNumber = totalAmount
        } else {
            this.totalProductsNumber = 0
        }
        this.getTotalPrice()
    }

    getTotalPrice() {
        const cartData: any = localStorage.getItem('shoppingCart');
        this.productsFromStorage = JSON.parse(cartData) 
        if (this.productsFromStorage && this.productsFromStorage.length > 0) {
            this.totalPrice = this.productsFromStorage.reduce((accumulator: number, product: any) => accumulator + product.amount * product.searchStatus.find((item: any) => item.searchPosition === 'price').option.new, 0);
        } else {
            this.totalPrice = 0
        }
    }

    addToShoppingCart(product: any): void {
        const cartData: any = localStorage.getItem('shoppingCart');
        if (cartData) {
            const parsedCartData = JSON.parse(cartData)
            if (parsedCartData.find((prod: any) => prod._id === product._id)) {
                this.findAndUdpate(product._id, 1)
            } else {
                parsedCartData.unshift(product)
                localStorage.setItem('shoppingCart', JSON.stringify(parsedCartData));
            }
        } else {
            const data = []
            data.unshift(product)
            localStorage.setItem('shoppingCart',  JSON.stringify(data))
        }
        this.modalService.openDialog('cart')
        this.getTotal()
        this.checkIfProductInCart(this.productService.product._id)
    }

    findAndUdpate(id: number, value: number) {
        const cartData: any = localStorage.getItem('shoppingCart');
        const parsedCartData = JSON.parse(cartData);
        // Пошук товару за _id
        const productIndex = parsedCartData.findIndex((prod: any) => prod._id === id);
        if (productIndex !== -1) {
            // Якщо товар знайдено, оновити кількість
            parsedCartData[productIndex].amount = value;
        } else {
            // Якщо товар не знайдено, створити новий об'єкт
            const newProduct = { _id: id, amount: value };
            // Додати новий товар до корзини
            parsedCartData.unshift(newProduct);
        }
        localStorage.setItem('shoppingCart', JSON.stringify(parsedCartData));
        this.getTotal()
    }

    checkIfProductInCart(id: string) {
        const cartData: any = localStorage.getItem('shoppingCart');
        this.productsFromStorage = JSON.parse(cartData) 
        if (this.productsFromStorage && this.productsFromStorage.find(product => product._id === id)) {
            this.productInCart = true
        } else {
            this.productInCart = false
        }
    }

    removeFromCart(id: string) {
        const cartData: any = localStorage.getItem('shoppingCart');
        const parsedCartData = JSON.parse(cartData);
        const newData = parsedCartData.filter((prod: any) => prod._id !== id)
        localStorage.setItem('shoppingCart', JSON.stringify(newData));
        this.getCart()
        this.getTotal()
        if (this.productService.product && this.productService.product._id) {
            this.checkIfProductInCart(this.productService.product._id)
        }
    }

    // Очистити корзину
    clearCart(): void {
        localStorage.removeItem('shoppingCart');
        this.productsFromStorage = []
        this.totalProductsNumber = 0
        this.totalPrice = 0
        this.productInCart = false
    }
}