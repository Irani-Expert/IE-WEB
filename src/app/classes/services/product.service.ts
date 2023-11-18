import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { BehaviorSubject, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IFilterProduct } from '../filter-product.interface';
export interface Product {
  id: number;
  title: string;
}
export interface SingleProduct {
  id: number;
  title: string;
}
@Injectable({
  providedIn: 'root',
})
export class ProductService extends BaseService<any> {
  singleProduct = new BehaviorSubject<SingleProduct | null>(null);
  productsArray = new BehaviorSubject<Product[] | null>(null);
  constructor(http: HttpClient) {
    super(http);
  }
  get _products() {
    return this.productsArray.value;
  }
  async getProducts(
    path: string,
    _filter?: IFilterProduct
    // page: PageInterface<Blog[]>,
    // _filterModel: IFilter
  ) {
    // let pageFilter = new Page<Blog[]>(page);
    // let filter = new FilterBlog(_filterModel);
    // const params:
    const res = this.post(path, _filter).pipe(
      map((result) => {
        if (result.success) {
          if (result.data) {
            this.productsArray.next(result.data.items);
            return result.data;
          } else {
            return;
          }
        } else {
          return result.data;
        }
      })
    );
    return res;
  }
}
