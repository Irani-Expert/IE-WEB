export interface IMenuItem {
  id: number;
  title: string;
  name: string;
  path?: string;
  sub?: IChildItem[] | undefined;
  icon?: string;
  type: 'dropdown' | 'link';
  active?: boolean;
  activeRoute?: boolean;
}
interface IChildItem extends IMenuItem {
  parentID: number;
}
