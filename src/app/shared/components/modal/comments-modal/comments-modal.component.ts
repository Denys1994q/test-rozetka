import { Component } from '@angular/core';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { Slide } from '../../carousel/carousel.component';
import { Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-comments-modal',
  templateUrl: './comments-modal.component.html',
  styleUrls: ['./comments-modal.component.sass']
})
export class CommentsModalComponent {
  activeSlide!: number
  constructor(private modalService: ModalService, @Inject(MAT_DIALOG_DATA) public data: any) {}

  closeDialog() {
    this.modalService.closeDialog()
  }

  slides: Slide[] = this.data.slides.map((item: any) => {
    return {url: item.photo}
  })

  receiveActiveSlideIndex = ($event: any) => {
    this.activeSlide = $event
    console.log(this.activeSlide)
    console.log(this.data.startSlideIndex)
  }

}
