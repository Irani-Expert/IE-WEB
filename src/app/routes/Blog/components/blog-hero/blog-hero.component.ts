import { Component, HostListener, ViewChild } from '@angular/core';
import { DragScrollComponent } from 'ngx-drag-scroll';
import { AppComponent } from 'src/app/app.component';
import { Utils } from 'src/app/classes/utils';

@Component({
  selector: 'app-blog-hero',
  templateUrl: './blog-hero.component.html',
  styleUrls: ['./blog-hero.component.scss']
})
export class BlogHeroComponent {
  // =======================[رسپانسیو]==========
  
  device: 'sm' | 'lg' = 'lg';
  ngOnInit(){
    this.updateDeviceValue();

  }
  
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.updateDeviceValue();
  }
  updateDeviceValue() {
    if (AppComponent.isBrowser.value) {
      if (Utils.isMobileL()) {
        this.device = 'sm';
      } else {
        this.device = 'lg';
      }
    }
  }
  // ================================[کاروسل رسپانسیو]===============
  rightReached = false;
  leftReached = false;
  @ViewChild('nav', {read: DragScrollComponent}) ds: DragScrollComponent;
  items = [{
    id:0,
    title:'s'
  },
  {
    id:0,
    title:'s'
  },
  {
    id:0,
    title:'s'
  },
  {
    id:0,
    title:'s'
  },
  {
    id:0,
    title:'s'
  },
  {
    id:1,
    title:'d'
  }]
  moveLeft() {
    this.ds.moveLeft();

  }

  moveRight() {
    this.ds.moveRight();
  }
  isRightBoundary(event:any) {
    if(event) this.rightReached = true
    else this.rightReached = false
  }
  isLeftBoundary(event:any) {
    if(event) this.leftReached = true
    else this.leftReached = false
  }

  // <!-- ========================[ایتم عکس]============== -->
  color ='#ff0000c2'
}
