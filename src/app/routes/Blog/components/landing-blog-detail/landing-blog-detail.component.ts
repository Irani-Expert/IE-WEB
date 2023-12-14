import { Component, HostListener } from '@angular/core';
import { TableInterFace } from '../table-contents/interface/table-interface';
import { config } from 'src/app/shared/acordian/types';
import { AppComponent } from 'src/app/app.component';
import { Utils } from 'src/app/classes/utils';
import { Subject, Subscription, takeUntil } from 'rxjs';
import { HttpUrlEncodingCodec } from '@angular/common/http';
import { NavigationEnd, Router, Scroll } from '@angular/router';
import { BlogService } from 'src/app/classes/services/blog.service';
import { Blog } from 'src/app/classes/interfaces/blog.interface';
import { FilterBlog } from 'src/app/classes/interfaces/filter-blog.interface';

@Component({
  selector: 'app-landing-blog-detail',
  templateUrl: './landing-blog-detail.component.html',
  styleUrls: ['./landing-blog-detail.component.scss'],
})
export class LandingBlogDetailComponent extends HttpUrlEncodingCodec {
  // ===========[سرویس ها]==========
  itemsBlog : Blog[] = new Array<Blog>();
  blogFilter : FilterBlog = new FilterBlog();
  loading: boolean = true;

  async getItemBlogs(filters : FilterBlog) {
    (
      await this.blogService.getBlogsFromApi(
        'Article/GetArticleByFilter',
        filters
      )
    ).subscribe({
      next: (x)=> {
        if (this.blogService._paginatedBlogs?.items){
          this.itemsBlog = this.blogService._paginatedBlogs?.items;
          this.loading = false;
        }
      }
    })
  }



  //Logic Get Data
  private destroyed$ = new Subject();
  routeSubscriber: Subscription | undefined;
  sendDataToChild = false;

  table: TableInterFace[] = [
    {
      active: false,
      title: 'تیتر1',
      content: 'زیرتیتر1',
    },
    {
      active: false,
      title: 'تیتر2',
      content: 'زیرتیتر2',
    },
    {
      active: false,
      title: 'تیتر3',
      content: 'زیرتیتر3',
    },
  ];
  options: config = { multi: false };

  // =================[فیلتر]=============
  category: Array<string> = [
    'درامد دلاری',
    'ربات معامله گر atm',
    'lorem1',
    'lorem2',
    'lorem3',
    'lorem4',
  ];
  // =======================[رسپانسیو]==========

  device: 'sm' | 'lg' = 'lg';
  constructor(private router: Router, public blogService: BlogService) {
    super();
  }
  async ngOnInit() {
    this.updateDeviceValue();
    this.getItemBlogs(this.blogFilter)

    this.routeSubscriber = this.router.events
      .pipe(takeUntil(this.destroyed$))
      .subscribe({
        next: async (event) => {
          if (event instanceof Scroll) {
            if (event.routerEvent instanceof NavigationEnd) {
              let urlSegments = event.routerEvent.urlAfterRedirects.split('/');
              let urlId = this.decodeValue(urlSegments[2].split('_').join(' '));
              await this.getArticleDetail(urlId);
            }
          }
        },
      });
  }
  ngOnDestroy() {
    this.routeSubscriber?.unsubscribe();
  }
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.updateDeviceValue();
  }
  updateDeviceValue() {
    if (AppComponent.isBrowser.value) {
      if (Utils.isMobileL()) {
        this.device = 'sm';
      } else {
        this.device = 'lg';
      }
    }
  }
  async getArticleDetail(title: string) {
    const apiRes = this.blogService.getBlog(title);
    if (await apiRes) {
      this.sendDataToChild = true;
    }
  }
}
