import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ITags } from 'src/app/classes/interfaces/tags.interface';
import { Utils } from 'src/app/classes/utils';

@Component({
  selector: 'app-filter-responsive',
  templateUrl: './filter-responsive.component.html',
  styleUrls: ['./filter-responsive.component.scss'],
})
export class FilterResponsiveComponent {
  constructor ( private router : Router ){}
  @Output('result') emitter = new EventEmitter<number>();
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
  @Input() categoryIcon: string;
  @Input('categoryTags') categoryTags : Array<ITags> = new Array<ITags>;;
  @Input() categoryDetailIcon: string;
  @Input('type') type: 'category' | 'tags' = 'category';

  NavbarsStatus(type: number) {
    this.openNav = type;
  }
  openNav: number = 0;
  changesort(id: number) {
    this.sorttype = id;
    this.emitter.emit(id);
  }
  sorttype: number = 1;
  
  // @HostListener('window:scroll', ['$event'])

  searchTag(searchingTag:string) {
    searchingTag = searchingTag;
    
    this.router.navigateByUrl(`search?search=${searchingTag}`);
    // Utils.scrollTopWindow();

  }
  // ==========[مدیریت سرمایه]===
  @Input('data') categoryMoneylIcon: string;
  @Input('data') color: string;
}
