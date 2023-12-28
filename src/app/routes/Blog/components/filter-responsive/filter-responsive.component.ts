import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter-responsive',
  templateUrl: './filter-responsive.component.html',
  styleUrls: ['./filter-responsive.component.scss'],
})
export class FilterResponsiveComponent {
  @Output('result') emitter = new EventEmitter<number>();
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
  @Input() categoryIcon: string;

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
  @Input() categoryDetailIcon: string;

  sortFilter = [
    { name: 'همه محصولات', id: 1 },
    { name: 'محصولات غیر رایگان', id: 2 },
    { name: 'محصولات رایگان', id: 3 },
    { name: 'پربازدیدترین ها', id: 4 },
    { name: 'پرفروش ترین ها', id: 5 },
    { name: 'پیشنهاد خریداران', id: 6 },
    { name: 'منتخب', id: 7 },
  ];

  NavbarsStatus(type: number) {
    this.openNav = type;
  }
  openNav: number = 0;
  changesort(id: number) {
    this.sorttype = id;
    this.emitter.emit(id);
  }
  sorttype: number = 1;



  // ==========[مدیریت سرمایه]===
  @Input('data') categoryMoneylIcon : string;
  @Input('data') color : string;
}
