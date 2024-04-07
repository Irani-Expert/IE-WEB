import { Injectable } from '@angular/core';
import { IMenuItem } from '../interfaces/menu-item';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  selectedItem: IMenuItem | undefined;
  defaultMenu: IMenuItem[] = [
    {
      id: 1,
      name: 'خانه',
      title: 'Home',
      type: 'link',
      path: 'home',
      icon : 'assets/icon/menu-icon-mobile-5.svg',
      active : true,
      activeRoute : true,
    },
    {
      id: 2,
      name: 'فروشگاه',
      title: 'Store',
      type: 'dropdown',
      path: 'shop',
      icon : 'assets/icon/menu-icon-mobile-8.svg',
      active : true,
      activeRoute : true,
      iconDropDown:'assets/icon/chevron-white.webp',
      sub: [
        {
          id: 1,
          name: 'ربات معامله‌گر ATM',
          parentID: 2,
          title: 'ATM Expert',
          type: 'link',
          path: `shop/atm-expert`,
          active : true,
          activeRoute : true,
        },
      ],
    },
    // {
    //   id: 3,
    //   name: 'اخبار فارکس',
    //   title: 'Forex News',
    //   type: 'link',
    //   path: 'calendar',
    // icon : 'assets/icon/menu-icon-mobile-7.svg',
    // },
    {
      id: 4,
      name: 'بروکر ها',
      title: 'Brokers',
      type: 'link',
      path: 'brokers',
      icon : 'assets/icon/menu-icon-mobile-3.svg',
      active : true,
      activeRoute : true,
    },
    {
      id: 5,
      name: 'مدرسه ترید',
      title: 'Trade School',
      type: 'dropdown',
      icon : 'assets/icon/menu-icon-mobile-4.svg',
      active : true,
      activeRoute : false,
      iconDropDown:'assets/icon/chevron-white.webp',
      sub: [
        {
          id: 1,
          path: 'expert-advisor',
          name: 'ربات های معامله گر',
          parentID: 5,
          title: 'Trading Robots',
          type: 'link',
          active : true,
          activeRoute : true,
        },
        // {
        //   id: 2,
        //   path: 'tutorials',
        //   name: 'آموزش ها',
        //   parentID: 5,
        //   title: 'Tutorials',
        //   type: 'link',
        // },
        {
          id: 3,
          path: 'money-management',
          name: 'مدیریت سرمایه',
          parentID: 5,
          title: 'Money Management',
          type: 'link',
          active : true,
          activeRoute : true,
        },
      ],
    },
    {
      id: 6,
      name: 'مجله ایرانی اکسپرت',
      title: 'Irani Expert Magazine',
      type: 'dropdown',
      path: 'articles',
      icon : 'assets/icon/menu-icon-mobile-6.svg',
      active : true,
      activeRoute : true,
      sub: [
        {
          id: 1,
          path: 'articles',
          name: 'مقالات',
          parentID: 6,
          title: 'َArticles',
          type: 'link',
          active : true,
          activeRoute : true,
        },
        // {
        //   id: 2,
        //   path: 'podcast',
        //   name: 'پادکست',
        //   parentID: 6,
        //   title: 'Podcast',
        //   type: 'link',
        // },
      ],
    },
    {
      id: 6,
      name: 'کپی ترید',
      title: 'copy-trade',
      path: 'copy-trade',
      type: 'link',
      icon : 'assets/icon/menu-icon-mobile-11.webp',
      active : true,
      activeRoute : true,
    },
    {
      id: 7,
      name: 'چرا ما؟',
      title: 'about-us',
      path: 'about-us',
      type: 'link',
      icon : 'assets/icon/menu-icon-mobile-2.svg',
      active : true,
      activeRoute : true,
    },
  ];

  menuItems = new BehaviorSubject<IMenuItem[]>(this.defaultMenu);
  // navigation component has subscribed to this Observable
  menuItems$ = this.menuItems.asObservable();
}
