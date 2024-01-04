export class FilterBlog {
  pageIndex: number = 0;
  pageSize: number | null = 12;
  blogName: string | null = null;
  categories: number[] = [];
  rates: number[] = [];
}
