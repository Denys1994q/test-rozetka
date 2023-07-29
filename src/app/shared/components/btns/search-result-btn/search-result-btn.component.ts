import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SearchResultsService } from 'src/app/search/services/search-results.service';
import { ProductService } from 'src/app/product/services/product.service';

@Component({
  selector: 'app-search-result-btn',
  templateUrl: './search-result-btn.component.html',
  styleUrls: ['./search-result-btn.component.sass']
})
export class SearchResultBtnComponent {
  @Input() cancelBtn: boolean = false
  @Input() text!: string 

  constructor(private SearchResultsService: SearchResultsService, private ProductService: ProductService) {}

  cancelAll() {
    if (this.ProductService.comments) {
      this.ProductService.resetSortType()
      this.ProductService.filterProdComments()
    }
    this.SearchResultsService.removeAll()
  }

  cancelOne(input: string) {
    // якщо запускаємо сервіс зі сторінки відгуків продукту, розділу фільтрів 
    if (input.indexOf('Оцінка користувачів') > -1) {
      this.ProductService.resetSortType()
      this.ProductService.filterProdComments()
    }
    this.SearchResultsService.removeOne(input)
  }
}
