import { Component } from '@angular/core';
import { SearchResultsService } from 'src/app/services/search-results.service';

@Component({
  selector: 'app-subcategory-screen',
  templateUrl: './subcategory-screen.component.html',
  styleUrls: ['./subcategory-screen.component.sass']
})

export class SubcategoryScreenComponent {
    activeBtn!: string

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
        end: 10000
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

    constructor(public SearchResultsService: SearchResultsService) {}
  
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

    goods = {
    products: [
      {
        title: '3D-принтер Neor Professional', 
        image: '../../../assets/printer.webp', 
        price: {old: 85750, new: 81463},
        raiting: 3,
        reviews: 10,
        info: [{heading: 'Технологія друку', text: 'Струменевий друк'}, {heading: 'Тип пристрою', text: 'БФП'}],
        date: 8
      },
      {
        title: 'Canon Pixma', 
        image: '../../../assets/canon.webp', 
        image2: '../../../assets/canon2.webp',
        price: {old: 4599, new: 2999},
        raiting: 4,
        reviews: 5,
        info: [{heading: 'Тип пристрою', text: 'Принтери'}],
        date: 7
      },
      {
        title: 'Принтер Epson L132', 
        image: '../../../assets/epson.webp', 
        image2: '../../../assets/epson2.webp',
        price: {old: null, new: 6807},
        raiting: 2,
        reviews: 158,
        date:  6
      },
      {
        title: 'Panasonic', 
        image: '../../../assets/panasonic.webp', 
        price: {old: null, new: 649},
        raiting: 2,
        reviews: 1,
        date:  3
      },
      {
        title: 'Навушники Defunc', 
        image: '../../../assets/defunc.webp', 
        price: {old: 1199, new: 999},
        raiting: 5,
        reviews: 2,
        date:  4
      },
      {
        title: 'Принтер Pantum P2207', 
        image: '../../../assets/pantum.webp', 
        image2: '../../../assets/pantum2.webp',
        price: {old: null, new: 4200},
        raiting: 3,
        reviews: 21,
        date:  5
      },
    ]}    

    // повинно сортувати на бекенді
    onFilterChange(event: string) {
        if (event === 'За рейтингом') {
        this.goods.products.sort((a: any,b: any) => b.raiting - a.raiting)
        } else if (event === 'Від дорогих до дешевих') {
        this.goods.products.sort((a: any,b: any) => b.price.new - a.price.new)
        } else if (event === 'Від дешевих до дорогих') {
        this.goods.products.sort((a: any,b: any) => a.price.new - b.price.new)
        } else if (event === 'Новинки') {
        this.goods.products.sort((a: any,b: any) => a.date - b.date)
        }
    }

    onBtnsGridPanelChange(event: string) {
        this.activeBtn = event
    }

}

