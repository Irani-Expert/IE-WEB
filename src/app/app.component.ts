import { Component } from '@angular/core';
import {
  BehaviorSubject,
  // lastValueFrom
} from 'rxjs';
import { PlatformService } from './classes/services/platform.service';
import { ModalService } from './shared/modal/services/modal.service';
import { IFilterGroup, Type } from './shared/filter/models/filter.interface';
import { Range, RatingConfig, StarRating } from './shared/rating/rating-config';
import { AuthService } from './shared/auth/auth.service';
import { Header } from './components/header-layout/header';
// import { IFilterProduct } from './classes/filter-product.interface';
// import { ProductService } from './classes/services/product.service';
// import { BlogService } from './classes/services/blog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  modalStatus;
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
  static isBrowser = new BehaviorSubject<boolean>(false);
  title = 'IE-WEB';
  constructor(
    private platform: PlatformService,
    private modal: ModalService,
    private auth: AuthService // private blog: BlogService
  ) {
    this.modalStatus = this.modal.modalStatusSubject;
    if (this.platform.isPlatformBrowser()) {
      AppComponent.isBrowser.next(true);
    }
  }
  async ngOnInit() {
    if (AppComponent.isBrowser.value) {
      Header._btnDisabled = true;
      let res = await this.auth.checkValidToken();
      if (res[0]) {
        Header._btnDisabled = false;
        this.auth.rememberUser(res[1]);
      } else {
        Header._btnDisabled = false;
        this.auth.logOutUser();
      }
    }
    // this.getArticles({
    // pageIndex: 0,
    // pageSize: 12,
    // blogName: null,
    // categories: [],
    // rates: [],
    // });
    // const apiRes = await this.getProducts({
    //   pageIndex: 0,
    //   pageSize: 12,
    //   categories: [],
    //   rates: [],
    //   maxPrice: 100000,
    //   minPrice: 0,
    //   platForms: [],
    //   pageOrder: 'ID',
    // });
    // console.log(apiRes);
  }
  // async getArticles(filter?: IFilterBlog) {
  //   const res = await this.blog.getArticles(
  //     'Article/GetArticleByFilter',
  //     filter
  //   );
  //   console.log(
  //     res.subscribe({
  //       complete: () => {
  //         console.log(this.blog._articles);
  //       },
  //     })
  //   );
  // }
  // async getProducts(filter?: IFilterProduct) {
  //   const res = await this._productService.getProducts(
  //     'Product/GetProductByFilters',
  //     filter
  //   );
  //   return await lastValueFrom(res);
  // }
}
