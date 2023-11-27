import { Component } from '@angular/core';
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
import { FilterProduct } from 'src/app/classes/interfaces/filter-product.interface';
import { Product } from 'src/app/classes/interfaces/product.interface';
import { Page } from 'src/app/classes/page.model';
import { LinkService } from 'src/app/classes/services/link.service';
import { ProductService } from 'src/app/routes/Shop/components/product.service';
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

@Component({
  selector: 'app-landing-shop',
  templateUrl: './landing-shop.component.html',
  styleUrls: ['./landing-shop.component.scss'],
})
export class LandingShopComponent {
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
      active: false,
      chevronState: 'default',
      id: 2,
      title: 'امتیاز',
      type: Type.Rating,
    },
    {
      active: false,
      chevronState: 'default',
      id: 3,
      title: 'محدوده قیمت',
      type: Type.PriceRange,
    },
    {
      active: false,
      chevronState: 'default',
      id: 4,
      title: 'تولید کننده',
      type: Type.Producer,
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
  constructor(
    public productService: ProductService,
    private _router: Router,
    private _filterService: FilterService<FilterProduct>,
    private _linkService: LinkService,
    private _activatedRoute: ActivatedRoute
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

  // Init Page Needs and Navigation --------------------------------------->
  async ngOnInit() {
    this.routerSubscriber = this._router.events
      .pipe(takeUntil(this.routeSubject))
      .subscribe({
        next: async (event) => {
          if (event instanceof Scroll) {
            if (event.routerEvent instanceof NavigationEnd) {
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
                this._activatedRoute.queryParams.subscribe((item) => {
                  this.fillFilterOnNav(item);
                  this.savedParams = { ...item };
                });
                this.filterModel.pageIndex =
                  parseInt(arrayOfUrlSegments[3]) - 1;
                await this.getProducts();
                this._linkService.createLink(
                  `https://www.iraniexpert.com/shop/page/${arrayOfUrlSegments[3]}`
                );
              }
            }
          }
        },
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
      this.filterModel.categories = await this.setNumArr(item['category']);
      this.filterModel.categories.forEach((it) => {
        for (let counter = 0; counter < this.checkboxes.length; counter++) {
          if (it == this.checkboxes[counter].value) {
            this.checkboxes[counter].checked = true;
          }
        }
      });
    }
    if (item['platforms']) {
      this.filterModel.platForms = await this.setNumArr(item['platforms']);
    }
    if (item['rates']) {
      this.filterModel.rates = await this.setNumArr(item['rates']);
    }
    if (item['minPrice']) {
      this.filterModel.platForms = await this.setNumArr(item['minPrice']);
    }
    if (item['maxPrice']) {
      this.filterModel.platForms = await this.setNumArr(item['maxPrice']);
    }
  }

  // Method Which Gets Array String and return Array --------------------------------------->

  async setNumArr(value: string) {
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
}
