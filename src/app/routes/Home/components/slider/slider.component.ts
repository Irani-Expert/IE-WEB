import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
styleUrls: ['./slider.component.scss'],
})
export class SliderComponent {
choosenSlide:number=1;
changeSlide(slide:number){
this.choosenSlide=slide
}
}
