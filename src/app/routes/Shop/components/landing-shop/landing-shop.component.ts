import { Component, HostListener } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import {
  ActivatedRoute,
  NavigationEnd,
  Params,
  // NavigationStart,
  Router,
  Scroll,
} from '@angular/router';
import {
  BehaviorSubject,
  Subject,
  Subscription,
  lastValueFrom,
  takeUntil,
} from 'rxjs';
import { AppComponent } from 'src/app/app.component';
import { FilterProduct } from 'src/app/classes/interfaces/filter-product.interface';
import { Product } from 'src/app/classes/interfaces/product.interface';
import { Page } from 'src/app/classes/page.model';
import { LinkService } from 'src/app/classes/services/link.service';
import { ProductService } from 'src/app/classes/services/product.service';
import { Utils } from 'src/app/classes/utils';
import { FilterService } from 'src/app/shared/filter/filter.service';
import {
  IFilterGroup,
  Type,
} from 'src/app/shared/filter/models/filter.interface';
import {
  Range,
  RatingConfig,
  StarRating,
} from 'src/app/shared/rating/rating-config';
import { environment } from 'src/environments/environment.dev';

@Component({
  selector: 'app-landing-shop',
  templateUrl: './landing-shop.component.html',
  styleUrls: ['./landing-shop.component.scss'],
})
export class LandingShopComponent {
  contentUrl = environment.contentUrl;
  sortFilter = [
    { name: 'همه محصولات', id: 1 },
    { name: 'محصولات غیر رایگان', id: 2 },
    { name: 'محصولات رایگان', id: 3 },
    { name: 'پربازدیدترین ها', id: 4 },
    { name: 'پرفروش ترین ها', id: 5 },
    { name: 'پیشنهاد خریداران', id: 6 },
    { name: 'منتخب', id: 7 },
  ];
  choosenSlide: number = 1;
  savedParams: any;
  checkboxes = [
    {
      title: 'اکسپرت',
      value: 0,
      checked: false,
    },
    {
      title: 'اندبکاتور',
      value: 1,
      checked: false,
    },
    {
      title: 'محاسبه گر',
      value: 2,
      checked: false,
    },
  ];
  openNav: number = 0;
  sorttype: number = 1;
  //Route Configurattions-------<
  private routeSubject = new Subject();
  routerSubscriber: Subscription | undefined;
  //Route Configurattions------->
  loading: boolean = true;
  page: Page<Product[]>;
  filter: IFilterGroup[] = [
    {
      active: false,
      chevronState: 'default',
      id: 1,
      title: 'دسته بندی',
      type: Type.Category,
    },
    {
      active: true,
      chevronState: 'rotated',
      id: 2,
      title: 'امتیاز',
      type: Type.Rating,
    },
  ];
  ratingConfig: RatingConfig<StarRating> = {
    content: { currentRate: 0, rate: 5, readonly: false },
    type: 1,
  };
  rangeConfig: RatingConfig<Range> = {
    content: { maxRangeValue: 1000, minRangeValue: 0, readonly: false },
    type: 0,
  };
  filterModel = new FilterProduct();
  device: string;
  constructor(
    public productService: ProductService,
    private _router: Router,
    private _filterService: FilterService<FilterProduct>,
    private _linkService: LinkService,
    private _activatedRoute: ActivatedRoute,
    private meta: Meta
  ) {
    this._filterService.filterModelSubject = new BehaviorSubject(
      this.filterModel
    );
  }

  // Method Get Query Strings

  get _querystring() {
    let queries = '';
    Object.keys(this.savedParams).forEach((item, i) => {
      if (i == 0) {
        queries += `${item}=${this.savedParams[item]}`;
      } else {
        queries += `&${item}=${this.savedParams[item]}`;
      }
    });
    return queries;
  }

  // Method Get Query Strings

  // Unsubscribe on Router Events to Stop Interuption on another component
  ngOnDestroy() {
    this.routerSubscriber?.unsubscribe();
  }

