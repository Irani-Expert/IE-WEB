import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-landig-money-m',
  templateUrl: './landig-money-m.component.html',
  styleUrls: ['./landig-money-m.component.scss'],
})
export class LandigMoneyMComponent {
  constructor(private _meta: Meta) {
    this._meta.addTag({
      name: 'description',
      content:
        'مدیریت سرمایه(money management) در بازارهای مالی علمی است که در فعالیت های سرمایه گذاری میتوان ریسک را کنترل کرد و یک استراتژی معاملاتی برای سرمایه اولیه تولید کرد. ',
    });
    this._meta.addTag({
      name: 'author',
      content: 'آقای مهدی اکبر',
    });
    this._meta.addTag({
      name: 'keywords',
      content:
        'مدیریت سرمایه گذاری پیشرفته,مدیریت سرمایه گذاری استراتژیک,مدیریت ریسک و سرمایه در ترید, فرمول مدیریت سرمایه در ترید, مدیریت سرمایه در ترید, مدیریت سرمایه فارکس, مدیریت ریسک و سرمایه گذاری ,مدیریت سرمایه به زبان ساده',
    });
  }
}
