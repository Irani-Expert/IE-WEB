import { Component } from '@angular/core';
import { DomSanitizer, Meta, SafeHtml } from '@angular/platform-browser';
import { AppComponent } from 'src/app/app.component';
import { ITags } from 'src/app/classes/interfaces/tags.interface';
import { BlogService } from 'src/app/classes/services/blog.service';
import { LinkService } from 'src/app/classes/services/link.service';
import { environment } from 'src/environments/environment.dev';

@Component({
  selector: 'app-copy-trade',
  templateUrl: './copy-trade.component.html',
  styleUrls: ['./copy-trade.component.scss'],
})
export class CopyTradeComponent {
  color: string;
  constructor(
    private _meta: Meta,
    public blogService: BlogService,
    private _sanitizer: DomSanitizer,
    private _linkService: LinkService
  ) {
    this._linkService.createLink(`https://www.iraniexpert.com/copy-trade`);
  }

  tags: ITags[];

  contentUrl = environment.contentUrl;
  sendDataToChild = false;
  title: string = '';
  language: string = '';
  id: number = 0;
  articleHtml: SafeHtml;

  async ngAfterViewInit() {
    if (await this.getDetail('copy-trade', 'fa')) {
      this.tags = this.blogService._blog!.sharpLinkTags;

      this.id = Number(this.blogService._blog?.id);
      this.articleHtml = this._sanitizer.bypassSecurityTrustHtml(
        this.blogService._blog!.description
      );
      let keywords = '';
      this.blogService._blog!.linkTags.forEach((item) => {
        keywords += `${item.title.replace(/#/g, '')},`;
      });
      // =======[متاتگ ها]======
      this._meta.updateTag({
        name: 'description',
        content: this.blogService._blog!.metaDescription,
      });
      this._meta.updateTag({
        name: 'author',
        content:
          this.blogService._blog!.updatedByFirstName +
          this.blogService._blog!.updatedByLastName,
      });
      this._meta.updateTag({
        name: 'keywords',
        content:
          'کپی ترید-کپی ترید چیست-اکسپرت کپی ترید-کپی ترید فارکس-آموزش کپی ترید-کپی ترید در متاتریدر-سایت کپی ترید-چگونه کپی ترید کنیم-اکسپرت کپی ترید متاتریدر 5-کپی ترید فارکس-کپی ترید crypto-بهترین کپی تریدر-درامد کپی ترید-کپی ترید در صرافی -کپی ترید در آلپاری-اکسپرت کپی ترید',
        // content: keywords,
      });
      this.sendDataToChild = true;
    }

    if (this.blogService._blog!.studyTime == null || undefined) {
      this.blogService._blog!.studyTime = '00:15:00';
    }

    if (this.blogService._blog!.colorCode == null || undefined) {
      this.color = '#0066FF';
    } else {
      this.color = this.blogService._blog!.colorCode;
    }
  }

  async getDetail(title: string, language: string) {
    const apiRes = await this.blogService.getBlog(title, language);
    return apiRes;
  }

  ngOnInit() {
    AppComponent.changeMainBg('creamy');
  }
  ngOnDestroy() {
    AppComponent.changeMainBg('white');
  }

  listElems: Array<any> = [
    {
      title: 'کپی تریدینگ (copytrading) به زبان ساده چیست؟',
      id: 0,

      active: false,
    },
    {
      title: 'مزایا و معایب کپی تریدینگ      ',
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
      title: ' آموزش کپی ترید در متاتریدر4 و 5 ',
      id: 21,

      active: false,
    },
    {
      title: 'تفاوت کپی ترید در متاتریدر 4 و متاتریدر 5',
      id: 22,

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
  blue_cards: Icardlist[] = [
    {
      header: ' (eToro)پلتفرم کپی تریدینگ ایتورو',
      text: ' eToro یک پلتفرم معاملاتی آنلاین با بیش از 30 میلیون کاربر فعال در جهان است که به شما امکان می‌دهد تا از طریق معاملات آنلاین در سهام، ارزها، کریپتوکارنسی‌ها، نفت، طلا و سایر دارایی‌ها سرمایه‌گذاری کنید.      یکی از ویژگی‌های برجسته eToro، امکان کپی ترید (Copy Trading)  آن است است. هزینه کارمز خدمات آن نسبت به سایر پلتفرم ها کمتر است که کاربران زیادی را جذب خود کرده است.',
      id: '18',
    },
    {
      header: 'ZuluTrade کپی ترید با',
      text: 'ZuluTrade یکی دیگر از سایت‌های محبوب ارائه خدمات کپی ترید است که از یک پلتفرم کاربر پسند با ارائه انواع ابزارهای تحلیلی، نمودارها و اطلاعات بازار بهره می برد. این پلتفرم با بروکرهای مختلف همکاری می‌کند و یک خدمات دهنده معاملات اجتماعی است.',
      id: '19',
    },
    {
      header: 'MQL کپی تریدینگ سایت',
      text: 'MQL ، نقش مهمی در ارائه امکانات کپی تریدینگ فارکس از طریق پلتفرم متاتریدر ایفا می‌کند. امروزه متاتریدر، به‌عنوان محبوبترین پلتفرم کپی ترید فارکس محسوب می شود زیرا از طریق آن به سادگی می‌توانید حساب خود را به ارائه دهندگان سیگنال‌های معاملاتی اتصال دهید و در صورت تمایل، معاملات مشابهی در حساب خود اجرا کنید. همچنین، MQL این امکان را فراهم کرده است که تریدران بتوانند استراتژی‌های معاملاتی خود را با استفاده ازاکسپرت) (Expert Advisors، به‌صورت اتوماتیک پیاده‌سازی کنند. این اکسپرت‌ها می‌توانند به‌صورت خودکار معاملات را بر اساس قوانین و شرایط تریدر انجام دهند.',
      id: '20',
    },
  ];
}
interface Icardlist {
  header: string;
  text: string;
  id: string;
}
