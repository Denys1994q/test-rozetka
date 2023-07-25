import { Component } from '@angular/core';
import { SearchResultsService } from 'src/app/search/services/search-results.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-middle-category',
  templateUrl: './middle-category.component.html',
  styleUrls: ['./middle-category.component.sass']
})

export class MiddleCategoryComponent {
    activeBtn!: string
    productsNotAvailable: any = []
    priceDataStart!: any
    priceDataEnd!: any

    constructor(public SearchResultsService: SearchResultsService, public router: Router, public route:ActivatedRoute) {}

    // тут мав би йти запит на сервер по цьому id
    ngOnInit(): void {
        this.route.url.subscribe(route => {
          // console.log('hello from middleCategoryPage')
            window.scrollTo({
              top: 1000,
              behavior: "smooth"
            });
            const lastLetterBeforeId = this.router.url.lastIndexOf('/')
            const id = this.router.url.slice(lastLetterBeforeId+1, lastLetterBeforeId+this.router.url.length-1)
            this.SearchResultsService.getCurrentCategory(id)
            this.SearchResultsService.sortData(this.SearchResultsService.sortType)
            // масив айді продуктів, яких немає в наявності 
            this.findUnavailableProducts()
            // якщо є початковий інпут 
            if (this.SearchResultsService.baseInput) {
              this.SearchResultsService.addInput(this.SearchResultsService.baseInput)
            }
            this.priceDataStart = this.SearchResultsService.searchParams.find((it: any) => it.searchPosition === 'price').options[0].start
            this.priceDataEnd = this.SearchResultsService.searchParams.find((it: any) => it.searchPosition === 'price').options[0].end
      })
    }

    findUnavailableProducts() {
      const products = this.SearchResultsService.allCategories[this.SearchResultsService.currentCategoryIndex].subCategories[this.SearchResultsService.currentSubcategoryIndex].products
      products.map((prod: any, i: any) => {
        const status = prod.searchStatus.find((searchStatus: any) => searchStatus.searchPosition === 'sell_status')
        if (status.option === 'Немає в наявності') {
          this.productsNotAvailable.push(prod.id)
        }
      })
    }
  
    onSearchPanelChange(event: any) {
      this.SearchResultsService.addInput(event)
    }

    onFilterChange(event: any) {
        console.log(event)
        this.SearchResultsService.sortData(event)
    }

    onBtnsGridPanelChange(event: string) {
        this.activeBtn = event
    }

}

