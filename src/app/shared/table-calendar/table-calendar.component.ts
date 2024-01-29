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
    forecast_Value: '8.920M',
    actual_Value: '8.920M',
    prev_Value: '8.920M',
  },
];

@Component({
  selector: 'table-calendar',
  standalone: true,
  templateUrl: './table-calendar.component.html',
  imports: [CommonModule],
})
export class TableCalendar {
  isSyncing = false;
  table = calendarTableInit;
  constructor() {
    this.table.unshift(
      {
        importance: 1,
        country: {
          flag: 'it',
          symbol: 'GBP',
        },
        event: {
          name: 'گزارش موقعیت های شغلی اشغال نشده (اوت) ',
          time: String(new Date()),
        },
        forecast_Value: '8.920M',
        actual_Value: '8.920M',
        prev_Value: '8.920M',
      },
      {
        importance: 1,
        country: {
          flag: 'it',
          symbol: 'GBP',
        },
        event: {
          name: 'گزارش موقعیت های شغلی اشغال نشده (اوت) ',
          time: String(new Date()),
        },
        forecast_Value: '8.920M',
        prev_Value: '8.920M',
      }
    );
  }

  getActualValue() {
    this.isSyncing = !this.isSyncing;
  }
}
