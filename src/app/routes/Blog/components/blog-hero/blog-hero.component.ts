import { Component, HostListener, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DragScrollComponent } from 'ngx-drag-scroll';
import { Subject, Subscription, debounceTime } from 'rxjs';
import { AppComponent } from 'src/app/app.component';
import { Blog } from 'src/app/classes/interfaces/blog.interface';
import { Utils } from 'src/app/classes/utils';
class BlogModel implements Blog {
  createDate: string = '';

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
  brief: string = '';
  language?: string = '';
  favoriteCount: number = 0;
  colorCode: string;
}
@Component({
  selector: 'app-blog-hero',
  templateUrl: './blog-hero.component.html',
  styleUrls: ['./blog-hero.component.scss'],
})
export class BlogHeroComponent {
  @Input('linkType') linkType: number;
  link: string = '';
  // Search Blog
  value: string | null = null;
  _searchInputSubscription: Subscription;
  _searchinput: Subject<string> = new Subject<string>();

  // Search Blog
  @Input('data') itemHero = new Array<BlogModel>();

  // =======================[رسپانسیو]==========

  device: 'sm' | 'lg' = 'lg';
  @ViewChild('nav') ds: any;

  ngOnInit() {
    this.getUrl();
    if (this.isBrowser) {
      this.ds = DragScrollComponent;
    }
    this.updateDeviceValue();
    this._searchInputSubscription = this._searchinput
      .pipe(debounceTime(700))
      .subscribe((value) => {
        this.searchFilterName(value);
      });
  }

  getUrl() {
    if (this.linkType == 2) {
      this.link = '../../';
    }
    this.setLanguage();
  }

  constructor(private router: Router) {}
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.updateDeviceValue();
  }
  updateDeviceValue() {
    if (this.isBrowser) {
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
  red = '#ff000087';
  yellow = '#44f76a99';
  blue = '#008dff66';
  aqua = '#00ffff80';
  green = '#2bdb2b82';
  x = [
    {
      color: this.red,
      img: 'assets/img/blog(hover)-2.webp',
    },
    {
      color: this.green,
      img: 'assets/img/blog(hover)-1.webp',
    },
    {
      color: this.blue,
      img: 'assets/img/blog(hover)-3.webp',
    },
    {
      color: this.aqua,
      img: 'assets/img/blog(hover)-4.webp',
    },
    {
      color: this.yellow,
      img: 'assets/img/blog(hover)-5.webp',
    },
  ];
  setLanguage() {
    this.itemHero.forEach((it) =>
      it.isRTL ? (it.language = 'fa') : (it.language = 'en')
    );
  }
  fillValue(value: string) {
    this._searchinput.next(value);
  }
  searchFilterName(value: string) {
    this.router.navigateByUrl(`articles/page/1?blogName=${value}`);
  }

  get isBrowser() {
    return AppComponent.isBrowser.value;
  }
}
