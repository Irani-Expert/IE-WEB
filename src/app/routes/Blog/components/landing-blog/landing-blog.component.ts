import { Component, HostListener, ViewChild } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Meta } from '@angular/platform-browser';
import { AppComponent } from 'src/app/app.component';
import { Blog } from 'src/app/classes/interfaces/blog.interface';
import { FilterBlog } from 'src/app/classes/interfaces/filter-blog.interface';
import { BlogService } from 'src/app/classes/services/blog.service';
import { Utils } from 'src/app/classes/utils';
import { BlogHeroComponent } from '../blog-hero/blog-hero.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-blog',
  templateUrl: './landing-blog.component.html',
  styleUrls: ['./landing-blog.component.scss'],
})
export class LandingBlogComponent {
  mainClass =
    'm-0 p-0 gap-0 flex flex-col min-h-screen overflow-hidden lg:overflow-y-hidden lg:overflow-x-auto';
  main: HTMLElement;
  @ViewChild(BlogHeroComponent, { static: false })
  appBlogHero: BlogHeroComponent;
  // ===========[سرویس ها]==========
  itemsBlog: Blog[] = new Array<Blog>();
  blogFilter: FilterBlog = new FilterBlog();

  loading: boolean = true;

  constructor(
    private blogService: BlogService,
    private meta: Meta,
    private router: Router
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

  async ngOnInit() {
    this.updateDeviceValue();
    this.blogFilter.pageSize = 0;
    if (await this.getItemBlogs(this.blogFilter)) {
      this.itemsBlog = this.blogService._paginatedBlogs?.items!;
      this.loading = false;
    }
    this.meta.updateTag({
      name: 'description',
      content:
        'مقالات (Articles) ایرانی اکسپرت شامل معرفی همه بروکرها و خدمات آنها، زبانهای برنامه نویسی مالی، بک تست در تریدینگ، روانشناسی ترید، درآمد دلاری و مدیریت سرمایه براساس آخرین به روز رسانی 2023 می باشد.',
    });
    this.meta.updateTag({
      name: 'author',
      content: 'خانم کریمی ',
    });
    this.meta.updateTag({
      name: 'keywords',
      content:
        'مقاله فارکس pdf- مقاله در مورد فارکس-دانلود مقاله در مورد فارکس-مقاله آموزشی فارکس-مقاله انگلیسی در مورد فارکس-مقاله های فارکس-فارکس چیست به زبان ساده-تحلیل تکنیکال فارکس-صفر تا صد فارکس رایگان-آموزش جامع فارکس-مقاله درباره فارکس-همه چیز در مورد فارکس-مقاله های ایران بورس آنلاین-فارکس چیست-بازار فارکس-تحقیق در مورد بازار فارکس-داده های فارکس-بهترین دوره های فارکس-خبر های مهم بازار فارکس',
    });
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
  color = 'white';

  fillValue(event: string) {
    this.appBlogHero._searchinput.next(event);
  }
  filterCategory(id: number) {
    this.router.navigateByUrl(`blog/page/1?category=${id}`);
  }
  ngOnDestroy() {
    if (AppComponent.isBrowser.value) {
      this.main.className = this.mainClass;
    }
  }
}
