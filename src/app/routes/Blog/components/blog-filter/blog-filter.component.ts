import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Output,
  ViewChild,
} from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { Utils } from 'src/app/classes/utils';

@Component({
  selector: 'app-blog-filter',
  templateUrl: './blog-filter.component.html',
  styleUrls: ['./blog-filter.component.scss'],
})
export class BlogFilterComponent {
  @Output('result') emitter = new EventEmitter<number>();

  @ViewChild('sticky') myStickyElement: ElementRef;
  @ViewChild('stickyoff') myStickyElement2: ElementRef;
  

  sticked: boolean = false;

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    if (AppComponent.isBrowser.value) {
      if (
        Utils.scrollTracker() > this.myStickyElement.nativeElement.offsetTop && Utils.scrollTracker() < this.myStickyElement2.nativeElement.offsetTop
      ) {
        this.sticked = true;
      } else {
        this.sticked = false;
      }
    }
  }

  selectCategroy(it: any) {
    this.emitter.emit(it.id);
  }
  category: Array<any> = [
    {
      name: 'همه مقالات',
      icon: 'assets/img/icon-filter(blog)-1.svg',
      id: 1,
    },
    {
      name: 'معامله گری ',
      icon: 'assets/img/icon-filter(blog)-4.svg',
      id: 7,
    },
    {
      name: 'فناوری بلاکچین',
      icon: 'assets/img/icon-filter(blog)-5.svg',
      id: 8,
    },
    {
      name: 'ربات معامله گر ',
      icon: 'assets/img/icon-filter(blog)-6.svg',
      id: 5,
    },
  ];
  categoryDetail: Array<any> = [
    {
      name: 'درامد دلاری',
      id: 1,
    },
    {
      name: 'ربات معامله گر ATM',
      id: 2,
    },
    {
      name: 'آموزش فارکس',
      id: 3,
    },
    {
      name: 'آموزش ارز دیجیتال',
      id: 4,
    },
    {
      name: 'ترید چیست',
      id: 5,
    },
    {
      name: 'انتخاب بهترین بروکر',
      id: 6,
    },
    {
      name: 'اصول انتخاب بروکر',
      id: 7,
    },
  ];
  constructor() {}
  ngOnInit() {}
}
