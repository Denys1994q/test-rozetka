import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { SearchResultsService } from 'src/app/search/services/search-results.service';
import { ApiService } from 'src/app/core/services/api.service';
import { ProductInterface } from 'src/app/core/services/api-response-types';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})
export class ProductComponent {
  baseView!: boolean
  product!: ProductInterface
  category!: any
  subCategory!: any
  video!: any[]
  routes!: any
  urlId!: any

  constructor(
    private router: Router, 
    public route:ActivatedRoute, 
    public ProductService: ProductService, 
    public SearchResultsService: SearchResultsService,
    public apiService: ApiService
  ) {}

  ngOnInit() {
    window.scrollTo({
      top: 1000,
      behavior: "smooth"
    });
    this.route.url.subscribe(route => {

      // айді товару
      const lastLetterBeforeId = this.router.url.lastIndexOf('/')
      this.urlId = this.router.url.slice(lastLetterBeforeId+1, lastLetterBeforeId+this.router.url.length-1)
      // на основі юрл сторінки визначаємо вигляд компоненту
      if (route[1].path === this.urlId && (route[1].path.toString().length + route[0].path.length == this.router.url.length-2)) {
        this.baseView = true
        // оце все не мутити, а просто апі для різних частин продукту і при переході на таку сторінку запит
        // отримуємо з сервісу інфо щодо товару по його айді
          this.ProductService.getCurrentProduct(this.urlId)
          // запит по всі категорії і по айді продукту знайти ім'я категорії і субкатегорії
          this.apiService.getAllCategories().subscribe({
            next: response => {
              response.find((category: any) => {
                category.subCategories.find((sub: any) => {
                  sub.products.find((prod: any) => {
                    if (prod._id === this.urlId) {
                      this.category = category
                      this.subCategory = sub
                    }
                  })
                })
              })
            },
            error: err => console.log(err)
          })
      } else {
        this.baseView = false
      }
    })
  }
 
}
