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
        {label: '2E', id: '12321'},
        {label: 'Epson', id: '12346'},
        {label: 'HP', id: '12347'},
        {label: 'Agent', id: '12349'},
        {label: 'Canon', id: '12344'},
        {label: 'ColorWay', id: '12345'},
        {label: 'Magic', id: '12348'},
        {label: 'Barva', id: '12343'},
        {label: 'HiTi', id: '1234112'},
        {label: 'Aver', id: '12341122'},
        {label: 'Barva', id: '12343'},
        {label: 'HiTi', id: '1234112'},
        {label: 'Aurora', id: '123411222'},
      ]
    },
    // {
    //   title: 'Ціна',
    //   optionsNumber: 2,
    // },
    {
      title: 'Готовий до відправлення',
      options: [
        {label: 'Готовий до відправлення', id: '123233'},
      ]
    },
    {
      title: 'Товари з акціями',
      options: [
        {label: 'Акція', id: '12323311'},
      ]
    },
    {
      title: 'Програма лояльності',
      options: [
        {label: 'З бонусами', id: '12323422'},
      ]
    },
    {
      title: 'Новий - б/в',
      options: [
        {label: 'Новий', id: '12323534'},
        {label: 'Б/в', id: '123235543'},
      ]
    },
        {
      title: 'Статус товару',
      options: [
        {label: 'Немає в наявності', id: '123236'},
        {label: 'Є в наявності', id: '123237'},
        {label: 'Закінчився', id: '123238'},
        {label: 'Закінчується', id: '123239'},
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
