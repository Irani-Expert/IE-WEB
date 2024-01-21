import { Component, HostListener, Input } from '@angular/core';
import { DomSanitizer, Meta, SafeHtml, Title } from '@angular/platform-browser';
import { AppComponent } from 'src/app/app.component';
import { SingleBlog } from 'src/app/classes/interfaces/blog.interface';
import { LinkService } from 'src/app/classes/services/link.service';
import { Utils } from 'src/app/classes/utils';
import { FAQ } from 'src/app/routes/Home/components/questions/interfaces/faq-interfce';
import { environment } from 'src/environments/environment.dev';
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
  linkTags: [{ title: string; value: number }] = [{ title: '', value: 0 }];
  sharpLinkTags: [{ title: string; value: number }] = [{ title: '', value: 0 }];
  faQs: FAQ[] = new Array<FAQ>();
}

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss'],
})
export class BlogDetailComponent {
  // Article Model
  @Input('data') articleModel: SingleBlogModel;
  articleHtml: SafeHtml;
  contentUrl = environment.contentUrl;
  // =======================[رسپانسیو]==========

  device: 'sm' | 'lg' = 'lg';
  color = '#0066FF';

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.updateDeviceValue();
  }
  updateDeviceValue() {
    if (AppComponent.isBrowser.value) {
      if (Utils.isTablet()) {
        this.device = 'sm';
      } else {
        this.device = 'lg';
      }
    }
  }
  // <!-- ========================[ایتم عکس]============== -->
  constructor(
    private _sanitizer: DomSanitizer,
    private _title: Title,
    private _linkService: LinkService,
    private _meta: Meta
  ) {}

  ngOnInit() {
    this.setPage();

    this.setArticleDetail();
  }
  setPage() {
    if (AppComponent.isBrowser.value) {
      this.updateDeviceValue();
      Utils.scrollTopWindow();
    }
  }
  ngAfterViewInit() {}
  // ngOnDestroy() {}
  // ngOnInit() {}
  // ngDoCheck() {}
  setArticleDetail() {
    let keywords = '';
    this.articleModel.linkTags.forEach((item) => {
      keywords += `${item.title.replace(/#/g, '')},`;
    });
    let href = this.articleModel.browserTitle.split(' ').join('-');
    let lang = this.articleModel.isRTL ? 'fa' : 'en';
    this._linkService.createLink(
      `https://www.iraniexpert.com/articles/${href}/${lang}`
    );
    this._meta.updateTag({
      name: 'description',
      content: this.articleModel.metaDescription,
    });
    this._meta.updateTag({
      name: 'author',
      content:
        this.articleModel.updatedByFirstName +
        '_' +
        this.articleModel.updatedByLastName,
    });
    this._meta.updateTag({
      name: 'keywords',
      content: keywords,
    });
    this._title.setTitle(this.articleModel.title);
    // Sanitize Description for HTML
    this.articleHtml = this._sanitizer.bypassSecurityTrustHtml(
      this.articleModel.description
    );
    // ==========={بردر جدول}=====
    const table = document.getElementsByTagName('table');
     setTimeout(()=> {
      for(let i = 0; i >= table.length ;i++) {
        table[i].className = 'table-articles'
      }    
     })
  }
}
