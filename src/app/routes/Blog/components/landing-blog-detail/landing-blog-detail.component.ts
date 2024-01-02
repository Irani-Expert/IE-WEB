import { Component, HostListener } from '@angular/core';
import { config } from 'src/app/shared/acordian/types';
import { AppComponent } from 'src/app/app.component';
import { Utils } from 'src/app/classes/utils';
import { Subscription } from 'rxjs';
import { HttpUrlEncodingCodec } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from 'src/app/classes/services/blog.service';
import { Blog } from 'src/app/classes/interfaces/blog.interface';
import { FilterBlog } from 'src/app/classes/interfaces/filter-blog.interface';

@Component({
  selector: 'app-landing-blog-detail',
  templateUrl: './landing-blog-detail.component.html',
  styleUrls: ['./landing-blog-detail.component.scss'],
})
export class LandingBlogDetailComponent extends HttpUrlEncodingCodec {
  mainClass =
    'm-0 p-0 gap-0 flex flex-col min-h-screen overflow-hidden lg:overflow-y-hidden lg:overflow-x-auto';
  main: HTMLElement;
  // ===========[سرویس ها]==========
  itemsBlog: Blog[] = new Array<Blog>();
  blogFilter: FilterBlog = new FilterBlog();
  loading: boolean = true;

  async getItemBlogs(filters: FilterBlog) {
    (
      await this.blogService.getBlogsFromApi(
        'Article/GetArticleByFilter',
        filters
      )
    ).subscribe({
      next: (x) => {
        if (this.blogService._paginatedBlogs?.items) {
          this.itemsBlog = this.blogService._paginatedBlogs?.items;
          this.loading = false;
        }
      },
    });
  }

  //Logic Get Data
  // private destroyed$ = new Subject();
  routeSubscriber: Subscription | undefined;
  sendDataToChild = false;

  options: config = { multi: false };

  // =================[فیلتر]=============
  categoryDetailIcon: string = 'assets/img/filter-icon-blog(detail).svg';
  categoryDetailHeader: string = 'دسترسی سریع';

  // =======================[رسپانسیو]==========

  device: 'sm' | 'lg' = 'lg';
  constructor(
    public blogService: BlogService,
    private activatedRoute: ActivatedRoute
  ) {
    super();
    if (AppComponent.isBrowser.value) {
      this.main = document.body.getElementsByTagName('main')[0];
      this.main.className = `bg-[#FAFAFA] ${this.mainClass}`;
    }
  }
  async ngOnInit() {
    this.updateDeviceValue();
    this.getItemBlogs(this.blogFilter);
    this.routeSubscriber = this.activatedRoute.data.subscribe(({ data }) => {
      this.sendDataToChild = true;
      this.blogService.singleBlog.next(data);
    });
  }
  ngOnDestroy() {
    this.main.className = this.mainClass;
    this.routeSubscriber?.unsubscribe();
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
}
