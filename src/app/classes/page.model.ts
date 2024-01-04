export interface PageInterface<T> {
  pageNumber: number;
  totalPages?: number;
  totalCount?: number;
  pageSize?: number;
  items?: T;
}
export class PageModel<T> implements PageInterface<T> {
  pageNumber: number;
  hasNextPage: boolean;
  hasPreviousPage: false;
  totalPages?: number | undefined;
  totalCount?: number | undefined;
  pageSize?: number | undefined;
  items: T;
}
export class Page<T> {
  page: PageInterface<T>;
  constructor(page: PageInterface<T>) {
    this.page = page;
  }
  get _current() {
    return this.page.pageNumber;
  }
  get _prev() {
    return this._current - 1;
  }
  get _next() {
    return this._current + 1;
  }
  get _items() {
    return this.page.items;
  }
  get totalPages() {
    return this.page.totalPages;
  }
  // next() {
  //   this.page.pageNumber;
  // }
  // prev() {
  //   this.page.pageNumber;
  // }
  get params() {
    let res = `?pageIndex=${this.page.pageNumber}`;
    if (this.page.pageSize) {
      res += `&pageSize=${this.page.pageSize}`;
    }
    return res;
  }
}
