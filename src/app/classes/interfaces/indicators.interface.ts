import { CalEvent } from 'src/app/routes/calendar/calendar-main-page/cal-event.model';
import { ITags } from './tags.interface';

export interface IndicatorsModel {
  details: IndicatorsDetails;
  lastWeek: CalEvent[];
  lastValues: CalEvent[];
  linkTags: ITags[];
  sharpLinkTags: ITags[];
  indicators: IndicatorsCalendar[];
}
export interface IndicatorsDetails {
  id: number;
  name: string;
  code: string;
  currency: string;
  currencySymbol: string;
  title: string;
  browserTitle: string;
  description: string;
}

export interface IndicatorsCalendar {
  id: number;
  title: string;
  secondTitle: string;
  changePercent: number;
  lastValue: number;
}
