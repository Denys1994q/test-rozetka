import { Component } from '@angular/core';
import { Slide } from 'src/app/shared/components/carousel/carousel.component';
import { CategoryItem } from 'src/app/search/components/category-card/category-card.component';

type Brend = {
  img: string
}
interface ICategory {
  title: string,
  banners: Slide[],
  popular: CategoryItem[],
  brends: Brend[],
  list: CategoryItem[]
}

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.sass']
})
export class CategoryComponent {
  category: ICategory = {
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
      {title: 'Мобільні телефони', img: '../../../assets/mobilnye_telefony.jpg'},
      {title: 'Телевізори', img: '../../../assets/televizory.jpg'},
      {title: 'Планшети', img: '../../../assets/planshety.jpg'},
      {title: 'Повербанки та зарядні станції', img: '../../../assets/zaryadnye_stancii.png'}, 
      {title: 'Навушники та аксесуари', img: '../../../assets/naushniki_i_aksessuary.jpg', subitems: ['Навушники', 'Підсилювачі для навушників', 'Аксесуари для навушників' ]}, 
    ]
  }
}
