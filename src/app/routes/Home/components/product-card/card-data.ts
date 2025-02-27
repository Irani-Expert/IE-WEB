export interface IcardData {
  id: number;
  title: string;
  imgUrl: string;
  price: number;
  type: number;
  colorCode: string;
  bgColorCode: string;
  hours: string | null;
  session: number | null;
  link: string | null;
  writer: string | null;
  isOrigin: boolean | null;
  publishedBy: string;
}
