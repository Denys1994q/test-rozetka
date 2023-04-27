import { Component } from '@angular/core';
import { Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-products-modal',
  templateUrl: './products-modal.component.html',
  styleUrls: ['./products-modal.component.sass']
})

export class ProductsModalComponent {
  products: any
  activeCategoryIndex: number = 0

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }
    
  ngOnInit() {
    this.products = this.data
  }

  onMouseEnter(i: any) {
    this.activeCategoryIndex = i
  }
}
