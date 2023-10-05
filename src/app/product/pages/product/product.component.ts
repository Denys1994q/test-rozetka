import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { SearchResultsService } from 'src/app/search/services/search-results.service';
import { ApiService } from 'src/app/core/services/api.service';
import { CartService } from 'src/app/cart/services/cart.service';
import { ProductInterface } from 'src/app/core/services/api-response-types';
import { ModalService } from 'src/app/shared/components/modal/modal.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})
export class ProductComponent {
    baseView!: boolean
    product!: ProductInterface
    video!: any[]
    routes!: any
    urlId!: any

    constructor(
        private router: Router, 
        public route:ActivatedRoute, 
        public ProductService: ProductService, 
        public SearchResultsService: SearchResultsService,
        public apiService: ApiService,
        public cartService: CartService,
        public modalService: ModalService
    ) {}

    ngOnInit() {
        this.scrollToTop()
        this.route.url.subscribe(route => {
        // айді товару
        const lastLetterBeforeId = this.router.url.lastIndexOf('/')
        this.urlId = this.router.url.slice(lastLetterBeforeId+1, lastLetterBeforeId+this.router.url.length-1)
        // отримуємо з сервісу інфо щодо товару по його айді
        this.ProductService.getCurrentProduct(route[1].path, this.urlId)
        this.findCategory(route[1].path)
        // на основі юрл сторінки визначаємо вигляд компоненту
        if (route[1].path === this.urlId && (route[1].path.toString().length + route[0].path.length == this.router.url.length-2)) {
            this.baseView = true
        } else {
            this.baseView = false
        }
        })
    }

    addToCart() {
        this.cartService.addToShoppingCart({...this.ProductService.product, amount: 1})  
    }

    scrollToTop() {
        window.scrollTo({
            top: 1000,
            behavior: "smooth"
        });
    }

    findCategory(urlId: string) {
        this.apiService.getAllCategories().subscribe({
            next: response => {
                response.find((category: any) => {
                    category.subCategories.find((sub: any) => {
                    sub.products.find((prod: any) => {
                        if (prod._id === urlId) {
                            this.cartService.getCart()
                            this.ProductService.setCategory(category)
                            this.ProductService.setSubcategory(sub)
                        }
                    })
                    })
                })
            },
            error: err => console.log(err)
        })
    }
 
}
