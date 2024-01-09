import { Component } from '@angular/core';

@Component({
  selector: 'app-copy-trade',
  templateUrl: './copy-trade.component.html',
  styleUrls: ['./copy-trade.component.scss'],
})
export class CopyTradeComponent {
  qA = [
    'ATM ربات معامله گر ',
    'درآمد دلاری',
    'آموزش فارکس',
    'آموزش ارز دیجیتال',
    'ترید چیست',
    'انتخاب بهترین بروکر',
    'اصول انتخاب بروکر',
  ];
  listElems: Array<any> = [
    {
      title: 'کپی تریدینگ (copytrading) به زبان ساده چیست؟',
      id: 1,
      sub: [
        {
          title: 'مزایا کپی تریدینگ',
          id: 2,
        },
        { title: 'معایب کپی تریدینگ', id: 3 },
      ],
      active: false,
    },
    {
      title: 'میزان سود و ضرر در سیستم کپی ترید به چه صورت می باشد؟',
      id: 4,
      sub: [
        {
          title: ' میزان سود (Profit)',
          id: 5,
        },
        { title: 'میزان ضرر (Drawdown)', id: 6 },
        { title: 'نسبت موفقیت (WinRate)', id: 7 },
      ],
      active: false,
    },
    {
      title: 'در کپی ترید انتخاب بهترین تریدرمرجع به چه نحوی است؟',
      id: 8,
      sub: [
        {
          title: ' بررسی استیتمنت یا سابقه عملکرد',
          id: 9,
        },
        { title: 'مدیریت ریسک', id: 10 },
        { title: 'استراتژی ترید', id: 11 },
        { title: 'تایم فریم معاملات', id: 12 },
        { title: 'میزان سود و ضرر', id: 13 },
        { title: 'شفافیت', id: 14 },
        { title: 'محدودیت‌ها و شرایط', id: 15 },
      ],
      active: false,
    },
    {
      title: 'بهترین راه کاهش ریسک ضرر در فارکس با استفاده از کپی تریدینگ',
      id: 16,
      active: false,
    },
    {
      title: ' معرفی بهترین پلتفرهای کپی تریدینگ در فارکس',
      id: 17,
      sub: [
        {
          title: 'پلتفرم کپی تریدینگ ایتورو (eToro)',
          id: 18,
        },
        { title: 'کپی ترید باZuluTrade ', id: 19 },
        { title: 'کپی تریدینگ سایت MQL ', id: 20 },
      ],
      active: false,
    },
    {
      title: ' معرفی بهترین پلتفرهای کپی تریدینگ در فارکس',
      id: 21,
      sub: [
        {
          title: 'تفاوت کپی ترید در متاتریدر 4 و متاتریدر 5',
          id: 22,
        },
      ],
      active: false,
    },
    {
      title: 'در کپی ترید انتخاب کدام بروکر بهتر است؟ ',
      id: 23,
      active: false,
    },
    {
      title: 'سیستم کپی ترید ایرانی اکسپرت',
      id: 24,
      active: false,
    },
    {
      title: 'جمع‌بندی',
      id: 25,
      active: false,
    },
  ];
}
