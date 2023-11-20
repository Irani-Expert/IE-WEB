import { Component } from '@angular/core';
import { IProducts } from '../../../Shop/components/detail-card/products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  orderTitle: string[] = [
    'پربازدیدترین ها',
    'پرفروش ترین ها',
    'پیشنهاد خریداران',
    'منتخب',
    'محصولات رایگان',
  ];
  productModel: IProducts[] = [
    {
      id: 0,
      title: ' ربات معامله گر فارکس ATM ',
      description:
        '        اکسپرت ATM یا Automated Trading Machine ربات تریدر بازار فارکس FOREX است  که از اول فوریه 2022 روی اکثر بروکرها شامل حساب Real و Demo با سرمایه های',
      rate: 4,
      viewsCount: 400,
      minPrice: 20,
      linkTag: [
        {
          id: 0,
          name: 'iraniExpert',
          icon: '../../../../../assets/img/icons8-instagram-verification-badge-144.png',
        },
        { id: 2, name: 'ترید', icon: '' },
        { id: 3, name: 'اکسپرت', icon: '' },
        { id: 4, name: 'فارکس', icon: '' },
        { id: 5, name: 'ATM ربات معامله گر', icon: '' },
      ],
    },
  ];
}
