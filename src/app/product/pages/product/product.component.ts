import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})
export class ProductComponent {
  allProducts!: boolean

  constructor(private router: Router ) {
    router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    )
      .subscribe((event: any) => {
        if (event.url == '/prod/1') {
          this.allProducts = true
        } else {
          this.allProducts = false
        }
      });
  }
  
  routes = [
    {name: 'Усе про товар', link: ''}, 
    {name: 'Характеристики', link: 'characteristics'},
    {name: 'Відгуки', link: 'comments'},
    {name: 'Відео', link: 'video'},
    {name: 'Фото', link: 'photos'},
  ]

  price = {old: 1199, new: 999}

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
        price: {old: null, new: 82199}
      },
    ]}    
 
}

// в кожного товару на беку має бути рядок куди він відноситься, яка група, підгрупа, категорія і тд щоб цю штуку передавати в бредкрамбс