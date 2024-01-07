import { Component, Input, ViewChild } from '@angular/core';
import { DragScrollComponent } from 'ngx-drag-scroll';
import { Blog } from 'src/app/classes/interfaces/blog.interface';

@Component({
  selector: 'app-carousel-blog',
  templateUrl: './carousel-blog.component.html',
  styleUrls: ['./carousel-blog.component.scss'],
})
export class CarouselBlogComponent {
  loading: boolean = true;
  @Input('data') itemOffers: Blog[];
  rightReached = false;
  leftReached = false;
  @ViewChild('nav') ds: any;
  ngOnInit() {
    this.ds = DragScrollComponent;
  }
  items = [
    {
      id: 0,
      title: 's',
    },
    {
      id: 0,
      title: 's',
    },
    {
      id: 0,
      title: 's',
    },
    {
      id: 0,
      title: 's',
    },
    {
      id: 0,
      title: 's',
    },
    {
      id: 1,
      title: 'd',
    },
  ];
  moveLeft() {
    this.ds.moveLeft();
  }

  moveRight() {
    this.ds.moveRight();
  }

  isRightBoundary(event: any) {
    if (event) this.rightReached = true;
    else this.rightReached = false;
  }
  isLeftBoundary(event: any) {
    if (event) this.leftReached = true;
    else this.leftReached = false;
  }
}
