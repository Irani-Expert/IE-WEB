export interface Backtest {
  id: number;
  updateDate: string;
  createDate: string;
  createBy: number;
  updateBy: number;
  title: string;
  description: string;
  orderID: number;
  isActive: boolean;
  productID: number;
  product: string;
  videoUrl: string;
  fileUrl: string;
  cardImagePath: string;
}
