export interface IProducts {
  id: number;
  title: string;
  description: string;
  rate: number;
  viewsCount: number;
  minPrice: number;
  linkTag: ILinkTag[];
}
export interface ILinkTag {
  id: number;
  name: string;
  icon: string;
}
