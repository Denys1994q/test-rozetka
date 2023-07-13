import { Component, Input } from '@angular/core';

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

  getPriceObject(prod: any) {
    return prod.searchStatus.find((status: any) => status.searchPosition === 'price').option
  }

  setshowExtendedCard(i: number) {
    this.activeIndex = i
  }

  hideExtendedCard() {
    this.activeIndex = false
  }

}