  NavbarsStatus(type: number) {
    this.openNav = type;
  }
  // Init Page Needs and Navigation --------------------------------------->
  async ngOnInit() {
    this.updateDeviceValue();
    this.routerSubscriber = this._router.events
      .pipe(takeUntil(this.routeSubject))
      .subscribe({
        next: async (event) => {
          if (event instanceof Scroll) {
            if (event.routerEvent instanceof NavigationEnd) {
              this.openNav = 0;

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
                this._router.navigateByUrl('shop');
              } else {
                this._activatedRoute.queryParams.subscribe(async (item) => {
                  await this.fillFilterOnNav(item);
                  this.savedParams = { ...item };
                });
                this.filterModel.pageIndex =
                  parseInt(arrayOfUrlSegments[3]) - 1;
                this.getProducts();

                this._linkService.createLink(
                  `https://www.iraniexpert.com/shop/page/${arrayOfUrlSegments[3]}`
                );
              }
            }
          }
        },
      });
    // =================[متاتگ ها]==========
    this.meta.updateTag({
      name: 'description',
      content:
        'درفروشگاه ایراتی اکسپرت خرید ربات ترید ATM  یا اکسپرت (Expert) با قیمت مناسب و سود درصدی ماهانه کاملا اتوماتیک برای سرمایه گذاری در سال 2023 بسیار مناسب است.',
    });
    this.meta.updateTag({
      name: 'author',
      content: 'ایرانی اکسپرت',
    });
    this.meta.updateTag({
      name: 'keywords',
      content:
        'خرید ربات برای فارکس-خرید ربات تریدر فارکس-مقایسه ها-اکسپرت-ربات خرید و فروش فارکس-خرید ربات هوشمند فارکس-بهترین ربات فارکس-خرید ربات فارکس-قیمت ربات های فارکس-خرید اکسپرت فارکس تضمینی-خرید ربات معامله گر فارکس-',
    });
  }

  // Call From Api Or Use Latest Value on Saved Subject --------------------------------------->

  async getProducts() {
    if (this.productService._paginatedPrd) {
      this.loading = false;
      this.page = new Page(this.productService._paginatedPrd);
    } else {
      if (await this.getProductsFromApi()) {
        this.loading = false;
        this.page = new Page(this.productService._paginatedPrd!);
      }
    }
  }
  changesort(id: number) {
    this.sorttype = id;
  }

  async getProductsFromApi() {
    return await lastValueFrom(
      await this.productService.getProducts(
        'Product/GetProductByFilters',
        this.filterModel
      )
    );
  }

  // Change Page --------------------------------------->

  setPage(pageNumber: number) {
    this.productService.prdArray.next(null);
    this._router.navigateByUrl(`shop/page/${pageNumber}?${this._querystring}`);
  }

  // Fill The Filter On Reloads or Navigations  --------------------------------------->

  async fillFilterOnNav(item: Params) {
    if (item['productName']) {
      this.filterModel.productName = item['productName'];
    }
    if (item['pageSize']) {
      this.filterModel.pageSize = item['pageSize'];
    }
    if (item['pageOrder']) {
      this.filterModel.pageOrder = item['pageOrder'];
    }

    if (item['category']) {
      this.filterModel.categories = this.setNumArr(item['category']);
      this.filterModel.categories.forEach((it) => {
        for (let counter = 0; counter < this.checkboxes.length; counter++) {
          if (it == this.checkboxes[counter].value) {
            this.checkboxes[counter].checked = true;
          }
        }
      });
    }
    if (item['rates']) {
      this.filterModel.rates = this.setNumArr(item['rates']);
      this.ratingConfig.content.currentRate = this.filterModel.rates[0];
    }
    if (item['platforms']) {
      this.filterModel.platForms = this.setNumArr(item['platforms']);
    }

    if (item['minPrice']) {
      this.filterModel.platForms = this.setNumArr(item['minPrice']);
    }
    if (item['maxPrice']) {
      this.filterModel.platForms = this.setNumArr(item['maxPrice']);
    }
    return true;
  }

  // Method Which Gets Array String and return Array --------------------------------------->
  changeSlide(slide: any) {
    this.choosenSlide = slide;
  }
  setNumArr(value: string) {
    let arr: number[] = [];
    let x = value.slice(value.indexOf('[') + 1, value.indexOf(']')).split(',');
    x.forEach((it) => {
      arr.push(parseInt(it));
    });
    return arr;
  }

  // Search Product Name --------------------------------------->
  search(event: string) {
    this.productService.prdArray.next(null);
    this.filterModel.productName = event;

    if (event !== '') {
      this.savedParams = { ...this.savedParams, ...{ productName: event } };
      this._router.navigateByUrl(
        `shop/page/${this.filterModel.pageIndex + 1}?${this._querystring}`
      );
    } else {
      delete this.savedParams['productName'];
      this._router.navigateByUrl(
        `shop/page/${this.filterModel.pageIndex + 1}?${this._querystring}`
      );
    }
  }

  // Checkboxes and Filtering --------------------------------------->
  checkboxCategory(event: boolean, type: number) {
    let categoryString = '';
    this.productService.prdArray.next(null);

    if (event) {
      if (this.isExistInArr(type, this.filterModel.categories)) {
        this.filterModel.categories.forEach((it, counter) => {
          if (counter == 0) {
            categoryString += `${it}`;
          } else {
            categoryString += `,${it}`;
          }
        });
      } else {
        this.filterModel.categories.push(type);
        this.filterModel.categories.forEach((it, counter) => {
          if (counter == 0) {
            categoryString += `${it}`;
          } else {
            categoryString += `,${it}`;
          }
        });
      }

      this.savedParams = {
        ...this.savedParams,
        ...{ category: `[${categoryString}]` },
      };
      this._router.navigateByUrl(
        `shop/page/${this.filterModel.pageIndex + 1}?${this._querystring}`
      );
    } else {
      let index = this.filterModel.categories.findIndex((it) => it == type);
      this.filterModel.categories.splice(index, 1);
      if (this.filterModel.categories.length == 0) {
        delete this.savedParams['category'];
      } else {
        this.filterModel.categories.forEach((it, counter) => {
          if (counter == 0) {
            categoryString += `${it}`;
          } else {
            categoryString += `,${it}`;
          }
        });
        this.savedParams = {
          ...this.savedParams,
          ...{ category: `[${categoryString}]` },
        };
      }
      this._router.navigateByUrl(
        `shop/page/${this.filterModel.pageIndex + 1}?${this._querystring}`
      );
    }
  }

  // Check if An Element Exist in an Array --------------------------------------->

  isExistInArr(searcher: any, array: any) {
    let index = array.findIndex((it: any) => it == searcher);
    if (index == -1) {
      return false;
    } else {
      return true;
    }
  }
  setRate(event: number[]) {
    this.filterModel.rates = event;
    this.productService.prdArray.next(null);
    this.savedParams = {
      ...this.savedParams,
      ...{ rates: `[${event[0]}]` },
    };
    this._router.navigateByUrl(
      `shop/page/${this.filterModel.pageIndex + 1}?${this._querystring}`
    );
  }
  deleteFilters(event: boolean) {
    if (event) {
      this.checkboxes.forEach((it) => (it.checked = false));
      this.ratingConfig.content.currentRate = 0;
      this.productService.prdArray.next(null);
      this.filterModel = new FilterProduct();
      this._router.navigateByUrl(`shop/page`);
    }
  }
  @HostListener('window:resize', ['$event'])
  OnResize() {
    this.updateDeviceValue();
  }

  updateDeviceValue() {
    if (AppComponent.isBrowser.value) {
      if (Utils.isTablet()) {
        this.device = 'sm';
      } else {
        this.choosenSlide = 1;
        this.device = 'lg';
      }
    }
  }
}
