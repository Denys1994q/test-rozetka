import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.sass']
})
export class CardsComponent {
  discounts = {
    category: 'Акційні пропозиції', 
    products: [
      {
        title: 'Навушники Defunc True Music TWS Black', 
        image: '../../../assets/defunc.webp', 
        price: {old: 1199, new: 999}
      },
      {
        title: 'Навушники Defunc True Music TWS Black', 
        image: '../../../assets/defunc.webp', 
        price: {new: 899}
      },
  ]}    

  newProds = {
    category: 'Гарячі новинки', 
    products: [
      {
        title: 'Набір для прибирання', 
        image: '../../../assets/vileda.webp', 
        price: {old: 2405, new: 1539}
      },
      {
        title: 'Шорти AVRORA сірі', 
        image: '../../../assets/shorts.webp', 
        price: {old: 480, new: 229}
      },
      {
        title: 'Ноутбук ASUS ROG', 
        image: '../../../assets/asus_rog.webp', 
        price: {new: '82 199'}
      },
  ]}    

}
