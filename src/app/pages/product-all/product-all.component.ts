import { Component, ViewChild, ElementRef } from '@angular/core';
import { Slide } from 'src/app/components/carousel/carousel.component';
import { Comment } from 'src/app/components/comment/comment.component';

@Component({
  selector: 'app-product-all',
  templateUrl: './product-all.component.html',
  styleUrls: ['./product-all.component.sass']
})
export class ProductAllComponent {
  showFullText: boolean = false
  hideBtn: boolean = false

  showFullBlock() {
    this.showFullText = true
    this.hideBtn = true
  }

  @ViewChild('videoBlock') videoBlock!: ElementRef;
  @ViewChild('characteristicsAndReviewsBlock') characteristicsAndReviewsBlock!: ElementRef;

  slides: Slide[] = [
    {url: '../../../assets/products/slide1.webp'},
    {url: '../../../assets/products/slide2.webp'},
    {url: '../../../assets/products/slide3.webp'},
    {url: '../../../assets/products/slide4.webp'},
    {url: '../../../assets/products/slide5.webp'},
    {url: '../../../assets/products/slide6.webp'},
    {url: '../../../assets/products/slide7.webp'},
    {url: '../../../assets/products/slide8.webp'},
    {url: '../../../assets/products/slide9.webp'},
    {url: '../../../assets/products/slide10.webp'},
    {url: '../../../assets/products/slide11.webp'},
    {url: '../../../assets/products/slide12.webp'},
    {video_url: 'https://video.rozetka.com.ua/video3/smartfony_tv_i_elektronika/aksessuary_dlya_telefonov/naushniki/naushniki_defunc_true_music_tws.mp4'}
  ]

  videoSlides: Slide[] = [
    {video_url: 'https://video.rozetka.com.ua/video3/smartfony_tv_i_elektronika/aksessuary_dlya_telefonov/naushniki/naushniki_defunc_true_music_tws.mp4'},
    {video_youtubeUrl: 'https://www.youtube.com/embed/zpbbo__IdEA', video_screen: '../../../assets/video_screen1.jpg'},
    {video_youtubeUrl: 'https://www.youtube.com/embed/T2LKjrFpKfc', video_screen: '../../../assets/video_screen2.jpg'},
    {video_youtubeUrl: 'https://www.youtube.com/embed/bZROsiW0_T8', video_screen: '../../../assets/video_screen3.jpg'},
    {video_youtubeUrl: 'https://www.youtube.com/embed/zpbbo__IdEA', video_screen: '../../../assets/video_screen4.jpg'},
    {video_youtubeUrl: 'https://www.youtube.com/embed/zpbbo__IdEA', video_screen: '../../../assets/video_screen1.jpg'},
    {video_youtubeUrl: 'https://www.youtube.com/embed/T2LKjrFpKfc', video_screen: '../../../assets/video_screen2.jpg'},
    {video_youtubeUrl: 'https://www.youtube.com/embed/bZROsiW0_T8', video_screen: '../../../assets/video_screen3.jpg'},
    {video_youtubeUrl: 'https://www.youtube.com/embed/zpbbo__IdEA', video_screen: '../../../assets/video_screen4.jpg'},
  ]

price = {old: 1199, new: 999}

newProds = {
  category: 'Гарячі новинки', 
  products: [
    {
      title: 'Набір для прибирання', 
      image: '../../../assets/vileda.webp', 
      price: {old: 2405, new: 1539}
    },
    {
      title: 'Шорти AVRORA сірі', 
      image: '../../../assets/shorts.webp', 
      price: {old: 480, new: 229}
    },
    {
      title: 'Ноутбук ASUS ROG', 
      image: '../../../assets/asus_rog.webp', 
      price: {old: null, new: 82199}
    },
  ]}    

  comments: Comment[] = [
    {
      author: 'Андрій П.', 
      date: new Date(), 
      text: 'Лягають у вуха надійно і звучать не погано.', 
      rating: 1,
      likes: 0,
      dislikes: 0,
      photo: '../../../assets/products/slide1.webp'
    },
    {
      author: 'Ігор', 
      date: new Date(), 
      text: 'Лягають у вуха надійно і звучать не погано.', 
      rating: 1,
      likes: 0,
      dislikes: 0,
      photo: '../../../assets/products/slide2.webp'
    },
    {
      author: 'Андрій П.', 
      date: new Date(), 
      text: 'Лягають у вуха надійно і звучать не погано.', 
      rating: 1,
      likes: 0,
      dislikes: 0,
      photo: '../../../assets/products/slide3.webp'
    },
    {
      author: 'Ігор', 
      date: new Date(), 
      text: 'Лягають у вуха надійно і звучать не погано.', 
      rating: 1,
      likes: 0,
      dislikes: 0,
      photo: '../../../assets/defunc.webp'
    },
    {
      author: 'Андрій П.', 
      date: new Date(), 
      text: 'Лягають у вуха надійно і звучать не погано.', 
      rating: 1,
      likes: 0,
      dislikes: 0,
      photo: '../../../assets/smartphones_slide1.jpg'
    },
    {
      author: 'Ігор', 
      date: new Date(), 
      text: 'Лягають у вуха надійно і звучать не погано.', 
      rating: 1,
      likes: 0,
      dislikes: 0,
      photo: '../../../assets/smartphones_slide2.jpg'
    },
    {
      author: 'Андрій П.', 
      date: new Date(), 
      text: 'Лягають у вуха надійно і звучать не погано.', 
      rating: 1,
      likes: 0,
      dislikes: 0,
      photo: '../../../assets/smartphones_slide3.jpg'
    },
    {
      author: 'Ігор', 
      date: new Date(), 
      text: 'Лягають у вуха надійно і звучать не погано.', 
      rating: 1,
      likes: 0,
      dislikes: 0,
      photo: '../../../assets/defunc.webp'
    },
    {
      author: 'Андрій П.', 
      date: new Date(), 
      text: 'Лягають у вуха надійно і звучать не погано.', 
      rating: 1,
      likes: 0,
      dislikes: 0,
      photo: '../../../assets/smartphones_slide3.jpg'
    },
    {
      author: 'Ігор', 
      date: new Date(), 
      text: 'Лягають у вуха надійно і звучать не погано.', 
      rating: 1,
      likes: 0,
      dislikes: 0,
      photo: '../../../assets/defunc.webp'
    },
    {
      author: 'Юра', 
      date: new Date(), 
      text: 'Чудовий функціонал! Гарні і зручні наушники! Всім рекомендую.', 
      disadvantages: 'Нема',
      rating: 4,
      likes: 1,
      dislikes: 0
    },
  ]


  scrollToBlock(block: string) {
    if (block === 'videoBlock') {
      this.videoBlock.nativeElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });   
    } else if (block === 'characteristicsAndReviewsBlock') {
      this.characteristicsAndReviewsBlock.nativeElement.scrollIntoView({
        behavior: "smooth",
      });   
    }
  }
}
