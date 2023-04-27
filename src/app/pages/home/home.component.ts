import { Component } from '@angular/core';
import { ModalService } from 'src/app/modal.service';

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

  constructor(private modalService: ModalService) {}

  openDialog() {
    this.modalService.closeDialog()
    this.modalService.openDialog('login')
  }
}
