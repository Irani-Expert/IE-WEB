import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, lastValueFrom, map } from 'rxjs';
import { FilterBlog } from '../interfaces/filter-blog.interface';
import { Blog, SingleBlog } from '../interfaces/blog.interface';
import { PageInterface } from '../page.model';

@Injectable({
  providedIn: 'root',
})
export class BlogService extends BaseService<any> {
  blogsArray = new BehaviorSubject<PageInterface<Blog[]> | null>(null);
  singleBlog = new BehaviorSubject<SingleBlog | null>(null);
  constructor(http: HttpClient) {
    super(http);
  }
  get _paginatedBlogs() {
    return this.blogsArray.value;
  }
  get _blog() {
    return this.singleBlog.value;
  }
  async getBlogsFromApi(path: string, _filter?: FilterBlog) {
    const res = this.post(path, _filter).pipe(
      map((result) => {
        if (result.success) {
          this.blogsArray.next(result.data);
          return result.success;
        } else {
          return result.success;
        }
      })
    );
    return res;
  }
  async getBlog(title: string) {
    const result = this.get(`Article/details?title=${title}`).pipe(
      map((res) => {
        if (res.success) this.singleBlog.next(res.data);
        return res.success;
      })
    );
    return await lastValueFrom(result);
  }
}
