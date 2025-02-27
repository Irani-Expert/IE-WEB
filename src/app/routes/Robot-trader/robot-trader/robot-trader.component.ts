import { Component } from '@angular/core';
import { DomSanitizer, Meta, SafeHtml } from '@angular/platform-browser';
import { AppComponent } from 'src/app/app.component';
import { ITags } from 'src/app/classes/interfaces/tags.interface';
import { BlogService } from 'src/app/classes/services/blog.service';
import { LinkService } from 'src/app/classes/services/link.service';
import { environment } from 'src/environments/environment.dev';

@Component({
  selector: 'app-robot-trader',
  templateUrl: './robot-trader.component.html',
  styleUrls: ['./robot-trader.component.scss'],
})
export class RobotTraderComponent {
  color: string;
  categoryDetailIcon: string = 'assets/icon/filter-icon-blog(detail).svg';

  constructor(
    private _meta: Meta,
    public blogService: BlogService,
    private _sanitizer: DomSanitizer,
    private _linkService: LinkService
  ) {
    this._linkService.createLink(`https://www.iraniexpert.com/expert-advisor`);

    AppComponent.changeMainBg('creamy');
  }
  tags: ITags[];
  contentUrl = environment.contentUrl;
  sendDataToChild = false;
  title: string = '';
  language: string = '';
  id: number = 0;
  articleHtml: SafeHtml;

  async ngAfterViewInit() {
    // if (await this.getDetail('expert-advisor', 'fa')) {


    // }
    // ======[متاتگ ها]========
    if (await this.getDetailByID(1062)) {
      this.tags = this.blogService._blog!.sharpLinkTags;

      this.id = Number(this.blogService._blog?.id);
      this.articleHtml = this._sanitizer.bypassSecurityTrustHtml(
        this.blogService._blog!.description
      );
      this.sendDataToChild = true;
      if (this.blogService._blog!.studyTime == null || undefined) {
        this.blogService._blog!.studyTime = '00:15:00';
      }

      if (this.blogService._blog!.colorCode == null || undefined) {
        this.color = '#0066FF';
      } else {
        this.color = this.blogService._blog!.colorCode;
      }

      let keywords = '';
      this.blogService._blog!.linkTags.forEach((item) => {
        keywords += `${item.title.replace(/#/g, '')},`;
      });
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
        content:keywords,
      });
    }
  }

  async getDetail(title: string, language: string) {
    const apiRes = await this.blogService.getBlog(title, language);
    return apiRes;
  }
  async getDetailByID(id : number) {
    const apiRes = await this.blogService.getBlogById(id);
    return apiRes;
  }

  listElems: Array<any> = [
    {
      title: 'انواع ربات های معامله گر',
      id: 1,
      active: false,
    },
    {
      title: 'مزایا و معایب استفاده از ربات های معامله گر چیست؟',
      id: 2,
      // sub: [
      //   {
      //     title: 'مزایا ربات های معاملاتی',
      //     id: 3,
      //   },
      //   { title: 'معایب ربات های معاملاتی کریپتو', id: 4 },
      // ],
      active: false,
    },
    {
      title: 'معیارهای عملکرد ربات تریدر',
      id: 3,
      active: false,
    },
    {
      title: 'نحوه کار با ربات های معامله گر',
      id: 4,
      // sub: [
      //   {
      //     title: 'مرحله 1: یک ربات را انتخاب کنید',
      //     id: 6,
      //   },
      //   {
      //     title: 'مرحله 2: ربات را نصب کنید',
      //     id: 6,
      //   },
      //   {
      //     title: 'مرحله 3: ربات را پیکربندی کنید',
      //     id: 6,
      //   },
      //   {
      //     title: 'مرحله 4: ربات را تست کنید',
      //     id: 6,
      //   },
      //   {
      //     title: 'مرحله 5: معامله با ربات را شروع کنید',
      //     id: 6,
      //   },
      // ],
      active: false,
    },
    {
      title: 'ساخت ربات معامله گر',
      id: 5,
      // sub: [
      //   {
      //     title: 'تعریف استراتژی معاملاتی',
      //     id: 13,
      //   },
      //   {
      //     title: 'پیاده سازی استراتژی در کد',
      //     id: 14,
      //   },
      // ],
      active: false,
    },
    {
      title: 'ربات های معامله گر ایرانی',
      id: 6,
      // sub: [
      //   {
      //     title: 'ربات ملیچگ',
      //     id: 16,
      //   },
      //   {
      //     title: 'ATA ربات تریدر',
      //     id: 17,
      //   },
      // ],
      active: false,
    },
    {
      title:
        'چگونه می‌توان بهترین ربات معامله گر را بر اساس نیازهای خود انتخاب کرد',
      id: 7,
      // sub: [
      //   {
      //     title: '‏1. استراتژی و تاریخچه عملکرد',
      //     id: 18,
      //   },
      //   {
      //     title: '‏2. قابلیت سفارشی سازی',
      //     id: 18,
      //   },
      //   {
      //     title: '‏3. رابط کاربر پسند',
      //     id: 18,
      //   },
      //   {
      //     title: '‏4. پشتیبانی مشتری',
      //     id: 18,
      //   },
      //   {
      //     title: '‏5. انتظارات سود واقعی',
      //     id: 18,
      //   },
      // ],
      active: false,
    },
    {
      title: 'اشتباهات رایج در هنگام استفاده از ربات های معاملاتی',
      id: 8,

      active: false,
    },
  ];
  ngOnDestroy() {
    AppComponent.changeMainBg('white');
  }

  get isBrowser() {
    return AppComponent.isBrowser.value;
  }
}
