export interface IndicatorsModel {
    success: boolean;
    message: string;
    errors: [string];
    details : IndicatorsDetails[];
    lastWeek : IndicatorsLastWeek[];
    lastValues : IndicatorsLastValues[];
    linkTags : IndicatorsTags[];
    sharpLinkTags : IndicatorsTags[];
    indicators : IndicatorsCalendar[];
}
export interface IndicatorsDetails{
    id: number;
    name: string;
    code: string;
    currency: string;
    currencySymbol: string;
    title: string;
    browserTitle: string;
    description: string;
}

export interface IndicatorsLastWeek{
    id: number;
    date_: string;
    time_: string;
    actual_Value: string;
    prev_Value: string;
    forecast_Value: string;
    impact_Type: string;
    name: string;
    type: number;
    sector: number;
    time_Mode: number;
    unit: number;
    multiplier: number;
    importance: number;
    currency: string;
    code: string;
    currencySymbol: string;
    eventID: number;
    secondName: string;
}

export interface IndicatorsLastValues{
    id: number;
    date_: string;
    time_: string;
    actual_Value: string;
    prev_Value: string;
    forecast_Value: string;
    impact_Type: string;
    name: string;
    type: number;
    sector: number;
    time_Mode: number;
    unit: number;
    multiplier: number;
    importance: number;
    currency: string;
    code: string;
    currencySymbol: string;
    eventID: number;
    secondName: string;
}

export interface IndicatorsTags {
    title: string;
    value: 0;
}

export interface IndicatorsCalendar {
    id: number;
    title: string;
    secondTitle: string;
    changePercent: number;
    lastValue: number;
}