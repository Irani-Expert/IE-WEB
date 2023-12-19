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
  ) {}
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
        '&hearts; مقالات ایرانی اکسپرت مناسب تریدرهای حرفه ای، معامله گران بلندمدت و نیز تازه کاران که قصد ورود به بازارمالی را دارند مناسب است. لطفا به دقت مطالعه کنید و از تجربیات تیم تحلیلگر و تیم برنامه نویس هوش مصنوعی ما استفاده کنید تا گام های حرفه ای در بازارمالی بردارید&hearts;',
    });
    this.meta.updateTag({
      name: 'author',
      content: 'ایرانی اکسپرت',
    });
    this.meta.updateTag({
      name: 'keywords',
      content:
        'آموزش_صفر_تا_صد_فارکس,باید_و_نبایدهای_فارکس,فارکس_به_زبان_ساده,فارکس_یا_رمزارز,رگوله_بروکر,مدیریت_سرمایه,ربات_استیتمنت_دار,ربات_مدیریت_سرمایه,ربات_ایرانی_فارکس',
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
  categoryIcon: string = 'assets/img/filter-icon-blog.svg';
  fillValue(event: string) {
    this.appBlogHero._searchinput.next(event);
  }
  filterCategory(id: number) {
    this.router.navigateByUrl(`blog/page/1?category=${id}`);
  }
}
