export interface IFilterGroup {
  id: number;
  title: string;
  active: boolean;
  type?: number;
  chevronState: 'rotated' | 'default';
}

export interface Category {
  id: number;
  title: string;
  checked: boolean;
}
export enum Type {
  Category,
  Rating,
  PriceRange,
  Producer,
}
