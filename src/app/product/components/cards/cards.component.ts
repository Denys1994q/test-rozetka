import { Component, Input, Output, HostListener, EventEmitter } from '@angular/core';
import { ProductInterface } from 'src/app/core/services/api-response-types';

interface Cards {
  category?: string,
  products: ProductInterface[] 
}

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.sass']
})
export class CardsComponent {
  activeIndex!: number | boolean
  @Input() full: boolean = false 
  @Input() data!: Cards
  @Input() size: string = 'small'
  @Input() notAvailableProducts!: string[]
  @Input() withCheckbox: boolean = false
  showBtn: boolean = true
  raiting!: any
  endVal: number = 5
  @Output() cardsChange = new EventEmitter<any>();

  @HostListener('window:resize', ['$event'])
  onResize() {
    if (window.innerWidth < 700) {
      this.endVal = 2
    }
  }

  getPriceObject(prod: any) {
      return prod.searchStatus.find((status: any) => status.searchPosition === 'price').option
  }

  getRaiting(prod: any) {
    let sum = 0
    let res;
      prod.reviews_data.map((review: any) => {
        sum += review.rating
        res = sum / prod.reviews_data.length
      })
    return res
  }

  setshowExtendedCard(i: number) {
    this.activeIndex = i
  }

  hideExtendedCard() {
    this.activeIndex = false
  }

  showMoreCards(type: string) {
    this.endVal = this.endVal + this.data.products.length
    this.cardsChange.emit(type)
    this.showBtn = false
  }

  onCheckboxChange(e: any) {

  }

}
