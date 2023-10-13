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
      {url: '../../../../assets/slide1.webp'},
      {url: '../../../../assets/slide2.webp'},
      {url: '../../../../assets/slide3.webp'},
      {url: '../../../../assets/slide4.webp'},
      {url: '../../../../assets/slide5.webp'},
      {url: '../../../../assets/slide6.webp'},
  ]

  openDialog() {
    this.modalService.closeDialog()
    this.modalService.openDialog('login')
  }
}
