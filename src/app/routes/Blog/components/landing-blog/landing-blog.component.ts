import { Component, HostListener } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { Blog } from 'src/app/classes/interfaces/blog.interface';
import { FilterBlog } from 'src/app/classes/interfaces/filter-blog.interface';
import { BlogService } from 'src/app/classes/services/blog.service';
import { Utils } from 'src/app/classes/utils';

@Component({
  selector: 'app-landing-blog',
  templateUrl: './landing-blog.component.html',
  styleUrls: ['./landing-blog.component.scss']
})
export class LandingBlogComponent {

  // ===========[سرویس ها]==========
  itemsBlog : Blog[] = new Array<Blog>();
  blogFilter : FilterBlog = new FilterBlog();

  loading: boolean = true;

  constructor ( private blogService : BlogService){}
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

  async ngOnInit(){
  
    this.updateDeviceValue();
    this.getItemBlogs(this.blogFilter)
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
  categoryIcon : string = 'assets/img/filter-icon-blog.svg';
  categoryHeader: string = 'دسته بندی';
  category : Array<any> = [
    {
      name:'جدیدترین مطالب',
      icon :'assets/img/icon-filter(blog)-1.svg',
      id:1,
    },
    {
      name:' آموزش ها',
      icon :'assets/img/icon-filter(blog)-7.svg',
      id:2,
    },
    {
      name:'معرفی کتاب ',
      icon :'assets/img/icon-filter(blog)-2.svg',
      id:3,
    },
    {
      name:' معرفی بروکرها',
      icon :'assets/img/icon-filter(blog)-3.svg',
      id:4,
    },
    {
      name:' پادکست های ایرانی اکسپرت',
      icon :'assets/img/icon-filter(blog)-4.svg',
      id:5,
    },
    {
      name:'فارکس ',
      icon :'assets/img/icon-filter(blog)-5.svg',
      id:6,
    },
    {
      name:'ارز دیجیتال ',
      icon :'assets/img/icon-filter(blog)-5.svg',
      id:7
    },
    {
      name:'ربات معامله گر ',
      icon :'assets/img/icon-filter(blog)-6.svg',
      id:8
    }
  ]
}
