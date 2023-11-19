import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { BehaviorSubject, lastValueFrom, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { FilterProduct } from '../filter-product.interface';
import { Product, SingleProduct } from '../product.interface';
import { PageInterface } from '../page.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService extends BaseService<any> {
  singleProduct = new BehaviorSubject<SingleProduct | null>(null);
  prdArray = new BehaviorSubject<PageInterface<Product[]> | null>(null);
  constructor(http: HttpClient) {
    super(http);
  }
  get _paginatedPrd() {
    return this.prdArray.value;
  }
  get _product() {
    return this.singleProduct.value;
  }
  async getProducts(
    path: string,
    _filter?: FilterProduct
    // page: PageInterface<Blog[]>,
    // _filterModel: IFilter
  ) {
    // let pageFilter = new Page<Blog[]>(page);
    // let filter = new FilterBlog(_filterModel);
    // const params:
    const res = this.post(path, _filter).pipe(
      map((result) => {
        if (result.success) {
          this.prdArray.next(result.data);
          return result.success;
        } else {
          return result.success;
        }
      })
    );
    return res;
  }
  async getProduct(id: number) {
    const result = this.get(`Product/GetByID/${id}`).pipe(
      map((res) => {
        if (res.success) this.singleProduct.next(res.data);
        return res.success;
      })
    );
    return await lastValueFrom(result);
  }
}
