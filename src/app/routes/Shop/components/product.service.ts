import { Injectable } from '@angular/core';
import { BaseService } from '../../../classes/services/base.service';
import { BehaviorSubject, lastValueFrom, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { FilterProduct } from '../../../classes/interfaces/filter-product.interface';
import {
  Product,
  SingleProduct,
} from '../../../classes/interfaces/product.interface';
import { PageInterface } from '../../../classes/page.model';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class ProductService extends BaseService<any> {
  singleProduct = new BehaviorSubject<SingleProduct | null>(null);
  prdArray = new BehaviorSubject<PageInterface<Product[]> | null>(null);
  constructor(http: HttpClient, toastr: ToastrService) {
    super(http, toastr);
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
    // const params:s
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
