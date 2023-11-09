import { Component } from '@angular/core';
import { Utils } from 'src/app/classes/utils';
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  device: 'sm' | 'lg' = 'lg'
constructor(){
  if(Utils.isLaptopLg() ) this.device = 'lg'
  else this.device = 'sm'
}  
}
