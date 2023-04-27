import { Component } from '@angular/core';
import { ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';
import { AfterViewInit, OnDestroy } from '@angular/core';

type Slide = {
    url: string
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.sass']
})
export class CarouselComponent implements AfterViewInit, OnDestroy {
  constructor() { }

  counter: number = 0
  val: number = 0
  res: any 
  int: any

  slidesArr: Slide[] = [
    {url: '../../../assets/slide1.jpg'},
    {url: '../../../assets/slide2.jpg'},
    {url: '../../../assets/slide3.jpg'},
    {url: '../../../assets/slide4.jpg'},
    {url: '../../../assets/slide5.jpg'},
    {url: '../../../assets/slide6.jpg'},
  ]

  showPrev() {
    if (this.counter <= 0) {
      this.counter = this.slidesArr.length
    }
    this.counter--
    this.val = this.res * this.counter
  }

  showNext() {
    if (this.counter >= this.slidesArr.length-1) {
      this.counter = -1
    }
    this.counter++
    this.val = this.res * this.counter
  }

  st() {
    this.res = - this.slideImg.nativeElement.offsetWidth;
    // this.int = setInterval(() => {
    //   this.showNext()
    // }, 4000)
  }

  ngAfterViewInit() {
    this.st()
  }
  @ViewChild('slideImg') slideImg!: ElementRef;

  stopCarousel() {
    clearInterval(this.int);
  }

  continueCarousel() {
    this.st()
  }

  ngOnDestroy() {
    clearInterval(this.int);
  }
}
