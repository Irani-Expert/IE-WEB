import { Quotes } from './quotes';

export interface GraphFinance {
  currencyPairID: number;
  title: string;
  pip: number;
  percentChange: number;
  transactions: Array<Quotes>;
}
