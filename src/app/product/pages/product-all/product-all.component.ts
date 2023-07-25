import { Component, ViewChild, ElementRef } from '@angular/core';
import { Slide } from 'src/app/shared/components/carousel/carousel.component';
import { Comment } from 'src/app/shared/components/comment/comment.component';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-all',
  templateUrl: './product-all.component.html',
  styleUrls: ['./product-all.component.sass']
})
export class ProductAllComponent {
  showFullText: boolean = false
  hideBtn: boolean = false
  slides: Slide[] = []

  showFullBlock() {
    this.showFullText = true
    this.hideBtn = true
  }

  @ViewChild('videoBlock') videoBlock!: ElementRef;
  @ViewChild('characteristicsAndReviewsBlock') characteristicsAndReviewsBlock!: ElementRef;

  constructor(public ProductService: ProductService ) {}

  newProds = {
    category: 'Гарячі новинки',
    products: [
      {
        title: 'Набір для прибирання',
        image: '../../../assets/vileda.webp',
        price: { old: 2405, new: 1539 }
      },
      {
        title: 'Шорти AVRORA сірі',
        image: '../../../assets/shorts.webp',
        price: { old: 480, new: 229 }
      },
      {
        title: 'Ноутбук ASUS ROG',
        image: '../../../assets/asus_rog.webp',
        price: { old: null, new: 82199 }
      },
    ]
  }

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
