import { Component } from '@angular/core';
import { CalendarEventsTable } from './calendar-events.model';
import { CommonModule } from '@angular/common';
const calendarTableInit: CalendarEventsTable[] = [
  {
    importance: 2,
    country: {
      flag: 'us',
      symbol: 'USD',
    },
    event: {
      name: 'گزارش موقعیت های شغلی اشغال نشده (اوت) ',
      time: String(new Date()),
    },
    forecast_Value: 's',
    actual_Value: 'a',
    prev_Value: 'b',
  },
];

@Component({
  selector: 'table-calendar',
  standalone: true,
  templateUrl: './table-calendar.component.html',
  imports: [CommonModule],
})
export class TableCalendar {
  table = calendarTableInit;
  constructor() {
    this.table.push({
      importance: 3,
      country: {
        flag: 'it',
        symbol: 'GBP',
      },
      event: {
        name: 'گزارش موقعیت های شغلی اشغال نشده (اوت) ',
        time: String(new Date()),
      },
      forecast_Value: 's',
      actual_Value: 'a',
      prev_Value: 'b',
    });
  }
}
