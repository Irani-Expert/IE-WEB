import { Component, HostListener, Input, ViewChild } from '@angular/core';
import { DragScrollComponent } from 'ngx-drag-scroll';
import { AppComponent } from 'src/app/app.component';
import { Blog } from 'src/app/classes/interfaces/blog.interface';
import { Utils } from 'src/app/classes/utils';
class BlogModel implements Blog {
  isRTL: boolean = false;
  id: number = 0;
  title: string = '';
  updateDate: string = '';
  updatedByFirstName: string = '';
  updatedByLastName: string = '';
  cardImagePath: string = '';
  viewsCount: number = 0;
  authorIconPath: string = '';
  studyTime: string = '';
  publishDate: string = '';
  browserTitle: string = '';
}
@Component({
  selector: 'app-blog-hero',
  templateUrl: './blog-hero.component.html',
  styleUrls: ['./blog-hero.component.scss'],
})
export class BlogHeroComponent {
  @Input('data') itemHero = new Array<BlogModel>();

  // =======================[رسپانسیو]==========

  device: 'sm' | 'lg' = 'lg';
  ngOnInit() {
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
  @ViewChild('nav', { read: DragScrollComponent }) ds: DragScrollComponent;
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

  // <!-- ========================[ایتم عکس]============== -->
  red = '#ff0000c2';
  yellow = '#ffd700a3';
  blue = '#0000ff91';
  aqua = '#00ffffb2';
  green = '#2bdb2bba';
  x = [
    {
      color: '#ff0000c2',
      img: 'assets/img/blog(hover)-2.svg',
    },
    {
      color: '#ffd700a3',
      img: 'assets/img/blog(hover)-1.svg',
    },
    {
      color: '#0000ff91',
      img: 'assets/img/blog(hover)-3.svg',
    },
    {
      color: '#00ffffb2',
      img: 'assets/img/blog(hover)-4.svg',
    },
    {
      color: '#2bdb2bba',
      img: 'assets/img/blog(hover)-5.svg',
    },
  ];
}
