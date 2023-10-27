import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-video',
  templateUrl: './product-video.component.html',
  styleUrls: ['./product-video.component.sass']
})
export class ProductVideoComponent {

    constructor(public ProductService: ProductService) {}

    ngOnInit() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

}
