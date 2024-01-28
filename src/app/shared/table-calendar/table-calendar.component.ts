import { Component } from '@angular/core';
import { originalOrderKeyValues } from 'src/app/classes/originalOrderKeys';
import { CalendarEventsTable } from './calendar-events.model';
import { CommonModule } from '@angular/common';
const calendarTableInit: CalendarEventsTable[] = [
  {
    country: {
      flag: 'us',
      symbol: 'USD',
    },
    event: {
      name: 'CPY',
      time: String(new Date()),
    },
    forecast_Value: 's',
    actual_Value: 'a',
    prev_Value: 'b',
    importance: 100,
  },
];

@Component({
  selector: 'table-calendar',
  standalone: true,
  templateUrl: './table-calendar.component.html',
  imports: [CommonModule],
})
export class TableCalendar {
  originalOrder = originalOrderKeyValues<CalendarEventsTable>;
  table = calendarTableInit;
}
