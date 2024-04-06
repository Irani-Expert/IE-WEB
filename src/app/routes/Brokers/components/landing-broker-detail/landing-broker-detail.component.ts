import { Component, ViewChild } from '@angular/core';
import { DomSanitizer, Meta, SafeHtml } from '@angular/platform-browser';
import { TableBrokersComponent } from '../table-brokers/table-brokers.component';
import { imgNotFound } from 'src/app/classes/not-found';
import { AppComponent } from 'src/app/app.component';
import { ITags } from 'src/app/classes/interfaces/tags.interface';
import { BlogService } from 'src/app/classes/services/blog.service';
import { LinkService } from 'src/app/classes/services/link.service';
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
  categoryDetailIcon: string = 'assets/icon/filter-icon-blog(detail).svg';

  @ViewChild(TableBrokersComponent, { static: true })
  tableBrokers: TableBrokersComponent;
  constructor(
    private _meta: Meta,
    public blogService: BlogService,
    private _sanitizer: DomSanitizer,
    private _linkService: LinkService
  ) {
    AppComponent.changeMainBg('creamy');
    this._meta.updateTag({
      name: 'description',
      content:
        'بروکرها(Brokers) بستر یا کارگزارهایی هستند که در بازار مالی از طرف مشتریان مجاز به خرید و فروش ریالی و تعیین حد سود و ضرر برای سرمایه گذاران می باشد.',
    });
    this._meta.updateTag({
      name: 'author',
      content: 'مهرنوش کریمی ',
    });
    this._meta.updateTag({
      name: 'keywords',
      content:
        'بهترین بروکر ها برای ایرانیان-بهترین بروکر ها-مقایسه بروکر ها-بروکر های ایرانی- انواع بروکرها-بروکر های معتبر فارکس-کدام بروکر ها حساب سنتی دارند-بروکر ها با کمترین اسپرد-بروکر معتبر برای ایرانی ه-بروکرهای معتبر فارکس-بهترین بروکر ها برای کپی ترید-بروکر هایی که با ایران کار می کنند-ثبت نام در بروکر-بهترین بروکر فارکس برای ایرانی ها-بهترین بروکرهای فارکس در جهان',
    });
    this._linkService.createLink(`https://www.iraniexpert.com/brokers`);
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
    AppComponent.changeMainBg('white');
  }

  tags: ITags[];
  sendDataToChild = false;
  title: string = '';
  language: string = '';
  id: number = 0;
  articleHtml: SafeHtml;

  async ngAfterViewInit() {
    if (await this.getDetail('Broker', 'fa')) {
      this.tags = this.blogService._blog!.sharpLinkTags;

      this.id = Number(this.blogService._blog?.id);
      this.articleHtml = this._sanitizer.bypassSecurityTrustHtml(
        this.blogService._blog!.description
      );
      this.sendDataToChild = true;
    }
  }

  async getDetail(title: string, language: string) {
    const apiRes = await this.blogService.getBlog(title, language);
    return apiRes;
  }
}
const brokersInHero = ['ویندزور', 'آلپاری', 'آی اف سی مارکتس'];
