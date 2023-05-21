import { Component } from '@angular/core';

@Component({
  selector: 'app-product-photos',
  templateUrl: './product-photos.component.html',
  styleUrls: ['./product-photos.component.sass']
})
export class ProductPhotosComponent {

  photos = [
    {url: '../../../assets/products/slide1.webp'},
    {url: '../../../assets/products/slide2.webp'},
    {url: '../../../assets/products/slide3.webp'},
    {url: '../../../assets/products/slide4.webp'},
    {url: '../../../assets/products/slide5.webp'},
    {url: '../../../assets/products/slide6.webp'},
    {url: '../../../assets/products/slide7.webp'},
    {url: '../../../assets/products/slide8.webp'},
    {url: '../../../assets/products/slide9.webp'},
    {url: '../../../assets/products/slide10.webp'},
    {url: '../../../assets/products/slide11.webp'},
    {url: '../../../assets/products/slide12.webp'},
  ]

}
