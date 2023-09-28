import { Component } from '@angular/core';

@Component({
  selector: 'app-bot-facilities',
  templateUrl: './bot-facilities.component.html',
  styleUrls: ['./bot-facilities.component.scss'],
})
export class BotFacilitiesComponent {
  info: any[] = [
    {
      id: 1,
      isOpend: false,
      title: 'شخصی سازی استراتژی',
      description: 'مدیریت و اضافه کردن استراتژ  شخصی به صورت دقیق و حساب شده',
      class: '',
    },
    {
      id: 2,
      isOpend: false,
      title: 'مدیریت سرمایه',
      description:
        'با توجـه به میزان ریسـک پذیری  خود میتوانید تنظیمات مدیریت سرمایه خود را برنامه ریزی کنید',
      class: 'white-bg',
    },
    {
      id: 3,
      isOpend: false,
      title: 'نظارت انسانی',
      description:
        'با توجه به شرایط بازار میتوان تمامی فعالیت ها و پوزیشن ها را در لحظه   مدیریت کرد',
      class: 'white-bg',
    },
    {
      id: 4,
      isOpend: false,
      title: 'تشخیص اخبار',
      description:
        'قابلیـت تشخیـص اخبار با سطوح اهمیت مختلف به صورت اتومایتک اخبار با لول های اهمیت متفاوت ا',
      class: '',
    },
  ];
  enableClick(num: number) {
    if (window.innerWidth >= 600) {
      this.info[num].isOpend = !this.info[num].isOpend;
    }
  }
}
