import { Component } from '@angular/core';
import { Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ModalService } from 'src/app/shared/components/modal/modal.service';

@Component({
  selector: 'app-products-modal',
  templateUrl: './products-modal.component.html',
  styleUrls: ['./products-modal.component.sass']
})

// де робити запити по дані? На сторінці, звідки відкривається модалка і передавати в модалку дані. Чи в самій вже модалці, яка тоді спочатку відкриється пустою, піде запит, спінер умовно і тоді дані
export class ProductsModalComponent {
  activeCategoryIndex: number = 0

  products = [
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
  // constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }
    
  // ngOnInit() {
  //   this.products = this.data
  // }

  onMouseEnter(i: any) {
    this.activeCategoryIndex = i
  }
  
  closeDialog() {
    this.modalService.closeDialog()
  }

}

