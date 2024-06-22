import { FAQ } from 'src/app/routes/Home/components/questions/interfaces/faq-interfce';

export interface Blog {
  id: number;
  title: string;
  updateDate: string;
  updatedByFirstName: string;
  updatedByLastName: string;
  cardImagePath: string;
  viewsCount: number;
  authorIconPath: string;
  studyTime: string;
  publishDate: string;
  browserTitle: string;
  isRTL: boolean;
  brief: string;
  createDate: string;
  favoriteCount : number;
  colorCode: string;
  isActive?: boolean;
}
export interface SingleBlog {
  createDate: string;
  id: number;
  title: string;
  description: string;
  groupID: number;
  group: string;
  groupIcon: string;
  groupIconExists: boolean;
  brief: string;
  publishDate: string;
  cardImagePath: string;
  viewsCount: number;
  rate: number;
  commentCount: number;
  updatedByFirstName: string;
  updatedByLastName: string;
  authorIconPath: string;
  studyTime: string;
  authorIconExists: boolean;
  fileExists: boolean;
  isRTL: boolean;
  metaDescription: string;
  browserTitle: string;
  favoriteCount : number;
  colorCode: string;
  isActive?: boolean;
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
  faQs: FAQ[];
}
