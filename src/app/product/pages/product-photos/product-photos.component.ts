import { Component, Input } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-photos',
  templateUrl: './product-photos.component.html',
  styleUrls: ['./product-photos.component.sass']
})
export class ProductPhotosComponent {
    photos!: any

    constructor(public ProductService: ProductService) {}

    ngOnInit() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
        this.photos = this.ProductService.product.images.filter((image: any) => image.url)
    }

}
