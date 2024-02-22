export interface GraphFinance {
  base_currency: string;
  end_date: string;
  endpoint: string;
  quote_currency: string;
  quotes: Array<Quotes>;
  request_time: string;
  start_date: string;
}

export interface Quotes {
  close: number;
  high: number;
  low: number;
  open: number;
  date: string;
}
