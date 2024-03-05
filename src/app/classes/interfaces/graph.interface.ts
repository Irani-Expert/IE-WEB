import { Quotes } from './Quotes';

export interface GraphFinance {
  currencyPairID: number;
  pip: number;
  percentChange: number;
  transactions: Array<Quotes>;
}
