import { Component, Input } from '@angular/core';
import { CalEvent } from '../calendar-main-page/cal-event.model';
import { CalendarEventsTable } from 'src/app/shared/table-calendar/calendar-events.model';

@Component({
  selector: 'app-calendar-card-responsive',
  templateUrl: './calendar-card-responsive.component.html',
  styleUrls: ['./calendar-card-responsive.component.scss'],
})
export class CalendarCardResponsiveComponent {
  @Input('row') Row: CalEvent = new CalEvent();
  singleRow: CalendarEventsTable;
  borderColor: string = '#FF0000';
  ngOnInit() {
    this.setTable(this.Row);
  }

  setTable(items: CalEvent) {
    this.singleRow = {
      active: false,
      id: items.id,
      country: {
        flag: items.code,
        symbol: items.currency,
        currencySymbol: items.currencySymbol,
      },
      event: {
        name: items.name,
        time: items.time_,
        date: items.date_,
        id: items.eventID,
      },
      forecast_Value: items.forecast_Value.toString(),
      importance: items.importance,
      impact_Type: items.impact_Type,
      prev_Value: items.prev_Value.toString(),
      actual_Value: items.actual_Value.toString(),
      type: items.type,
    };
  }
}
