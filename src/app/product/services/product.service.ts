import { Injectable } from '@angular/core';
import { categories } from 'src/app/data';
import { SearchResultsService } from 'src/app/search/services/search-results.service';
import { ApiService } from 'src/app/core/services/api.service';
import { ProductInterface } from 'src/app/core/services/api-response-types';
import { CommentsService } from './comments.service';

@Injectable({ providedIn: 'root' })

export class ProductService {
    tab: number = 0
    tabs: any = []
    category!: any 
    subCategory!: any
    // весь продукт 
    product!: any
    // ціна 
    price!: any
    // статус продажу
    sellStatus!: any
    // продавець
    seller!: any
    // рейтинг
    raiting: number = 0

    // нові, улюблені, рекомендовані продукти
    newProds: ProductInterface[] = []
    moreProds: ProductInterface[] = []
    recommendedProds: ProductInterface[] = []
    // знайдені продукти
    foundedProducts: any = []
    // 
    loading: boolean = false

    constructor(
      private CommentsService: CommentsService, 
      private apiService: ApiService) 
    {}

    setValueSlice(newValue: number) {
      this.newProds = categories[0].subCategories[0].products.slice(0, newValue);
      this.moreProds = categories[1].subCategories[0].products.slice(0, newValue);
      this.recommendedProds = categories[2].subCategories[0].products.slice(0, newValue);
    }

    // нові, улюблені, рекомендовані товари 
    getSomeProducts() {
      this.apiService.getSomeProducts().subscribe({
        next: (response) => {
          this.newProds = [response[1], response[20], response[21], response[9], response[11], response[13], response[17], response[19]] 
          this.moreProds = [response[2], response[4], response[6], response[8], response[10], response[12], response[14], response[16]] 
          this.recommendedProds = [response[3], response[18], response[5], response[7], response[22], response[23], response[0] ] 
        },
        error: err => console.log(err)
      })
    }

    getCurrentProduct(id: string, urlId?: any) {
      this.apiService.getOneProduct(id).subscribe({
        next: (response) => {
          this.product = response
          this.setProductPrice()
          this.CommentsService.setComments(this.product.reviews_data)
          if (this.product.video) {
            this.tabs = [
              { name: 'Усе про товар', link: '' },
              { name: 'Характеристики', link: 'characteristics' },
              { name: 'Відгуки', link: 'comments' },
              { name: 'Фото', link: 'photos' },
              { name: 'Відео', link: 'video' }
            ]
          } else {
            this.tabs = [
              { name: 'Усе про товар', link: '' },
              { name: 'Характеристики', link: 'characteristics' },
              { name: 'Відгуки', link: 'comments' },
              { name: 'Фото', link: 'photos' }
            ]
          }
          this.setProductRaiting()
          this.checkActiveTab(urlId)
        },
        error: err => console.log(err)
      })
    }

    checkActiveTab(urlId: any) {
      this.tabs.map((tab: any, index: any) => {
        if (tab && tab.link === urlId) {
            this.setTab(index)
        }
    })
    }

    setProductPrice() {
      this.price = this.product.searchStatus.find((status: any) => status.searchPosition === 'price').option
      this.sellStatus = this.product.searchStatus.find((status: any) => status.searchPosition === 'sell_status').option
      this.seller = this.product.searchStatus.find((status: any) => status.searchPosition === 'seller').option
    }

    setProductRaiting() {
      let sum = 0
      this.product.reviews_data.map((review: any) => {
        sum += review.rating
        this.raiting = sum / this.product.reviews_data.length
      })
    }

    findProduct(name: string): any {
      this.resetFoundedProducts()
      this.loading = true
      this.apiService.getAllProducts().subscribe({
        next: products => {
          products.map((prod: any) => {
              this.loading = false
                if (prod.title.toLowerCase().includes(name.toLowerCase())) {
                  this.foundedProducts.push(prod)
                }
          })
        },
        error: err => console.log(err)
      })
    }

    resetFoundedProducts() {
      this.foundedProducts = []
    }

    setCategory(category: any) {
      this.category = category
    }

    setSubcategory(subcategory: any) {
      this.subCategory = subcategory
    }

    setTab(i: number) {
      this.tab = i
    }
    
}