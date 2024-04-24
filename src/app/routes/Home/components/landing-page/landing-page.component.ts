import { Component, ViewChild } from '@angular/core';
import { IcardData } from 'src/app/shared/product-card/card-data';
import { FilterBlog } from 'src/app/classes/interfaces/filter-blog.interface';
import { BlogService } from 'src/app/classes/services/blog.service';
import { Blog, SingleBlog } from 'src/app/classes/interfaces/blog.interface';
import { ProductService } from 'src/app/classes/services/product.service';
import { Page } from 'src/app/classes/page.model';
import { lastValueFrom } from 'rxjs';
import { Product } from 'src/app/classes/interfaces/product.interface';
import { FilterProduct } from 'src/app/classes/interfaces/filter-product.interface';
import { ConsultationFormComponent } from '../consultation-form/consultation-form.component';
import { Meta, SafeHtml, Title } from '@angular/platform-browser';
import { environment } from 'src/environments/environment.dev';
import { LinkService } from 'src/app/classes/services/link.service';
import { ITags } from 'src/app/classes/interfaces/tags.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent {
  constructor(
    public _articleServices: BlogService,
    public productService: ProductService,
    private meta: Meta,
    private _title: Title,
    private _linkService: LinkService // private _sanitizer : DomSanitizer
  ) {
    this._linkService.createLink(`https://www.iraniexpert.com`);
  }

  isRecived: boolean = false;
  page: Page<Product[]>;

  blogData: Blog[];
  filters: FilterBlog = new FilterBlog();
  card_data: IcardData[] = [
    {
      id: 0,
      title: 'در حال بروزرسانی',
      imgUrl: '../../../assets/img/Trade-School-Coming-Soon.webp',
      price: 0,
      type: 1,
      colorCode: '#ED912A',
      bgColorCode: 'rgb(245 179 104)',

      hours: '2:14',
      session: 2,
      writer: null,
      isOrigin: null,
      link: null,
      publishedBy: '',
    },
    {
      id: 0,
      title: 'در حال بروزرسانی',
      imgUrl: '../../../assets/img/Trade-School-Coming-Soon.webp',
      price: 0,
      type: 1,
      colorCode: '#ED912A',
      bgColorCode: 'rgb(245 179 104)',
      link: null,
      hours: '2:14',
      session: 2,
      writer: null,
      isOrigin: null,
      publishedBy: '',
    },
    {
      id: 0,
      title: 'در حال بروزرسانی',
      imgUrl: '../../../assets/img/Trade-School-Coming-Soon.webp',
      price: 0,
      type: 1,
      colorCode: '#ED912A',
      bgColorCode: 'rgb(245 179 104)',
      link: null,
      hours: '2:14',
      session: 2,
      writer: null,
      isOrigin: null,
      publishedBy: '',
    },
  ];
  card_data2: IcardData[] = [];

  async getBlogs(filter: FilterBlog) {
    (
      await this._articleServices.getBlogsFromApi(
        'Article/GetArticleByFilter',
        filter
      )
    ).subscribe({
      next: (x) => {
        if (this._articleServices._paginatedBlogs?.items) {
          this.blogData = this._articleServices._paginatedBlogs.items;
        }
        this.isRecived = true;
      },
    });
  }
  async getProducts() {
    if (this.productService._paginatedPrd) {
      this.page = new Page(this.productService._paginatedPrd);
    } else {
      if (await this.getProductsFromApi()) {
        this.page = new Page(this.productService._paginatedPrd!);
      }
    }
    this.page?._items?.forEach((x) => {
      var dataKeeper: IcardData = {
        id: x.id,
        title: x.title,
        imgUrl: x.cardImagePath,
        price: x.minPrice,
        type: 0,
        colorCode: '#ED912A',
        bgColorCode: 'rgb(245 179 104)',
        hours: null,
        session: null,
        writer: null,
        isOrigin: null,
        link: null,
        publishedBy: x.publishedBy,
      };
      this.card_data2.push(dataKeeper);
    });
  }
  async getProductsFromApi() {
    return await lastValueFrom(
      await this.productService.getProducts(
        'Product/GetProductByFilters',
        new FilterProduct()
      )
    );
  }
  async ngOnInit() {
    this.getBlogs(this.filters);
    this.getProducts();

    this.filters.pageSize = 3;
  }
  // ==========[اسکرول]==========
  @ViewChild(ConsultationFormComponent, { static: false })
  appConsulting: ConsultationFormComponent;

  scroll(event: boolean) {
    this.appConsulting.scroll();
  }
  // ==========[هشتگ ها و متاتگ]=======

  contentUrl = environment.contentUrl;
  sendDataToChild = false;
  title: string = '';
  language: string = '';
  id: number = 0;
  articleHtml: SafeHtml;
  tags: ITags[];

  async ngAfterViewInit() {
    if (await this.getDetail('Home', 'fa')) {
      this.id = Number(this._articleServices._blog?.id);
      this.articleHtml = this._articleServices._blog!.description;
      this.tags = this._articleServices._blog!.sharpLinkTags;
      this.setSeo(this._articleServices._blog);
      this.sendDataToChild = true;
    }
  }

  async getDetail(title: string, language: string) {
    const apiRes = await this._articleServices.getBlog(title, language);
    return apiRes;
  }

  setSeo(blog?: SingleBlog | null) {
    let metaTitle = this._title.getTitle();
    let author: string = '';
    let keywords: string = '';
    let canonicalUrl: string = '';
    if (this._linkService.canonicalLinkValue instanceof HTMLLinkElement) {
      canonicalUrl = this._linkService.canonicalLinkValue.href;
    }

    if (blog) {
      author = blog?.updatedByFirstName + ' ' + blog?.updatedByLastName;
      keywords = blog.linkTags
        .map((it) => {
          return it.title;
        })
        .join(',');
    }

    this.meta.updateTag({
      name: 'description',
      content: this._articleServices._blog?.metaDescription || '',
    });
    this.meta.updateTag({
      name: 'author',
      content: author !== '' ? author : 'ایرانی اکسپرت',
    });
    this.meta.updateTag({
      name: 'keywords',
      // Add keywords Later when they completed them on panel
      content:
        'اکسپرت ایرانی , ترید, ربات خودکار فارکس,ربات معامله گر فارکس, دستیار ترید,بورس جهانی,نقدینگی سشن های معاملاتی, کارگزاری,درامد, ترید بدون دانش,شغل دوم برای سرمایه گذاری مطمئن, اکسپرت فارکس',
    });
    this.meta.updateTag({
      property: 'og:url',
      content: canonicalUrl,
    });
    this.meta.updateTag({
      property: 'og:title',
      content: metaTitle,
    });
    this.meta.updateTag({
      property: 'og:description',
      content: blog?.metaDescription ? blog.metaDescription : '',
    });
    this.meta.updateTag({
      property: 'twitter:site',
      content: canonicalUrl,
    });
    this.meta.updateTag({
      property: 'twitter:title',
      content: metaTitle,
    });
    this.meta.updateTag({
      property: 'twitter:description',
      content: blog?.metaDescription ? blog.metaDescription : '',
    });
  }
}
