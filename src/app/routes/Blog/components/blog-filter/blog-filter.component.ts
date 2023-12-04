import { Component } from '@angular/core';

@Component({
  selector: 'app-blog-filter',
  templateUrl: './blog-filter.component.html',
  styleUrls: ['./blog-filter.component.scss']
})
export class BlogFilterComponent {
category : Array<any> = [
  {
    name:'جدیدترین مطالب',
    icon :'assets/img/icon-filter(blog)-1.svg',
  },
  {
    name:' آموزش ها',
    icon :'assets/img/icon-filter(blog)-1.svg',
  },
  {
    name:'معرفی کتاب ',
    icon :'assets/img/icon-filter(blog)-2.svg',
  },
  {
    name:' معرفی بروکرها',
    icon :'assets/img/icon-filter(blog)-3.svg',
  },
  {
    name:' پادکست های ایرانی اکسپرت',
    icon :'assets/img/icon-filter(blog)-4.svg',
  },
  {
    name:'فارکس ',
    icon :'assets/img/icon-filter(blog)-5.svg',
  },
  {
    name:'ارز دیجیتال ',
    icon :'assets/img/icon-filter(blog)-5.svg',
  }, {
    name:'ربات معامله گر ',
    icon :'assets/img/icon-filter(blog)-6.svg',
  },
]
}
