import { FAQ } from '../../routes/Home/components/questions/interfaces/faq-interfce';
import { Backtest } from './backtest.interface';
import { Comment } from './comment.interface';
import { Facility } from './facility.interface';
import { Gallery } from './gallery.interface';
import { Learn } from './learn.interface';
import { Plan } from './plan.interface';
import { Rule } from './rules.interface';

export interface Product {
  id: number;
  updateDate: string;
  createDate: string;
  createBy: number;
  updateBy: number;
  title: string;
  description: string;
  orderID: number;
  isActive: boolean;
  cardImagePath: string;
  iconPath: string;
  type: number;
  typeTitle: string;
  facilities: [
    {
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
    }
  ];
  minPrice: number;
  rate: number;
  publishedBy: string;
  platformType: number;
  platformTypeTitle: string;
  viewsCount: number;
}
export interface SingleProduct {
  versionHistory: string;
  colorCode: string;
  isRTL: boolean;
  secondTitle: string;
  authorizeAccepted: boolean;
  managementAccepted: boolean;
  seoAccepted: boolean;
  metaDescription: string;
  browserTitle?: string;
  id: number;
  updateDate: string;
  createDate: string;
  createBy: number;
  updateBy: number;
  title: string;
  description: string;
  orderID: number;
  isActive: boolean;
  cardImagePath: string;
  iconPath: string;
  type: number;
  typeTitle: string;
  platformType: number;
  platformTypeTitle: string;
  brief: string;
  secondaryTitle: string;
  rate: number;
  platforms: number[];
  publishedBy: string;
  viewsCount: number;
  plans: Plan[];
  comments: Comment[];
  faQs: FAQ[];
  learns: Learn[];
  galleries: Gallery[];
  facilities: Facility[];
  backTests: Backtest[];
  rules: Rule[];
  linkTags: [
    {
      title: string;
      value: number;
    }
  ];
}
