export interface Plan {
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
  price: number;
  planType: number;
  maximumBalance: number;
  expireDate: string;
  iconPath: string;
  isFirstBuy: boolean;
  planOptions: PlanOption[];
}
export interface PlanOption {
  id: number;
  updateDate: string;
  createDate: string;
  createBy: number;
  updateBy: number;
  title: string;
  description: string;
  orderID: number;
  isActive: boolean;
  planID: number;
  plan: string;
  price: number;
  iconPath: string;
}
