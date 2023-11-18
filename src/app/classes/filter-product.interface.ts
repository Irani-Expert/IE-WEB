export interface IFilterProduct {
  pageIndex: number;
  pageSize: number | null;
  productName?: string;
  categories: number[];
  minPrice: number;
  maxPrice: number;
  platForms: number[];
  rates: number[];
  pageOrder: string;
}
