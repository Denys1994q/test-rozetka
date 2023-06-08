import { Component } from '@angular/core';

@Component({
  selector: 'app-subcategory-screen',
  templateUrl: './subcategory-screen.component.html',
  styleUrls: ['./subcategory-screen.component.sass']
})
export class SubcategoryScreenComponent {
  btns: any = [{icon: 'view_module'}, {icon: 'apps'}]
  activeBtn: number = 0

  // дату нормальну зробити для сторінки... не завжди мають генерувати чекбокси, іноді як в ціні, хоча в основному чекбокси
  data=[
    {
      title: 'Продавець',
      options: [
        {label: 'Rozetka', id: '1232'},
        {label: 'Інші', id: '1234'},
      ]
    },
    {
      title: 'Бренд',
      options: [
        {label: '2E', id: '123211'},
        {label: 'Epson', id: '123462'},
        {label: 'HP', id: '123473'},
        {label: 'Agent', id: '123494'},
        {label: 'Abentik', id: '12349434'},
        {label: 'Canon', id: '123445'},
        {label: 'ColorWay', id: '123456'},
        {label: 'Magic', id: '1234867'},
        {label: 'Barva', id: '123438'},
        {label: 'HiTi', id: '12341129'},
        {label: 'Aver', id: '1234112211'},
        {label: 'Bers', id: '1234312'},
        {label: 'HiSi', id: '123411213'},
        {label: 'Aurora', id: '12341122214'},
      ]
    },
    {
      title: 'Ціна',
      options: {
        start: 1,
        end: 1000
      }
    },
    {
      title: 'Готовий до відправлення',
      options: [
        {label: 'Готовий до відправлення', id: '123233as'},
      ]
    },
    {
      title: 'Товари з акціями',
      options: [
        {label: 'Акція', id: '12323311das'},
      ]
    },
    {
      title: 'Програма лояльності',
      options: [
        {label: 'З бонусами', id: '12323422w'},
      ]
    },
    {
      title: 'Новий - б/в',
      options: [
        {label: 'Новий', id: '12323534ds'},
        {label: 'Б/в', id: '123235543qwwiyu'},
      ]
    },
        {
      title: 'Статус товару',
      options: [
        {label: 'Немає в наявності', id: '123236iuyi'},
        {label: 'Є в наявності', id: '123237nj'},
        {label: 'Закінчився', id: '123238vcx'},
        {label: 'Закінчується', id: '123239xzx'},
      ]
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
