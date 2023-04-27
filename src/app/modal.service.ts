import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {MatDialog} from '@angular/material/dialog';
import { ProductsModalComponent } from './components/products-modal/products-modal.component';
import { LoginModalComponent } from './components/login-modal/login-modal.component';
import { RegisterModalComponent } from './components/register-modal/register-modal.component';

@Injectable({ providedIn: 'root' })

export class ModalService {
    openedDialog:Subject<any> = new Subject<any>();

    constructor(public dialog: MatDialog) {}

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
    ]

    openDialog(variant: string) {
        let modalVariant: any
        let modalStyles: Object = {}
        switch (variant) {
            case 'product': 
                if (variant == 'product') {
                    modalVariant = ProductsModalComponent
                    modalStyles = {
                      width: '90vw',
                      maxWidth: '90vw',
                      minHeight: '500px',
                      data: this.data
                    }
                } 
                break
            case 'login': 
                if (variant == 'login') {
                    modalVariant = LoginModalComponent
                    modalStyles = {
                      panelClass: 'modal-login',
                    }
                }
                break
            case 'register': 
                if (variant == 'register') {
                    modalVariant = RegisterModalComponent
                    modalStyles = {
                      panelClass: 'modal-register',
                      // minHeight: '500px',
                    }
                }
                break
        }
        this.openedDialog.next(variant)
        const dialogRef = this.dialog.open(modalVariant, modalStyles);
        dialogRef.afterClosed().subscribe(result => {
          this.openedDialog.next(false)
          console.log(`Dialog result: ${result}`);
        });
      }

      closeDialog() {
        this.dialog.closeAll()
      }
}