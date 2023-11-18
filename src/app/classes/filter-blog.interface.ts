export interface IFilterBlog {
  pageIndex: number;
  pageSize: number | null;
  blogName: string | null;
  categories: number[];
  rates: number[];
}
