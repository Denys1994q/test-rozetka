import { Component } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import {filter} from 'rxjs/operators';
import { productsRoutes } from 'src/app/app-routing.module';
// services
import { ProductService } from '../../services/product.service';
import { SearchResultsService } from 'src/app/search/services/search-results.service';
import { categories } from 'src/app/data';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})
export class ProductComponent {
  baseView!: boolean
  product!: any
  price!: any
  sellStatus!: string
  seller!: string
  video!: any[]
  routes!: any
  urlId!: any

  constructor(private router: Router, public route:ActivatedRoute, public ProductService: ProductService, public SearchResultsService: SearchResultsService ) {}

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
      if (productsRoutes.find(route => route.id == this.urlId && (route.id.toString().length + route.title.length == this.router.url.length-2))) {
        this.baseView = true
      } else {
        this.baseView = false
      }
      // отримуємо з сервісу інфо щодо товару по його айді
      this.ProductService.getCurrentProduct(this.urlId)
      // для верстки отримуємо додаткову інфо щодо товару (ціна, статус продажі, продавець, чи є відео)
      this.price = this.ProductService.currentProduct.searchStatus.find((status: any) => status.searchPosition === 'price').option
      this.sellStatus = this.ProductService.currentProduct.searchStatus.find((status: any) => status.searchPosition === 'sell_status').option
      this.seller = this.ProductService.currentProduct.searchStatus.find((status: any) => status.searchPosition === 'seller').option
      this.video = this.ProductService.currentProduct.video
        
      // створюємо роути у форматі табів 
      const allRoutes = [
        {name: 'Усе про товар', link: ''}, 
        {name: 'Характеристики', link: 'characteristics'},
        {name: 'Відгуки', link: 'comments'},
        {name: 'Фото', link: 'photos'},
        this.video ? {name: 'Відео', link: 'video'} : null ,
      ]
      this.routes = allRoutes.filter(route => route)
  
      // для юрл сторінки товару
      let categoryId!: string;
      categories.map(item => {
        item.subCategories.map(sub => {
          sub.products.map((prod: any) => {
            if (prod.id == this.urlId) {
              categoryId = sub.id
            }
          })
        })
      })
      this.SearchResultsService.getCurrentCategory(categoryId)
    })
  }


  newProds = {
    category: 'Гарячі новинки', 
    products: [
      {
        title: 'Набір для прибирання', 
        image: '../../../assets/vileda.webp', 
        price: {old: 2405, new: 1539}
      },
      {
        title: 'Шорти AVRORA сірі', 
        image: '../../../assets/shorts.webp', 
        price: {old: 480, new: 229}
      },
      {
        title: 'Ноутбук ASUS ROG', 
        image: '../../../assets/asus_rog.webp', 
        price: {old: null, new: 82199}
      },
    ]}    
 
}

// в кожного товару на беку має бути рядок куди він відноситься, яка група, підгрупа, категорія і тд щоб цю штуку передавати в бредкрамбс