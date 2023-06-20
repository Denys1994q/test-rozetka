import { Component } from '@angular/core';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { Slide } from 'src/app/shared/components/carousel/carousel.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {
  data = [
    {category: 'Ноутбуки та комп`ютери', icon: 'laptop', products: [
      {title: 'Ноутбуки', items: ['Asus', 'Acer', 'HP', 'Lenovo', 'Dell', 'Apple Macbook']},
      {title: 'Планшети', items: ['Apple IPad', 'Samsung', 'Lenovo', 'Xiaomi']},
      {title: 'Комплектуючі', items: ['Відеокарти', 'SSD', 'Процесори', 'Жорсткі диски']},
      {title: 'Офісна техніка', items: ['Принтери', 'Шредери', 'Телефони']}
    ]},    
    {category: 'Смартфони, ТВ і електроніка', icon: 'smartphone', products: [
      {title: 'Телефони', items: ['Apple', 'Samsung', 'Xiaomi', 'Nokia']},
      {title: 'Телевізори та аксесуари', items: ['LG', 'Samsung', 'Xiaomi']},
    ]},  
    {category: 'Товари для геймерів', icon: 'sports_esports', products: [
      {title: 'PlayStation', items: ['Ігрові приставки PlayStation5', 'Ігрові приставки PlayStation4', 'Гарнітури PlayStation']},
      {title: 'Ігрові приставки XBox', items: ['Ігри для XBox']},
    ]},  
    {category: 'Ноутбуки та комп`ютери', icon: 'laptop', products: [
      {title: 'Ноутбуки', items: ['Asus', 'Acer', 'HP', 'Lenovo', 'Dell', 'Apple Macbook']},
      {title: 'Планшети', items: ['Apple IPad', 'Samsung', 'Lenovo', 'Xiaomi']},
      {title: 'Комплектуючі', items: ['Відеокарти', 'SSD', 'Процесори', 'Жорсткі диски']},
      {title: 'Офісна техніка', items: ['Принтери', 'Шредери', 'Телефони']}
    ]},    
    {category: 'Смартфони, ТВ і електроніка', icon: 'smartphone', products: [
      {title: 'Телефони', items: ['Apple', 'Samsung', 'Xiaomi', 'Nokia']},
      {title: 'Телевізори та аксесуари', items: ['LG', 'Samsung', 'Xiaomi']},
    ]},  
    {category: 'Товари для геймерів', icon: 'sports_esports', products: [
      {title: 'PlayStation', items: ['Ігрові приставки PlayStation5', 'Ігрові приставки PlayStation4', 'Гарнітури PlayStation']},
      {title: 'Ігрові приставки XBox', items: ['Ігри для XBox']},
    ]},  
    {category: 'Ноутбуки та комп`ютери', icon: 'laptop', products: [
      {title: 'Ноутбуки', items: ['Asus', 'Acer', 'HP', 'Lenovo', 'Dell', 'Apple Macbook']},
      {title: 'Планшети', items: ['Apple IPad', 'Samsung', 'Lenovo', 'Xiaomi']},
      {title: 'Комплектуючі', items: ['Відеокарти', 'SSD', 'Процесори', 'Жорсткі диски']},
      {title: 'Офісна техніка', items: ['Принтери', 'Шредери', 'Телефони']}
    ]},    
    {category: 'Смартфони, ТВ і електроніка', icon: 'smartphone', products: [
      {title: 'Телефони', items: ['Apple', 'Samsung', 'Xiaomi', 'Nokia']},
      {title: 'Телевізори та аксесуари', items: ['LG', 'Samsung', 'Xiaomi']},
    ]},  
    {category: 'Товари для геймерів', icon: 'sports_esports', products: [
      {title: 'PlayStation', items: ['Ігрові приставки PlayStation5', 'Ігрові приставки PlayStation4', 'Гарнітури PlayStation']},
      {title: 'Ігрові приставки XBox', items: ['Ігри для XBox']},
    ]},  
  ]

  slides: Slide[] = [
      {url: '../../../../assets/slide1.jpg'},
      {url: '../../../../assets/slide2.jpg'},
      {url: '../../../../assets/slide3.jpg'},
      {url: '../../../../assets/slide4.jpg'},
      {url: '../../../../assets/slide5.jpg'},
      {url: '../../../../assets/slide6.jpg'},
  ]

  discounts = {
    category: 'Акційні пропозиції', 
    products: [
      {
        title: 'Навушники Defunc True Music TWS Black', 
        image: '../../../../assets/defunc.webp', 
        price: {old: 1199, new: 999}
      },
      {
        title: 'Навушники Defunc True Music TWS Black', 
        image: '../../../../assets/defunc.webp', 
        price: {old: null, new: 899}
      },
  ]}    

  newProds = {
    category: 'Гарячі новинки', 
    products: [
      {
        title: 'Набір для прибирання', 
        image: '../../../../assets/vileda.webp', 
        price: {old: 2405, new: 1539}
      },
      {
        title: 'Шорти AVRORA сірі', 
        image: '../../../../assets/shorts.webp', 
        price: {old: 480, new: 229}
      },
      {
        title: 'Ноутбук ASUS ROG', 
        image: '../../../../assets/asus_rog.webp', 
        price: {old: null, new: 82199}
      },
    ]}    

  constructor(private modalService: ModalService) {}

  openDialog() {
    this.modalService.closeDialog()
    this.modalService.openDialog('login')
  }
}
