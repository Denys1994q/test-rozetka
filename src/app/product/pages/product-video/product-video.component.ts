import { Component } from '@angular/core';
import { Slide } from 'src/app/shared/components/carousel/carousel.component';

@Component({
  selector: 'app-product-video',
  templateUrl: './product-video.component.html',
  styleUrls: ['./product-video.component.sass']
})
export class ProductVideoComponent {

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

}
