import { Injectable } from '@angular/core';
import { categories } from 'src/app/data';
import { SearchResultsService } from 'src/app/search/services/search-results.service';

@Injectable({ providedIn: 'root' })

export class ProductService {
    currentProduct!: any
    price!: any
    sellStatus!: any
    seller!: any
    raiting: number = 0
    comments!: any
    sortType: string = 'З фото і відео'

    constructor(private SearchResultsService: SearchResultsService) {}

    getCurrentProduct(id: string) {
        categories.map((category: any) => {
            category.subCategories.map((subcategory: any) => {
              subcategory.products.map((pr: any) => {
                if (pr.id === +id) {
                  this.currentProduct = pr
                  this.price = this.currentProduct.searchStatus.find((status: any) => status.searchPosition === 'price').option
                  this.sellStatus = this.currentProduct.searchStatus.find((status: any) => status.searchPosition === 'sell_status').option
                  this.seller = this.currentProduct.searchStatus.find((status: any) => status.searchPosition === 'seller').option
                  this.comments = [...this.currentProduct.reviews_data] 
                  let sum = 0
                  this.currentProduct.reviews_data.map((review: any) => {
                    sum += review.rating
                    this.raiting = sum / this.currentProduct.reviews_data.length
                  })
                }
              })
            })
          })
    }

    filterProdComments(selectedRaiting?: number) {
      if (selectedRaiting) {
        this.comments = this.currentProduct.reviews_data.filter((review: any) => review.rating === selectedRaiting)
        this.sortProdComments(this.sortType)
      } else {
        this.comments = [...this.currentProduct.reviews_data] 
        this.sortProdComments(this.sortType)
        // скидаємо значення selectedRaitingIndex, яке в іншому сервісі знаходиться 
        this.SearchResultsService.resetRaitingValue()
      }
    }

    sortProdComments(sortType: string) {
      this.sortType = sortType
      if (sortType === 'З фото і відео') {
        this.comments = [...this.comments].sort((a,b) => {
          if ( a.photo){
            return -1;
          }
          if ( b.photo){
            return 1;
          }
          return 0;
        })
      } else if (sortType === 'За датою') {
        this.comments = [...this.comments].sort((a,b) => a.date - b.date)
      } else if (sortType === 'Найкорисніші') {
        this.comments = [...this.comments].sort((a,b) => (b.likes+b.dislikes) - (a.likes+a.dislikes))
      }
    }

    resetSortType() {
      this.sortType = 'З фото і відео'
    }
}