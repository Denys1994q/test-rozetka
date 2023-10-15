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
    {
      url: 'https://res.cloudinary.com/dw60kllwn/image/upload/v1697368696/1_wr8rfn.jpg',
      url_mobile: 'https://res.cloudinary.com/dw60kllwn/image/upload/v1697368822/1_mobile_kzbdul.jpg'
    },
    {
      url: 'https://res.cloudinary.com/dw60kllwn/image/upload/v1697371220/2_gtpdwv.webp',
      url_mobile: 'https://res.cloudinary.com/dw60kllwn/image/upload/v1697371220/2_mobile_zagv2i.webp'
    },
    {
      url: 'https://res.cloudinary.com/dw60kllwn/image/upload/v1697370141/3_gdtnqf.webp',
      url_mobile: 'https://res.cloudinary.com/dw60kllwn/image/upload/v1697370141/3_mobile_ktmlvj.webp'
    },
  ]

  openDialog() {
    this.modalService.closeDialog()
    this.modalService.openDialog('login')
  }
}
