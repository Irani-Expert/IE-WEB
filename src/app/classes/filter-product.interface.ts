export class FilterProduct {
  pageIndex: number = 0;
  pageSize: number | null = 12;
  productName: string | null = null;
  categories: number[] = [];
  minPrice: number = 0;
  maxPrice: number = 1000000;
  platForms: number[] = [];
  rates: number[] = [];
  pageOrder: string = 'ID';
}
