import { Component, ViewChild } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { TableBrokersComponent } from '../table-brokers/table-brokers.component';
import { imgNotFound } from 'src/app/classes/not-found';
import { AppComponent } from 'src/app/app.component';
interface BrokerImgCard<T> {
  id: T;
  img: string;
  title: string;
  link: string;
}
@Component({
  selector: 'app-landing-broker-detail',
  templateUrl: './landing-broker-detail.component.html',
  styleUrls: ['./landing-broker-detail.component.scss'],
})
export class LandingBrokerDetailComponent {
  mainClass =
    'm-0 p-0 gap-0 flex flex-col min-h-screen overflow-hidden lg:overflow-y-hidden lg:overflow-x-auto';
  main: HTMLElement;
  @ViewChild(TableBrokersComponent, { static: true })
  tableBrokers: TableBrokersComponent;
  constructor(private _meta: Meta) {
    if (AppComponent.isBrowser.value) {
      this.main = document.body.getElementsByTagName('main')[0];
      this.main.className = `bg-[#FAFAFA] ${this.mainClass}`;
    }
    this._meta.updateTag({
      name: 'description',
      content: 'بروکرها(Brokers) بستر یا کارگزارهایی هستند که در بازار مالی از طرف مشتریان مجاز به خرید و فروش ریالی و تعیین حد سود و ضرر برای سرمایه گذاران می باشد.',
    });
    this._meta.updateTag({
      name: 'author',
      content: 'خانم کریمی ',
    });
    this._meta.updateTag({
      name: 'keywords',
      content: 'بهترین بروکر ها برای ایرانیان-بهترین بروکر ها-مقایسه بروکر ها-بروکر های ایرانی- انواع بروکرها-بروکر های معتبر فارکس-کدام بروکر ها حساب سنتی دارند-بروکر ها با کمترین اسپرد-بروکر معتبر برای ایرانی ه-بروکرهای معتبر فارکس-بهترین بروکر ها برای کپی ترید-بروکر هایی که با ایران کار می کنند-ثبت نام در بروکر-بهترین بروکر فارکس برای ایرانی ها-بهترین بروکرهای فارکس در جهان',
    });
  }
  get brokersInHero() {
    let brokers = this.tableBrokers.items.filter((it) =>
      brokersInHero.includes(it.name)
    );
    let arr = new Array<BrokerImgCard<number>>();
    brokers.forEach((it, counter) => {
      let item: BrokerImgCard<number> = {
        id: counter + 1,
        img: it.logoSrc !== '' ? it.logoSrc : imgNotFound(),
        title: it.name,
        link: it.linkSite!,
      };
      arr.push(item);
    });
    return arr;
  }
  ngOnInit() {}
  get loadTable() {
    return this.tableBrokers.tableLoaded;
  }
  ngOnDestroy() {
    if (AppComponent.isBrowser.value) {
      this.main.className = this.mainClass;
    }
  }
}
const brokersInHero = ['ویندزور', 'آلپاری', 'آی اف سی مارکتس'];
