import { Component, HostListener } from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  Params,
  Router,
  Scroll,
} from '@angular/router';
import { Meta } from '@angular/platform-browser';
import { PaginationInstance } from 'ngx-pagination';
import {
  Subject,
  Subscription,
  debounceTime,
  lastValueFrom,
  takeUntil,
} from 'rxjs';
import { AppComponent } from 'src/app/app.component';
import { Blog } from 'src/app/classes/interfaces/blog.interface';
import { FilterBlog } from 'src/app/classes/interfaces/filter-blog.interface';
import { Page } from 'src/app/classes/page.model';
import { BlogService } from 'src/app/classes/services/blog.service';
import { Utils } from 'src/app/classes/utils';

@Component({
  selector: 'app-blog-pagination',
  templateUrl: './blog-pagination.component.html',
  styleUrls: ['./blog-pagination.component.scss'],
})
export class BlogPaginationComponent {
  mainClass =
    'm-0 p-0 gap-0 flex flex-col min-h-screen overflow-hidden lg:overflow-y-hidden lg:overflow-x-auto bg-white';
  main: HTMLElement;
  // Search Name

  value: string | null = null;
  _searchInputSubscription: Subscription;
  _searchinput: Subject<string> = new Subject<string>();

  // ===========[سرویس ها]==========
  routerSubscriber: Subscription | undefined;
  private routeSubject = new Subject();
  savedParams: any;
  page: Page<Blog[]>;
  blogFilter: FilterBlog = new FilterBlog();
  loading: boolean = true;

  constructor(
    private blogService: BlogService,
    private meta: Meta,
    private router: Router,
    private _activatedRoute: ActivatedRoute
  ) {
    if (AppComponent.isBrowser.value) {
      this.main = document.body.getElementsByTagName('main')[0];
      this.main.className = `bg-[#FAFAFA] ${this.mainClass}`;
    }
  }
  async getItemBlogs(filters: FilterBlog) {
    return await lastValueFrom(
      await this.blogService.getBlogsFromApi(
        'Article/GetArticleByFilter',
        filters
      )
    );
  }
  ngOnDestroy() {
    if (AppComponent.isBrowser.value) {
      this.main.className = this.mainClass;
    }
    this.routerSubscriber?.unsubscribe();
  }
  async ngOnInit() {
    this.routerSubscriber = this.router.events
      .pipe(takeUntil(this.routeSubject))
      .subscribe({
        next: (event) => {
          if (event instanceof Scroll) {
            if (event.routerEvent instanceof NavigationEnd) {
              this.blogFilter.blogName = null;
              let indexOfStartingQueries =
                event.routerEvent.urlAfterRedirects.indexOf('?');
              const arrayOfUrlSegments = event.routerEvent.urlAfterRedirects
                .slice(
                  0,
                  indexOfStartingQueries !== -1
                    ? indexOfStartingQueries
                    : event.routerEvent.urlAfterRedirects.length
                )
                .split('/');
              if (arrayOfUrlSegments[3] == '0') {
                this.router.navigateByUrl('blog/page/1');
              } else {
                this._activatedRoute.queryParams.subscribe(async (item) => {
                  await this.fillFilterOnNav(item);
                  this.savedParams = { ...item };
                });
                this.blogFilter.pageIndex = parseInt(arrayOfUrlSegments[3]) - 1;
                this.getBlogs();
              }
            }
          }
        },
      });
    this.updateDeviceValue();
    this._searchInputSubscription = this._searchinput
      .pipe(debounceTime(700))
      .subscribe((value) => {
        this.searchFilterName(value);
      });
      this.meta.updateTag({
        name: 'description',
        content:
          'مقالات (Articles) ایرانی اکسپرت شامل معرفی همه بروکرها و خدمات آنها، زبانهای برنامه نویسی مالی، بک تست در تریدینگ، روانشناسی ترید، درآمد دلاری و مدیریت سرمایه براساس آخرین به روز رسانی 2023 می باشد.',
      });
      this.meta.updateTag({
        name: 'author',
        content: 'مهرنوش کریمی ',
      });
      this.meta.updateTag({
        name: 'keywords',
        content:
          'مقاله فارکس pdf- مقاله در مورد فارکس-دانلود مقاله در مورد فارکس-مقاله آموزشی فارکس-مقاله انگلیسی در مورد فارکس-مقاله های فارکس-فارکس چیست به زبان ساده-تحلیل تکنیکال فارکس-صفر تا صد فارکس رایگان-آموزش جامع فارکس-مقاله درباره فارکس-همه چیز در مورد فارکس-مقاله های ایران بورس آنلاین-فارکس چیست-بازار فارکس-تحقیق در مورد بازار فارکس-داده های فارکس-بهترین دوره های فارکس-خبر های مهم بازار فارکس',
      });
  }

  config: PaginationInstance;
  changePage(event: any) {
    this.blogService.blogsArray.next(null);
    this.router.navigateByUrl(`blog/page/${event}`);
  }
  // =======================[رسپانسیو]==========

  device: 'sm' | 'lg' = 'lg';

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
  // =================[فیلتر]=============
  categoryIcon: string = 'assets/icon/filter-icon-blog.svg';
  color: string = 'white';
  // Method Get Query Strings

  get _querystring() {
    let queries = '';
    if (this.savedParams) {
      Object.keys(this.savedParams).forEach((item, i) => {
        if (i == 0) {
          queries += `${item}=${this.savedParams[item]}`;
        } else {
          queries += `&${item}=${this.savedParams[item]}`;
        }
      });
      return queries;
    }

    return queries;
  }

  // Get Blogs
  async getBlogs() {
    if (await this.getItemBlogs(this.blogFilter)) {
      this.page = new Page(this.blogService._paginatedBlogs!);
      this.config = {
        currentPage: this.page._current,
        itemsPerPage: this.blogFilter.pageSize!,
        id: 'custom',
        totalItems: this.page.page.totalCount,
      };
      this.loading = false;
    }
  }

  // Fill The Filter On Reloads or Navigations  --------------------------------------->

  async fillFilterOnNav(item: Params) {
    if (item['blogName']) {
      this.blogFilter.blogName = item['blogName'];
    }
    if (item['pageSize']) {
      this.blogFilter.pageSize = item['pageSize'];
    }
    if (item['category']) {
      this.blogFilter.categories = this.setNumArr(item['category']);
    }
    return true;
  }
  setNumArr(value: string) {
    let arr: number[] = [parseInt(value)];

    return arr;
  }
  fillValue(value: string) {
    this._searchinput.next(value);
  }
  searchFilterName(value: string) {
    this.blogService.blogsArray.next(null);
    if (value.trim().length > 0) {
      this.savedParams = { ...this.savedParams, ...{ blogName: value } };
      this.router.navigateByUrl(`blog/page/1?${this._querystring}`);
    } else {
      this.blogFilter.blogName = null;
      delete this.savedParams['blogName'];
      this.router.navigateByUrl(`blog/page/1?${this._querystring}`);
    }
  }
  filterCategory(id: number) {
    this.blogService.blogsArray.next(null);
    this.savedParams = {
      ...this.savedParams,
      ...{ category: `${id}` },
    };
    this.router.navigateByUrl(
      `blog/page/${this.blogFilter.pageIndex + 1}?${this._querystring}`
    );
  }
}
