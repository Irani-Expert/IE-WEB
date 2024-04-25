import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { SingleBlog } from 'src/app/classes/interfaces/blog.interface';
import { BlogService } from 'src/app/classes/services/blog.service';
import { LinkService } from 'src/app/classes/services/link.service';
import { Utils } from 'src/app/classes/utils';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
  animations: [
    trigger('fadeInAnimation', [
      state('show', style({ opacity: 1 })), // Visible state
      state('hide', style({ opacity: 0, display: 'none' })), // Hidden state
      transition('* => *', animate('500ms ease-out')), // Animation duration and easing
    ]),
  ],
})
export class AboutUsComponent {
  constructor(
    private _linkService: LinkService,
    private _activatedRoute: ActivatedRoute,
    private _blogService: BlogService,
    private _meta: Meta,
    private _title: Title
  ) {
    this._linkService.createLink(`https://www.iraniexpert.com/about-us`);
    AppComponent.changeMainBg('creamy');
  }
  ngOnInit() {
    this.getBlog();
  }

  async getBlog() {
    const res = await this._blogService.getBlog('about-us', 'fa');
    if (res) {
      let blog = this._blogService._blog;
      this.setSeo(blog);
    }
  }

  setSeo(blog: SingleBlog | null) {
    let metaTitle = this._title.getTitle();
    let author: string = '';
    let keywords: string = '';
    let canonicalUrl: string = '';
    let metaDescription: string = '';
    let metaKeyWordsTemp: string = '';
    if (this._linkService.canonicalLinkValue instanceof HTMLLinkElement) {
      canonicalUrl = this._linkService.canonicalLinkValue.href;
    }

    if (blog) {
      author = blog.updatedByFirstName + ' ' + blog.updatedByLastName;
      keywords = blog.linkTags
        .map((it) => {
          return it.title;
        })
        .join(',');

      metaKeyWordsTemp =
        'راز فارکس, ایرانی اکسپرت, تعداد کاربر فعال, مقدار خرید و فروش,کلاهبرداری فارکس,موفقیت در فارکس,نقدینگی در فارکس,خرید و فروش در فارکس,اکسپرت رایگان فارکس,اعتبار فارکس,اهمیت رضایت مشتری,حفظ رضایت مشتری,سود ثابت از فارکس,ترید آنلاین فارکس,تماس با ما, چرا بازار فارکس';
      metaDescription = blog.metaDescription;
    }

    this._meta.updateTag({
      name: 'description',
      content: metaDescription || '',
    });
    this._meta.updateTag({
      name: 'author',
      content: author !== '' ? author : 'ایرانی اکسپرت',
    });
    this._meta.updateTag({
      name: 'keywords',
      // Add keywords Later when they completed them on panel
      content: metaKeyWordsTemp,
    });
    this._meta.updateTag({
      property: 'og:url',
      content: canonicalUrl,
    });
    this._meta.updateTag({
      property: 'og:title',
      content: metaTitle,
    });
    this._meta.updateTag({
      property: 'og:image',
      content: 'https://dl.iraniexpert.com//uploads/images/article/team1.webp',
    });
    this._meta.updateTag({
      property: 'og:description',
      content: metaDescription ? metaDescription : '',
    });
    this._meta.updateTag({
      property: 'twitter:site',
      content: canonicalUrl,
    });
    this._meta.updateTag({
      property: 'twitter:title',
      content: metaTitle,
    });
    this._meta.updateTag({
      property: 'twitter:description',
      content: metaDescription ? metaDescription : '',
    });
    this._meta.updateTag({
      property: 'twitter:image',
      content: 'https://dl.iraniexpert.com//uploads/images/article/team1.webp',
    });
  }

  ngOnDestroy() {
    AppComponent.changeMainBg('white');
  }

  get isBrowser() {
    return AppComponent.isBrowser.value;
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this._activatedRoute.queryParams.subscribe({
        next: (value) => {
          if (value['counselling']) {
            Utils.scrollToView('counselling', 'instant');
          }
        },
      });
    }, 1000);
  }
}
