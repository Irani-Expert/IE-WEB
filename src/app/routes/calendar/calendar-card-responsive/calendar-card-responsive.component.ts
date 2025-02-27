import { Component, Input } from '@angular/core';
import { CalEvent } from '../calendar-main-page/cal-event.model';
import { CalendarEventsTable } from 'src/app/routes/calendar/table-calendar/calendar-events.model';

@Component({
  selector: 'app-calendar-card-responsive',
  templateUrl: './calendar-card-responsive.component.html',
  styleUrls: ['./calendar-card-responsive.component.scss'],
})
export class CalendarCardResponsiveComponent {
  @Input('row') Row: CalEvent = new CalEvent();
  singleRow: CalendarEventsTable;
  borderColor: string;
  ngOnInit() {
    this.setTable(this.Row);
  }

  setTable(items: CalEvent) {
    if (this.Row.importance == 1) {
      this.borderColor = '#DFFF00';
    } else if (this.Row.importance == 2) {
      this.borderColor = '#FFD95B';
    } else if (this.Row.importance == 3) {
      this.borderColor = '#FF0000';
    } else {
      this.borderColor = '#FCF1F1';
    }
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
