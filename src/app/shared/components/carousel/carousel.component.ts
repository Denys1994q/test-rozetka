import { Component, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { AfterViewInit, OnDestroy, Input, OnInit, OnChanges, SimpleChanges, ViewChildren, QueryList } from '@angular/core';

export type Slide = {
    url?: string,
    video_url?: string,
    video_youtubeUrl?: string,
    video_screen?: string
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.sass']
})
export class CarouselComponent implements AfterViewInit, OnDestroy {

  @Input() slidesArr!: Slide[]
  @Input() show_btns: boolean = true
  @Input() show_indicators: boolean = true
  @Input() extended: boolean = false
  @Input() extendedBig: boolean = false
  @Input() extendedBigWide: boolean = false
  @Input() startSlideIndex: any
  @Input() autoSlidesOpening: boolean = false

  @Output() activeSlideEvent = new EventEmitter<any>()

  slideWidth!: number
  slideHeight!: number
  counter: number = 0
  val: number = 0
  res: any 
  int: any

  showPrev() {
    if (this.counter <= 0) {
      this.counter = this.slidesArr.length
    }
    this.counter--
    this.val = this.res * this.counter
    // this.scrollRow(this.counter)

    this.activeSlideEvent.emit(this.counter)
  }

  showNext() {
    if (this.counter >= this.slidesArr.length-1) {
      this.counter = -1
    }
    this.counter++
    this.val = this.res * this.counter
    // this.scrollRow(this.counter)

    this.activeSlideEvent.emit(this.counter)
  }

  st() {
    this.res = - this.slideImg.nativeElement.offsetWidth;
    this.slideWidth = this.slideImg.nativeElement.offsetWidth;
    this.slideHeight = this.slideImg.nativeElement.offsetHeight;
    if (this.autoSlidesOpening) {
      this.int = setInterval(() => {
        this.showNext()
      }, 4000)
    }
  }

  ngAfterViewInit() {
    this.st()
    if (this.startSlideIndex) {
      this.activeSlideEvent.emit(this.startSlideIndex)
      this.selectSlide(this.startSlideIndex)
    }
  }
  @ViewChild('slideImg') slideImg!: ElementRef;
  @ViewChild('row_list') row_list!: ElementRef;
  // @ViewChild('row_item') row_item!: ElementRef;
  @ViewChildren("row_item", { read: ElementRef }) elements!: QueryList<ElementRef>;

  stopCarousel() {
    clearInterval(this.int);
  }

  continueCarousel() {
    this.st()
  }

  ngOnDestroy() {
    clearInterval(this.int);
  }

  selectSlide(i: number) {
    this.scrollRow(i)

    this.counter = i
    this.val = this.res * this.counter
  }

  scrollRow(i: number) {
    if (this.elements) {
      this.elements.forEach((element, index) => {
        if (i === index) {
          element.nativeElement.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "center"
          });        
        }
      });
    }
  }

  generateSrcset(imageUrl: string): string {
    const imageId = imageUrl.substring(imageUrl.lastIndexOf('/') + 1, imageUrl.lastIndexOf('.webp'));
    const widths = [376, 430, 770, 1400];
    const srcset = widths.map((width) => {
      if (width === 376) {
        return `https://res.cloudinary.com/dw60kllwn/image/upload/w_340,h_228/v1697355535/${imageId}.webp ${width}w`;
      } else if (width === 430) {
        return `https://res.cloudinary.com/dw60kllwn/image/upload/w_390,h_130/v1697355535/${imageId}.webp ${width}w`;
      } else if (width === 770) {
        return `https://res.cloudinary.com/dw60kllwn/image/upload/w_700,h_235/v1697355535/${imageId}.webp ${width}w`;
      } else {
        return `https://res.cloudinary.com/dw60kllwn/image/upload/w_1270,h_400/v1697355535/${imageId}.webp ${width}w`;
      }
      
    });
    return srcset.join(', ');
  }

}
