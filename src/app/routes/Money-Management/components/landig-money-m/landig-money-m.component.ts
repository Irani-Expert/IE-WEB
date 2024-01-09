import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-landig-money-m',
  templateUrl: './landig-money-m.component.html',
  styleUrls: ['./landig-money-m.component.scss'],
})
export class LandigMoneyMComponent {
  mainClass =
    'm-0 p-0 gap-0 flex flex-col min-h-screen overflow-hidden lg:overflow-y-hidden lg:overflow-x-auto';
  main: HTMLElement;
  constructor(private _meta: Meta) {
    if (AppComponent.isBrowser.value) {
      this.main = document.body.getElementsByTagName('main')[0];
      this.main.className = `bg-[#FAFAFA] ${this.mainClass}`;
    }
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
  ngOnDestroy() {
    if (AppComponent.isBrowser.value) {
      this.main.className = this.mainClass;
    }
  }
}
