import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { SingleBlog } from 'src/app/classes/interfaces/blog.interface';
import { FAQ } from 'src/app/routes/Home/components/questions/interfaces/faq-interfce';

class SingleBlogModel implements SingleBlog {
  createDate: string = '';
  id: number = 0;
  title: string = '';
  description: string = '';
  groupID: number = 0;
  group: string = '';
  groupIcon: string = '';
  groupIconExists: boolean = false;
  brief: string = '';
  publishDate: string = '';
  cardImagePath: string = '';
  viewsCount: number = 0;
  rate: number = 0;
  commentCount: number = 0;
  updatedByFirstName: string = '';
  updatedByLastName: string = '';
  authorIconPath: string = '';
  studyTime: string = '';
  authorIconExists: boolean = false;
  fileExists: boolean = false;
  isRTL: boolean = false;
  metaDescription: string = '';
  browserTitle: string = '';
  favoriteCount: number = 0;
  linkTags: [{ title: string; value: number }] = [{ title: '', value: 0 }];
  sharpLinkTags: [{ title: string; value: number }] = [{ title: '', value: 0 }];
  faQs: FAQ[] = new Array<FAQ>();
}

@Component({
  selector: 'app-articles-money',
  templateUrl: './articles-money.component.html',
  styleUrls: ['./articles-money.component.scss'],
})



export class ArticlesMoneyComponent {

  articleHtml: SafeHtml;

  @Input('data') articleModel: SingleBlogModel = new SingleBlogModel();

  constructor(
    private _sanitizer : DomSanitizer
  ){
  
  }
  
  color = '#ECECEC';

  listElems: Array<any> = [
    {
      title: 'مدیریت سرمایه چیست و چرا در بازارهای مالی مهم است؟',
      id: 1,
      sub: [
        {
          title: 'چرا مدیریت سرمایه  برای معامله‌گران مهم است؟',
          id: 2,
        },
        { title: 'مدیریت سرمایه مناسب چه افرادی است؟', id: 3 },
      ],
      active: false,
    },
    {
      title: 'اهمیت و اهداف مدیریت سرمایه برای ترید در بازار فارکس',
      id: 4,
      sub: [
        {
          title: 'چرا باید از مدیریت سرمایه در ترید بازار فارکس استفاده کرد',
          id: 5,
        },
      ],
      active: false,
    },
    {
      title:
        'اشتباهات رایج معامله‌گران هنگام مدیریت سرمایه چیست وچگونه می‌توان پیشگیری کرد؟',
      id: 6,
      active: false,
    },
    {
      title: 'تقسیم سرمایه در بازار فارکس به چه صورت است؟',
      id: 7,
      active: false,
    },
    {
      title: 'مهم ترین فاکتور مدیریت سرمایه در بازار فارکس چیست؟',
      id: 8,
      active: false,
    },
    {
      title: 'حداقل سرمایه در بازار فارکس به چه صورت است؟',
      id: 9,
      sub: [
        {
          title: 'استراتژی معاملاتی',
          id: 9,
        },
        {
          title: 'تجربه ',
          id: 9,
        },
        {
          title: 'بروکر',
          id: 9,
        },
      ],
      active: false,
    },
    {
      title: 'بهترین روش مدیریت سرمایه در ترید',
      id: 13,
      active: false,
    },
    {
      title: 'انواع استراتژی مدیریت سرمایه چیست؟',
      id: 14,
      active: false,
    },
    {
      title: 'عوامل مهم در سیستم مدیریت سرمایه چیست؟',
      id: 15,
      active: false,
    },
    {
      title: 'عدم استفاده از مدیریت ریسک چه عواقبی دارد؟',
      id: 16,
      active: false,
    },
    {
      title:
        'عملکرد موثر تریدرها برای بهبود مدیریت سرمایه و بازدهی بیشتر استفاده میکنند؟',
      id: 17,
      active: false,
    },
    {
      title: 'تحلیل مالی(سود و زیان) برای مدیریت سرمایه به چه صورت است؟',
      id: 18,
      active: false,
    },
    {
      title: 'اجرای استراتژی مدیریت سرمایه برای محدود کردن ضررهای احتمالی',
      id: 19,
      active: false,
    },
  ];
  ngOnInit(){
    this.articleHtml = this._sanitizer.bypassSecurityTrustHtml(
      this.articleModel.description
    );
  }
}
