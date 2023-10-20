import { Component } from '@angular/core';
import { ProductService } from 'src/app/product/services/product.service';

@Component({
  selector: 'app-cabinet-wishlist',
  templateUrl: './cabinet-wishlist.component.html',
  styleUrls: ['./cabinet-wishlist.component.sass']
})
export class CabinetWishlistPage {

  constructor(public productService: ProductService) {}

  ngOnInit() {
  }

}