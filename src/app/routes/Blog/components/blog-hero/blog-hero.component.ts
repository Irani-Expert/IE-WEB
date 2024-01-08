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
}
@Component({
  selector: 'app-blog-hero',
  templateUrl: './blog-hero.component.html',
  styleUrls: ['./blog-hero.component.scss'],
})
export class BlogHeroComponent {
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
    if (AppComponent.isBrowser.value) {
      this.ds = DragScrollComponent;
    }
    this.updateDeviceValue();
    this.setLanguage();
    this._searchInputSubscription = this._searchinput
      .pipe(debounceTime(700))
      .subscribe((value) => {
        this.searchFilterName(value);
      });
  }

  constructor(private router: Router) {}
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
      img: 'assets/img/blog(hover)-2.svg',
    },
    {
      color: this.green,
      img: 'assets/img/blog(hover)-1.svg',
    },
    {
      color: this.blue,
      img: 'assets/img/blog(hover)-3.svg',
    },
    {
      color: this.aqua,
      img: 'assets/img/blog(hover)-4.svg',
    },
    {
      color: this.yellow,
      img: 'assets/img/blog(hover)-5.svg',
    },
  ];
  setLanguage() {
    this.itemHero.forEach((it) =>
      it.isRTL ? (it.language = 'FA') : (it.language = 'EN')
    );
  }
  fillValue(value: string) {
    this._searchinput.next(value);
  }
  searchFilterName(value: string) {
    this.router.navigateByUrl(`blog/page/1?blogName=${value}`);
  }
}
