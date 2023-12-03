export interface Basket {
  basketItems: BskItem[];
  totalPrice: number;
  totalCount: number;
}
export interface BskItem {
  id?: number;
  title?: string;
  price: number;
  imgPath?: string;
  count: number;
  tableType: number;
  rowID: number;
}
