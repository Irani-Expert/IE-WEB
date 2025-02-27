import { Component, Input, ViewChild } from '@angular/core';
import { DragScrollComponent } from 'ngx-drag-scroll';
import { AppComponent } from 'src/app/app.component';
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
    // console.log(this.itemOffers);

    if (this.isBrowser) this.ds = DragScrollComponent;
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
    if (this.isBrowser) this.ds.moveLeft();
    else console.log('SSR => DragScroll Denied');
  }

  moveRight() {
    if (this.isBrowser) this.ds.moveRight();
    else console.log('SSR => DragScroll Denied');
  }

  isRightBoundary(event: any) {
    if (event) this.rightReached = true;
    else this.rightReached = false;
  }
  isLeftBoundary(event: any) {
    if (event) this.leftReached = true;
    else this.leftReached = false;
  }

  get isBrowser() {
    return AppComponent.isBrowser.value;
  }
}
