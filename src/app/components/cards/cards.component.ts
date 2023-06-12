import { Component, Input } from '@angular/core';

interface CardInfo {
  heading: string,
  text: string
}

interface Card {
  title: string,
  image: string,
  image2?: string,
  price: any,
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

  ngOnInit() {

  }

  setshowExtendedCard(i: number) {
    this.activeIndex = i
  }

  hideExtendedCard() {
    this.activeIndex = false
  }

}
