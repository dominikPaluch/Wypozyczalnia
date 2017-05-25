import {Component} from '@angular/core';
import {Image} from './image.interface';


const IMAGES: Image[] = [
  {
    'url': 'img/foto1.jpg'
  },
  {
    'url': 'img/foto2.jpg'
  },
  {
    'url': 'img/foto3.jpg'
  },
  {
    'url': 'img/foto4.jpg'
  },
  {
    'url': 'img/foto5.jpg'
  }
];

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {

  public images = IMAGES;

}


