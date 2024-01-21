import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
// import { AppComponent } from 'src/app/app.component';
import { ITags } from 'src/app/classes/interfaces/tags.interface';
// import { Utils } from 'src/app/classes/utils';

@Component({
  selector: 'app-blog-filter',
  templateUrl: './blog-filter.component.html',
  styleUrls: ['./blog-filter.component.scss'],
})
export class BlogFilterComponent {
  @Output('result') emitter = new EventEmitter<number>();

  @Input('type') type: 'category' | 'tags' = 'category';

  @Input('categoryTags') categoryDetail: Array<ITags> = new Array<ITags>();
  // ==========[استیکی]======

  // @ViewChild('sticky') myStickyElement: ElementRef;
  // @ViewChild('stickyoff') myStickyElement2: ElementRef;
  // sticked: boolean = false;

  // @HostListener('window:scroll', ['$event'])
  // onScroll() {
  //   if (AppComponent.isBrowser.value) {
  //     if (
  //       Utils.scrollTracker() > this.myStickyElement.nativeElement.offsetTop &&
  //       Utils.scrollTracker() < this.myStickyElement2.nativeElement.offsetTop
  //     ) {
  //       this.sticked = true;
  //     } else {
  //       this.sticked = false;
  //     }
  //   }
  // }
  ngOnInit() {
    console.log(this.categoryDetail);
  }
  selectCategroy(it: any) {
    this.emitter.emit(it.id);
  }
  category: Array<any> = [
    {
      name: 'همه مقالات',
      icon: 'assets/icon/icon-filter(blog)-1.svg',
      id: 1,
    },
    {
      name: 'معامله گری ',
      icon: 'assets/icon/icon-filter(blog)-4.svg',
      id: 7,
    },
    {
      name: 'فناوری بلاکچین',
      icon: 'assets/icon/icon-filter(blog)-5.svg',
      id: 8,
    },
    {
      name: 'ربات معامله گر ',
      icon: 'assets/icon/icon-filter(blog)-6.svg',
      id: 5,
    },
  ];
  constructor(private router: Router) {}
  searchTag(searchingTag: string) {
    searchingTag = searchingTag.slice(1);
    console.log(searchingTag);

    this.router.navigateByUrl(`search?search=${searchingTag}`);
  }
}
