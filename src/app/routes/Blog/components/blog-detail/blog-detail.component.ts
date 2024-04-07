import { Component, HostListener, Input } from '@angular/core';
import { DomSanitizer, Meta, SafeHtml, Title } from '@angular/platform-browser';
import { AppComponent } from 'src/app/app.component';
import { SingleBlog } from 'src/app/classes/interfaces/blog.interface';
import { RouteService } from 'src/app/classes/services/route.service';

import { Utils } from 'src/app/classes/utils';
import { FAQ } from 'src/app/routes/Home/components/questions/interfaces/faq-interfce';
import { environment } from 'src/environments/environment.dev';
class SingleBlogModel implements SingleBlog {
  colorCode: string;
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
  color: string;

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
    private _meta: Meta,
    private _routeService: RouteService
  ) {}

  ngOnInit() {
    this.setPage();

    this.setArticleDetail();

    var titleData = {
      routename: this.articleModel.title,
    };
    this._routeService.changePersianRouteName(titleData);

    if (this.articleModel.colorCode == null || undefined) {
      this.color = '#0066FF';
    } else {
      this.color = this.articleModel.colorCode;
    }

    if (this.articleModel.studyTime == null || undefined) {
      this.articleModel.studyTime = '00:15:00';
    }
  }
  setPage() {
    if (AppComponent.isBrowser.value) {
      this.updateDeviceValue();
      Utils.scrollTopWindow();
    }
  }
  // ngAfterViewInit() {}
  // ngOnDestroy() {}
  // ngOnInit() {}
  // ngDoCheck() {}
  setArticleDetail() {
    let keywords = '';
    this.articleModel.linkTags.forEach((item) => {
      keywords += `${item.title.replace(/#/g, '')},`;
    });
    this._meta.updateTag({
      name: 'description',
      content: this.articleModel.metaDescription,
    });
    this._meta.updateTag({
      name: 'author',
      content:
        this.articleModel.updatedByFirstName +
        ' ' +
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
  }
}
