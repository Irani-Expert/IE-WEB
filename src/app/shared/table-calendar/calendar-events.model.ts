export interface CalendarEventsTable {
  importance: number;
  country: { flag: string; symbol: string };
  event: { name: string; time: string };
  forecast_Value: string;
  prev_Value: string;
  actual_Value?: string;
}
