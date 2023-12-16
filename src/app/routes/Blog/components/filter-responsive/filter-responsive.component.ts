import { Component } from '@angular/core';

@Component({
  selector: 'app-filter-responsive',
  templateUrl: './filter-responsive.component.html',
  styleUrls: ['./filter-responsive.component.scss']
})
export class FilterResponsiveComponent {
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

}
