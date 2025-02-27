export interface CalendarEventsTable {
  id: number;
  importance: number;
  country: { flag: string; symbol: string; currencySymbol: string };
  event: { name: string; time: string; date: string; id: number };
  forecast_Value: string;
  prev_Value: string;
  actual_Value?: string;
  active: boolean;
  impact_Type: string;
  type: number;
}
