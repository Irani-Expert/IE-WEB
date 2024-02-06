export interface Country {
  id: string | number;
  name: string;
  currency?: string;
  currencySymbol?: string;
  code: string;
  active: boolean;
  readonly lowValues?: number;
  readonly moderateValues?: number;
  readonly highValues?: number;
  readonly noneValues?: number;
  latLong?: [number, number];
  events?: {
    lowValues: { count: number; readonly color: '#DFFF00' };
    moderateValues: { count: number; readonly color: '#FFD95B' };
    highValues: { count: number; readonly color: '#FF5B5B' };
    noneValues: { count: number; readonly color: '#FCF1F1' };
  };
}
