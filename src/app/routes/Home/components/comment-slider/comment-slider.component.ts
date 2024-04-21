import { Component, OnInit } from '@angular/core';
import { ICommentInfo } from './comment-info';

@Component({
  selector: 'app-comment-slider',
  templateUrl: './comment-slider.component.html',
  styleUrls: ['./comment-slider.component.scss'],
})
export class CommentSliderComponent implements OnInit {
  upperSlide: number = 2;
  lowwerSlide: number = 0;
  slidDirection: boolean | null;
  commentModel: Array<ICommentInfo> =[
    {
     gender: true,
     firstname: 'معتمدی',
     lastName: 'معتمدی',
     text:
      ' یکی از چیزهایی که مرا به این ربات جلب کرده، پشتیبانی عالی و مشاوره رایگان است. تیم پشتیبانی همیشه آماده به کمک و راهنمایی است و مشاوران با تجربه خود توانسته‌اند به من راهنمایی‌های مفیدی برای بهبود عملکرد معاملات من ارائه دهند',
   },
   {
    gender: true,
    firstname: 'کاشانی',
    lastName: 'کاشانی',
    text:
    'من از ربات atm برای حساب پرایم استفاده میکنم واقعا عملکردش عالیه و به تظرم بهترین مزیتش اینه که میشه درادون رو توی یک بازه مشخص نگه داشت (باتشکر از تیم عالی ایرانی اکسپرت)'
  },
  {
    gender: true,
    firstname: 'آریامهر',
    lastName: 'آریامهر',
    text:
    'این که خودش با مقداری از سرمایه ترید میکنه و همه سرمایه من درگیر نیست و منم میتونم ترید شخصی خودم رو با پنل معامله انجام بدم  به عنولن یک مزیت عالی بسیار کاربردیه، ممنونم از خدماتتون'
  },
  {
    gender: true,
    firstname: 'صادقی',
    lastName: 'صادقی',
    text:
    'موضوع مدیریت سرمایه یکی از بزرگترین درگیریهای من بود ولی مدیریت سرمایه این ربات ATM خیلی کامل و درست کار میکنه و سرمایه منو یکبار کامل نجات داد'
  },
  {
    gender: true,
    firstname: 'علائی',
    lastName: 'علائی',
    text:
    'این که راحت خودم میتونم BackTest چند ماه بگیرم و Input هارو عوض کنم تا Profite و Drawdown مورد نظرم رو بده عالیه و حتی پشتیبانی هم تو این موضوع کمکم کرد، تیمتون واقعا عالیه'
  },
  ]
  ngOnInit(): void {}
  sliderMovement(direction: boolean | null) {
    this.slidDirection = direction;
    if (direction && this.upperSlide <= this.commentModel.length) {
      this.upperSlide += 2;
      this.lowwerSlide += 2;
    } else if (!direction && 2 <= this.lowwerSlide) {
      this.upperSlide -= 2;
      this.lowwerSlide -= 2;
    }
  }
}
