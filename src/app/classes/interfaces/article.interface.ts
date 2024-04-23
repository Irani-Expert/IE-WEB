import { ITags } from './tags.interface';

export interface IArticle {
  items: ITags[];
  sharpLinkTags: ITags[] | null;
}
