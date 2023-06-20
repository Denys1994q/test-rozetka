import { Component, ElementRef, ViewChild } from '@angular/core';
import { Comment } from 'src/app/shared/components/comment/comment.component';
import { ModalService } from 'src/app/shared/components/modal/modal.service';

@Component({
  selector: 'app-product-comments',
  templateUrl: './product-comments.component.html',
  styleUrls: ['./product-comments.component.sass']
})
export class ProductCommentsComponent {
  // ширину слайдЛіста поділити ширину одного айтема і тоді вийде число скільки показується зараз, додати 1 і буде потрібний i 
  constructor(private modalService: ModalService) {}

  sliderWidth!: number
  slideWidth!: number
  moreIndex!: number
  @ViewChild('sliderList') sliderList!: ElementRef;
  @ViewChild('sliderItem') sliderItem!: ElementRef;

  ngAfterViewInit() {
    this.sliderWidth = this.sliderList.nativeElement.offsetWidth;
    this.slideWidth = this.sliderItem.nativeElement.offsetWidth;
    this.moreIndex = Math.round((this.sliderWidth / this.slideWidth)-1)
  }

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

  commentsWithPhotoVideo = this.comments.filter(item => item.photo || item.video)

  openDialog(type: string, i?: number) {
    this.modalService.getData({slides: this.commentsWithPhotoVideo, startSlideIndex: i})
    this.modalService.openDialog(type)
  }
}
