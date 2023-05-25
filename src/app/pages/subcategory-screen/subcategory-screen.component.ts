import { Component } from '@angular/core';

@Component({
  selector: 'app-subcategory-screen',
  templateUrl: './subcategory-screen.component.html',
  styleUrls: ['./subcategory-screen.component.sass']
})
export class SubcategoryScreenComponent {
  btns: any = [{icon: 'view_module'}, {icon: 'apps'}]
  activeBtn: number = 0
  data=[
    {
      title: 'Продавець',
      optionsNumber: 2,
    },
    {
      title: '2',
      optionsNumber: 2,
    },
    {
      title: '3',
      optionsNumber: 2,
    },
    {
      title: '4',
      optionsNumber: 2,
    }
  ]
  
  chooseBtn(index: number) {
    this.activeBtn = index
  }

  // напевно тут субайтемс бути не може впринципі, бо це нижній рівень
  category = {
    title: 'Смартфони, ТВ і електроніка',
    banners: [
      {url: '../../../assets/smartphones_slide1.jpg'},
      {url: '../../../assets/smartphones_slide2.jpg'},
      {url: '../../../assets/smartphones_slide3.jpg'},
      {url: '../../../assets/smartphones_slide4.jpg'},
    ],
    popular: [
      {title: 'Apple IPhone', img: '../../../assets/apple_iphone.jpg'}, 
      {title: 'Смартфони Samsung S-серії', img: '../../../assets/samsung_s.jpg'}, 
      {title: 'Смартфони Samsung M-серії', img: '../../../assets/samsung_m.jpg'}, 
      {title: 'Apple Watch', img: '../../../assets/apple_watch.jpg'}, 
    ],
    brends: [
      {img: '../../../assets/apple.jpg'},
      {img: '../../../assets/samsung.jpg'},
      {img: '../../../assets/lg.jpg'},
    ],
    list: [
      {title: 'Тюнери', img: '../../../assets/tuner.jpg'},
      {title: 'Ресивери', img: '../../../assets/recivers.webp'},
    ]
  }
}
