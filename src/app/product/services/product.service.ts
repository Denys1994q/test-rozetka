import { Injectable } from '@angular/core';
import { categories } from 'src/app/data';
import { SearchResultsService } from 'src/app/search/services/search-results.service';
import { ApiService } from 'src/app/core/services/api.service';
import { ProductInterface } from 'src/app/core/services/api-response-types';
import { CommentsService } from './comments.service';

@Injectable({ providedIn: 'root' })

export class ProductService {
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
    // відео
    prodWithVideo: boolean = false
    // нові, улюблені, рекомендовані продукти
    newProds: ProductInterface[] = []
    moreProds: ProductInterface[] = []
    recommendedProds: ProductInterface[] = []
    // знайдені продукти
    foundedProducts: any = []

    constructor(private CommentsService: CommentsService, private apiService: ApiService) {}

    setValueSlice(newValue: number) {
      this.newProds = categories[0].subCategories[0].products.slice(0, newValue);
      this.moreProds = categories[1].subCategories[0].products.slice(0, newValue);
      this.recommendedProds = categories[2].subCategories[0].products.slice(0, newValue);
    }

    // нові, улюблені, рекомендовані товари 
    getSomeProducts() {
      this.apiService.getAllProducts().subscribe({
        next: (response) => {
          this.newProds = [response[3], response[5], response[53], response[25], response[11], response[13], response[85], response[105], response[99], response[88]] 
          this.moreProds = [response[4], response[6], response[54], response[26], response[12], response[14], response[86], response[66]] 
          this.recommendedProds = [response[2], response[4], response[52], response[24], response[10], response[12], response[84]] 
        },
        error: err => console.log(err)
      })
    }

    getCurrentProduct(id: string) {
      this.apiService.getOneProduct(id).subscribe({
        next: (response) => {
          this.product = response
          this.setProductPrice()
          this.CommentsService.setComments(this.product.reviews_data)
          if (this.product.video) {
            this.prodWithVideo = true
          } else {
            this.prodWithVideo = false
          }
          this.setProductRaiting()
        },
        error: err => console.log(err)
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
      let foundedProduct;
      categories.map(prod => {
        prod.subCategories.map(subcategory => {
          subcategory.products.map((prod: any) => {
            if (prod.title.toLowerCase().includes(name.toLowerCase())) {
              foundedProduct = prod
              this.foundedProducts.push(prod)
            }
          })
        })
      })
      return foundedProduct
    }

    resetFoundedProducts() {
      this.foundedProducts = []
    }
    
}