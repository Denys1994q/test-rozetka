import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-video-cards',
  templateUrl: './video-cards.component.html',
  styleUrls: ['./video-cards.component.sass']
})
export class VideoCardsComponent {
  constructor(
    public sanitizer: DomSanitizer, ) {   
    }
  clickedVideoIndexArr: number[] = []
  clickedI: any
  videosData = [
    {
      title: 'Найтонший ноутбук з OLED у світі! | Огляд #ASUS #Zenbook S13 #OLED UX5304',
      img: '../../../assets/screen4.png',
      time: '28 квітня 2023 р.',
      url: 'https://youtube.com/embed/7llunBO2kzg?autoplay=1&mute=1',
      duration: '00:25'
    },
    {
      title: 'WALLЯ чи #Portal #Turret?',
      img: '../../../assets/screen11.png',
      time: '26 квітня 2023 р.',
      url: 'https://youtube.com/embed/1PmoH1ZbaE4?autoplay=1&mute=1',
      duration: '00:42'
    },
    {
      title: 'Мабуть, перше використання #JDAM-ER в Україні',
      img: '../../../assets/screen2.png',
      time: '27 квітня 2023 р.',
      url: 'https://youtube.com/embed/OyayzoppdKA?autoplay=1&mute=1',
      duration: '03:54'
    },
    {
      title: 'Новий Samsung Galaxy A54 ще більше... | Огляд Samsung Galaxy A54 (2023)',
      img: '../../../assets/screen3.png',
      time: '27 квітня 2023 р.',
      url: 'https://youtube.com/embed/tN9HgYbLFSQ?autoplay=1&mute=1',
      duration: '09:14'
    }
  ]

  showIframe(i: number) {
      if (this.clickedVideoIndexArr.indexOf(i) == -1) {
        this.clickedVideoIndexArr.push(i)
      }
  }

}
