import { Injectable } from '@angular/core';

import { categories } from 'src/app/data';

@Injectable({ providedIn: 'root' })

export class ProductService {
    currentProduct!: any

    getCurrentProduct(id: string) {
        categories.map((category: any) => {
            category.subCategories.map((subcategory: any) => {
              subcategory.products.map((pr: any) => {
                if (pr.id === +id) {
                  this.currentProduct = pr
                //   this.price = this.product.searchStatus.find((status: any) => status.searchPosition === 'price').option
                //   this.sellStatus = this.product.searchStatus.find((status: any) => status.searchPosition === 'sell_status').option
                //   this.seller = this.product.searchStatus.find((status: any) => status.searchPosition === 'seller').option
                }
              })
            })
          })
    }
}