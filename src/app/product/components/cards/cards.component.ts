import { Component, Input, Output, EventEmitter } from '@angular/core';

interface CardInfo {
  heading: string,
  text: string
}

interface Card {
  title: string,
  image: string,
  image2?: string,
  id?: number,
  engName?: string,
  reviews_data?: any,
  // price: any,
  raiting?: number,
  reviews?: number,
  info?: CardInfo[]
}

interface Cards {
  category?: string,
  products: Card[]
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
  @Input() notAvailableProducts!: any
  showBtn: boolean = true
  raiting!: any
  @Output() cardsChange = new EventEmitter<any>();


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
    this.cardsChange.emit(type)
    this.showBtn = false
  }

}
