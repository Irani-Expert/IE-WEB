import { Component, HostListener } from '@angular/core';
import { config } from 'src/app/shared/acordian/types';
import { AppComponent } from 'src/app/app.component';
import { Utils } from 'src/app/classes/utils';
import { Subscription, lastValueFrom } from 'rxjs';
import { HttpUrlEncodingCodec } from '@angular/common/http';
import { BlogService } from 'src/app/classes/services/blog.service';
import { Blog } from 'src/app/classes/interfaces/blog.interface';
import { FilterBlog } from 'src/app/classes/interfaces/filter-blog.interface';
import { ActivatedRoute } from '@angular/router';
import { ITags } from 'src/app/classes/interfaces/tags.interface';

@Component({
  selector: 'app-landing-blog-detail',
  templateUrl: './landing-blog-detail.component.html',
  styleUrls: ['./landing-blog-detail.component.scss'],
})
export class LandingBlogDetailComponent extends HttpUrlEncodingCodec {
  id: number = 0;
  // ===========[سرویس ها]==========
  itemsBlog: Blog[] = new Array<Blog>();
  blogFilter: FilterBlog = new FilterBlog();
  loading: boolean = true;
  title: string = '';

  async getItemBlogs(filters: FilterBlog) {
    return await lastValueFrom(
      await this.blogService.getBlogsFromApi(
        'Article/GetArticleByFilter',
        filters
      )
    );
  }

  routeSubscriber: Subscription | undefined;
  sendDataToChild = false;

  options: config = { multi: false };
  // =================[فیلتر]=============
  categoryDetailIcon: string = 'assets/icon/filter-icon-blog(detail).svg';
  categoryDetailHeader: string = 'دسترسی سریع';
  tags: ITags[];
  color = 'white';
  // =======================[رسپانسیو]==========

  device: 'sm' | 'lg' = 'lg';
  language: string = '';
  constructor(public blogService: BlogService, private _state: ActivatedRoute) {
    super();
    AppComponent.changeMainBg('creamy');
    this._state.url.subscribe((it) => {
      this.title = it[0].path.split('_').join(' ');

      this.language = it[1].path;
    });
  }
  async ngOnInit() {
    this.updateDeviceValue();

    if (await this.getItemBlogs(this.blogFilter)) {
      this.itemsBlog = this.blogService._paginatedBlogs?.items!;
      this.loading = false;
    }

    // this.getItemBlogs(this.blogFilter);
  }
  ngOnDestroy() {
    AppComponent.changeMainBg('white');
    this.routeSubscriber?.unsubscribe();
  }
  async ngAfterViewInit() {
    if (await this.getDetail(this.title, this.language)) {
      this.tags = this.blogService._blog!.sharpLinkTags;

      this.id = Number(this.blogService._blog?.id);

      this.sendDataToChild = true;
    }
  }
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
  async getDetail(title: string, language: string) {
    const apiRes = await this.blogService.getBlog(title, language);
    return apiRes;
  }

  get isBrowser() {
    return AppComponent.isBrowser.value;
  }
}
