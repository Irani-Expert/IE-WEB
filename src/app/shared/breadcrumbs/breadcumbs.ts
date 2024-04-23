import { promises } from 'dns';

export interface IBreadcumbs {
  route: string;
  persianRoute: Promise<string>;
  url: string;
}
