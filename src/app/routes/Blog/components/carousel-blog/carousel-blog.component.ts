import { Component, ViewChild } from '@angular/core';
import { DragScrollComponent } from 'ngx-drag-scroll';

@Component({
  selector: 'app-carousel-blog',
  templateUrl: './carousel-blog.component.html',
  styleUrls: ['./carousel-blog.component.scss']
})
export class CarouselBlogComponent {
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
}
