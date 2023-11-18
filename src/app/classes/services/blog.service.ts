import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { PageInterface } from '../page.model';
import { BehaviorSubject, map } from 'rxjs';
import { IFilterBlog } from '../filter-blog.interface';
// import { Page, PageInterface } from '../page.model';
interface Blog {
  id: number;
  title: string;
}

// interface IFilter {
//   id?: number;
//   title?: string;
// }
// class FilterBlog {
//   filterParams: string = '';
//   constructor(filter: IFilter) {
//     this.changeFilterParams(filter);
//   }
//   changeFilterParams(filter: any) {
//     Object.keys(filter).forEach((key) => {
//       key
//         ? (this.filterParams += `&${key + '=' + filter[key]}`)
//         : this.filterParams;
//     });
//   }
// }
@Injectable({
  providedIn: 'root',
})
export class BlogService extends BaseService<PageInterface<Blog[]>> {
  articlesArray = new BehaviorSubject<Blog[] | null>(null);
  constructor(http: HttpClient) {
    super(http);
  }
  get _articles() {
    return this.articlesArray.value;
  }
  async getArticles(
    path: string,
    _filter?: IFilterBlog
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
            result.data.items
              ? this.articlesArray.next(result.data.items)
              : console.log('Null');
          }

          return result.data;
        } else {
          return result.data;
        }
      })
    );
    return res;
  }
}
