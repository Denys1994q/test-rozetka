import { Component } from '@angular/core';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { Slide } from 'src/app/shared/components/carousel/carousel.component';
import { categories } from 'src/app/data';
import { ProductService } from 'src/app/product/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {
  data!: any
  
  constructor(private modalService: ModalService, public ProductService: ProductService) {}

  ngOnInit() {
    this.data = categories
  }

  onCardsChange(type: string) {
    this.ProductService.setNewProds(type)
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
