import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-characteristics',
  templateUrl: './product-characteristics.component.html',
  styleUrls: ['./product-characteristics.component.sass']
})
export class ProductCharacteristicsComponent {

  constructor(public ProductService: ProductService ) {}

}
