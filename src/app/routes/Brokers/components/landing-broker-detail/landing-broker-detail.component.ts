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
      content: '',
    });
    this._meta.updateTag({
      name: 'author',
      content: '',
    });
    this._meta.updateTag({
      name: 'keywords',
      content: '',
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
