import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
@Component({
  selector: 'app-sell-info',
  templateUrl: './sell-info.component.html',
  styleUrls: ['./sell-info.component.scss'],
  
})
export class SellInfoComponent {
val:number[][]=[[0,0,0,0],[70,22,57,222]];
  ngOnInit() {
    setInterval(() => {
      if(this.val[0][0]<this.val[1][0]){
        this.val[0][0]++
      }
      if(this.val[0][1]<this.val[1][1]){
        this.val[0][1]++
      }
      if(this.val[0][2]<this.val[1][2]){
        this.val[0][2]++
      }
      if(this.val[0][3]<this.val[1][3]){
        this.val[0][3]++
      }
    },10)
    }
    choosenSlide:number=1
  changeSlide(slide:any){
    
    this.choosenSlide=slide
    }
}
