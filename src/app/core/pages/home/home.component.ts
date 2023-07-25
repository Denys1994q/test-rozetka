import { Component } from '@angular/core';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { Slide } from 'src/app/shared/components/carousel/carousel.component';
import { categories } from 'src/app/data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {
  data!: any
  
  constructor(private modalService: ModalService) {}

  ngOnInit() {
    this.data = categories

    // if (p1.length > s || p2.length > s) {return}

    // if (s === '') {
    //   return true;
    // }
  
    // if (
    //   (p1.length > 0 && s[0] === p1[0] && stringChecker(s.slice(1), p1.slice(1), p2)) ||
    //   (p2.length > 0 && s[0] === p2[0] && stringChecker(s.slice(1), p1, p2.slice(1)))
    // ) {
    //   return true;
    // }
  
    // return false;

  }
  

  slides: Slide[] = [
      {url: '../../../../assets/slide1.jpg'},
      {url: '../../../../assets/slide2.jpg'},
      {url: '../../../../assets/slide3.jpg'},
      {url: '../../../../assets/slide4.jpg'},
      {url: '../../../../assets/slide5.jpg'},
      {url: '../../../../assets/slide6.jpg'},
  ]

  discounts = {
    category: 'Акційні пропозиції', 
    products: [
      {
        title: 'Навушники Defunc True Music TWS Black', 
        image: '../../../../assets/defunc.webp', 
        price: {old: 1199, new: 999}
      },
      {
        title: 'Навушники Defunc True Music TWS Black', 
        image: '../../../../assets/defunc.webp', 
        price: {old: null, new: 899}
      },
  ]}    

  newProds = {
    category: 'Гарячі новинки', 
    products: [
      {
        title: 'Набір для прибирання', 
        image: '../../../../assets/vileda.webp', 
        price: {old: 2405, new: 1539}
      },
      {
        title: 'Шорти AVRORA сірі', 
        image: '../../../../assets/shorts.webp', 
        price: {old: 480, new: 229}
      },
      {
        title: 'Ноутбук ASUS ROG', 
        image: '../../../../assets/asus_rog.webp', 
        price: {old: null, new: 82199}
      },
    ]}    

  

  openDialog() {
    this.modalService.closeDialog()
    this.modalService.openDialog('login')
  }
}
