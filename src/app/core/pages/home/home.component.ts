import { Component, HostListener } from '@angular/core';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { Slide } from 'src/app/shared/components/carousel/carousel.component';
import { ApiService } from '../../services/api.service';
import { ProductService } from 'src/app/product/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {
  data!: any
  
  constructor(public modalService: ModalService, public productService: ProductService, public apiService: ApiService) {}

  @HostListener('window:resize', ['$event'])
  onResize() {
    if (window.innerWidth < 700) {
      this.productService.setValueSlice(2)
    }
  }

  ngOnInit() {
    this.apiService.getAllCategories().subscribe({
      next: (data) => {this.data = data},
      error: (err) => {console.log(err)}
    })
    this.productService.getSomeProducts()
  }


  slides: Slide[] = [
      {url: '../../../../assets/slide1.jpg'},
      {url: '../../../../assets/slide2.jpg'},
      {url: '../../../../assets/slide3.jpg'},
      {url: '../../../../assets/slide4.jpg'},
      {url: '../../../../assets/slide5.jpg'},
      {url: '../../../../assets/slide6.jpg'},
  ]

  openDialog() {
    this.modalService.closeDialog()
    this.modalService.openDialog('login')
  }
}
