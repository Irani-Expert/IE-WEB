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
    },
    {
      id: 2,
      name: 'فروشگاه',
      title: 'Store',
      type: 'dropdown',
      path: 'products',
      sub: [
        {
          id: 1,
          name: 'ربات معامله‌گر ATM',
          parentID: 2,
          title: 'ATM Expert',
          type: 'link',
          path: `/products/1/اکسپرت_ATM`,
        },
      ],
    },
    // {
    //   id: 3,
    //   name: 'اخبار فارکس',
    //   title: 'Forex News',
    //   type: 'link',
    //   path: 'calendar',
    // },
    {
      id: 4,
      name: 'بروکر ها',
      title: 'Brokers',
      type: 'dropdown',
      path: 'brokers',
      sub: [
        {
          id: 1,
          path: 'AMarkets',
          name: 'AMarkets',
          parentID: 4,
          title: 'AMarkets',
          type: 'link',
        },
        {
          id: 2,
          path: 'OpoFn',
          name: 'OpoFn',
          parentID: 4,
          title: 'OpoFn',
          type: 'link',
        },
      ],
    },
    // {
    //   id: 5,
    //   name: 'مدرسه ترید',
    //   title: 'Trade School',
    //   type: 'dropdown',
    //   sub: [
    //     {
    //       id: 1,
    //       path: 'trading-robots',
    //       name: 'ربات های معامله گر',
    //       parentID: 5,
    //       title: 'Trading Robots',
    //       type: 'link',
    //     },
    //     {
    //       id: 2,
    //       path: 'tutorials',
    //       name: 'آموزش ها',
    //       parentID: 5,
    //       title: 'Tutorials',
    //       type: 'link',
    //     },
    //     {
    //       id: 3,
    //       path: 'money-management',
    //       name: 'مدیریت سرمایه',
    //       parentID: 5,
    //       title: 'Money Management',
    //       type: 'link',
    //     },
    //   ],
    // },
    {
      id: 6,
      name: 'مجله ایرانی اکسپرت',
      title: 'Irani Expert Magazine',
      type: 'dropdown',
      sub: [
        {
          id: 1,
          path: 'blogs',
          name: 'مقالات',
          parentID: 6,
          title: 'َArticles',
          type: 'link',
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
      id: 7,
      name: 'چرا ما؟',
      title: 'Why Us?',
      type: 'dropdown',
      sub: [
        {
          id: 1,
          path: 'about-us?customer-satisfaction',
          name: 'رضایت مشتریان',
          parentID: 7,
          title: 'Customer Satisfaction',
          type: 'link',
        },
        {
          id: 2,
          path: 'about-us?contact-us',
          name: 'تماس با ما',
          parentID: 7,
          title: 'Contact Us',
          type: 'link',
        },
        {
          id: 3,
          path: 'about-us',
          name: 'درباره ما',
          parentID: 7,
          title: 'About Us',
          type: 'link',
        },
        {
          id: 4,
          path: 'about-us?consulting',
          name: 'مشاوره رایگان',
          parentID: 7,
          title: 'Free Consulting',
          type: 'link',
        },
      ],
    },
  ];

  menuItems = new BehaviorSubject<IMenuItem[]>(this.defaultMenu);
  // navigation component has subscribed to this Observable
  menuItems$ = this.menuItems.asObservable();
}
