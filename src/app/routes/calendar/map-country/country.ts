import { CalEvent } from '../calendar-main-page/cal-event.model';

export interface Country {
  id: string | number;
  name: string;
  currency?: string;
  currencySymbol?: string;
  code: string;
  active: boolean;
  latLong?: [number, number];
  events?: CalEvent[];
}
