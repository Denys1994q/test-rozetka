import { Component, HostListener } from '@angular/core';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { Slide } from 'src/app/shared/components/carousel/carousel.component';
import { ApiService } from '../../services/api.service';
import { ProductService } from 'src/app/product/services/product.service';
import { CartService } from 'src/app/cart/services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {
  data!: any
  
  constructor(
    public modalService: ModalService, 
    public productService: ProductService, 
    public apiService: ApiService,
    public cartService: CartService) 
  {}

  @HostListener('window:resize', ['$event'])
  onResize() {
    if (window.innerWidth < 700) {
      this.productService.setValueSlice(2)
    }
  }

  ngOnInit() {
    this.apiService.getAllCategories().subscribe({
      next: (data) => this.data = data,
      error: (err) => console.log(err)
    })
    this.productService.getSomeProducts()
    this.cartService.getCart()
  }


  slides: Slide[] = [
      {url: 'https://res.cloudinary.com/dw60kllwn/image/upload/v1697355535/slide1_jutdqd.webp'},
      {url: 'https://res.cloudinary.com/dw60kllwn/image/upload/v1697355660/slide2_f9o8yp.webp'},
      {url: 'https://res.cloudinary.com/dw60kllwn/image/upload/v1697355710/slide3_owiou0.webp'},
      {url: 'https://res.cloudinary.com/dw60kllwn/image/upload/v1697355772/slide4_sybqv5.webp'},
      {url: 'https://res.cloudinary.com/dw60kllwn/image/upload/v1697355772/slide5_yj13bw.webp'},
      {url: 'https://res.cloudinary.com/dw60kllwn/image/upload/v1697355772/slide6_bcrbch.webp'},
  ]

  openDialog() {
    this.modalService.closeDialog()
    this.modalService.openDialog('login')
  }
}
