import { Component, ElementRef, ViewChild, Input } from '@angular/core';
import { Comment } from 'src/app/shared/components/comment/comment.component';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-comments',
  templateUrl: './product-comments.component.html',
  styleUrls: ['./product-comments.component.sass']
})
export class ProductCommentsComponent {
  // ширину слайдЛіста поділити ширину одного айтема і тоді вийде число скільки показується зараз, додати 1 і буде потрібний i 
  constructor(private modalService: ModalService, public ProductService: ProductService ) {}

  // фільтрувати в продакт сервісі після того як обрано фільтр і натиснуто ок (запускати продакт сервіс з сервісу модалки)

  sliderWidth!: number
  slideWidth!: number
  // moreIndex!: number
  @ViewChild('sliderList') sliderList!: ElementRef;
  @ViewChild('sliderItem') sliderItem!: ElementRef;

  ngAfterViewInit() {
    this.sliderWidth = this.sliderList.nativeElement.offsetWidth;
    this.slideWidth = this.sliderItem.nativeElement.offsetWidth;
    // this.moreIndex = Math.round((this.sliderWidth / this.slideWidth)-1)
  }

  commentsWithPhotoVideo = this.ProductService.currentProduct.reviews_data.filter((item: any) => item.photo || item.video)

  openDialog(type: string, i: number = 0) {
    this.modalService.getData({slides: this.commentsWithPhotoVideo, startSlideIndex: i})
    this.modalService.openDialog(type)
  }


}
