import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
import { Meta } from '@angular/platform-browser';
// import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-landing-product',
  templateUrl: './landing-product.component.html',
  styleUrls: ['./landing-product.component.scss'],
})
export class LandingProductComponent {
  loading: boolean = true;

  constructor(
    private _activatedRoute: ActivatedRoute,
    public productService: ProductService,
    private meta : Meta
  ) {}
  async ngOnInit() {
    this._activatedRoute.params.subscribe({
      next: async (item: any) => {
        await this.getProduct(parseInt(item.id));
      },
    });
          // =================[متاتگ ها]==========
          this.meta.updateTag({
            name: 'description',
            content: 'اکسپرت ATM یا Automated Trading Machine ربات تریدر بازار فارکس FOREX است که از اول فوریه 2022 روی اکثر بروکرها شامل حساب Real و Demo با سرمایه های مختلف اجرا شده و امتحان خود را به نیکی پس داده است. این محصول دستیار تریدرهاست با قابلیت ترید خودکار که بر اساس الگوریتم هوش مصنوعی ژنتیک کار می کند. این اکسپرت امکان مدیریت سرمایه + پارامترهای ورودی زیاد + نظارت انسانی دارد. جهت اطلاعات بیشتر با ما ارتباط بگیرید',
          });
          this.meta.updateTag({
            name: 'author',
            content: 'ایرانی اکسپرت',
          });
          this.meta.updateTag({
            name: 'keywords',
            content: 'آموزش_صفر_تا_صد_فارکس,باید_و_نبایدهای_فارکس,فارکس_به_زبان_ساده,فارکس_یا_رمزارز,رگوله_بروکر,مدیریت_سرمایه,ربات_استیتمنت_دار,ربات_مدیریت_سرمایه,ربات_ایرانی_فارکس',
          });
  }

  // =========[اسکرول]=========
  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
  async getProduct(id: number) {
    if (await this.productService.getProduct(id)) {
      this.loading = false;
    }
  }
  
}
