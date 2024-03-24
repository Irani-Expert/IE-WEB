import { BrokerItem } from './api-broker-item.model';

export class ApiBrokerModel {
  title: string;
  id: number;
  description: string;
  orderID: number;
  isActive: boolean;
  updateDate: string;
  createDate: string;
  createBy: number;
  updateBy: number;
  brief: string;
  publishDate: string;
  cardImagePath: string = '';
  secondCardImagePath: string = '';
  secondTitle: string;
  isRTL: boolean = false;
  metaDescription: string;
  browserTitle: string;
  studyTime: string;
  countryIcon: string;
  countryName: string;
  authorAccepted: boolean = false;
  managementAccepted: boolean = false;
  seoAccepted: boolean = false;
  isIRSupport: boolean = false;
  referralLink: string;
  colorCode?: string;
  staticRate: number;
  linkTags: [
    {
      title: string;
      value: number;
    }
  ];
  sharpLinkTags: [
    {
      title: string;
      value: number;
    }
  ];
  faQs: [
    {
      id: number;
      question: string;
      answer: string;
      orderID: number;
    }
  ];
  author: string;
  items: Array<BrokerItem>;
  leverage: number;
  minDeposit: number;
  authorIconExists: boolean = false;
  fileExists: boolean = false;
  authorIconPath: string;
  establishedYear: string;
  phoneNumber: string;
  email: string;
  accountCent: boolean = false;
  tradingSymbols: string;
  telegramSupportLink: string;
  isPersianSupport: boolean = false;
  copyTrade: boolean = false;
  videoLink: string;
  webSiteLink: string;
  advantages: string;
  disAdvantages: string;
}
