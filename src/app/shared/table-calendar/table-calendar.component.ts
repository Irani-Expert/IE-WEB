import { Component } from '@angular/core';
import { CalendarEventsTable } from './calendar-events.model';
import { CommonModule } from '@angular/common';
import { EcoCalService } from 'src/app/classes/services/eco-cal.service';
import { CalEvent } from 'src/app/routes/calendar/calendar-main-page/cal-event.model';

@Component({
  selector: 'table-calendar',
  standalone: true,
  templateUrl: './table-calendar.component.html',
  styles: [
    `
      .table-holder {
        height: 500px;
        position: relative;
      }
    `,
  ],
  imports: [CommonModule],
})
export class TableCalendar {
  tableIsLoading = true;
  events: CalEvent[] = new Array<CalEvent>();
  isSyncing = false;
  table: CalendarEventsTable[];
  selectedTr: CalEvent;
  constructor(private _ecoCalService: EcoCalService) {
    this.table = [];
  }
  ngAfterViewInit() {
    this.getCalendarValues();
  }
  getActualValue() {
    this.isSyncing = !this.isSyncing;
  }

  getCalendarValues() {
    const pageObservable$ =
      this._ecoCalService.paginatedCalendar.asObservable();
    pageObservable$.subscribe({
      next: (it) => {
        if (it) {
          this.events = it.items!;
          this.setTable(it.items);
        }
      },
    });
  }

  setTable(items: CalEvent[] = new Array<CalEvent>()) {
    this.tableIsLoading = true;
    items.forEach((it) => {
      const itemToPourInTable: CalendarEventsTable = {
        active: false,
        id: it.id,
        country: { flag: it.code, symbol: it.currency },
        event: { name: it.name, time: it.time_ },
        forecast_Value: it.forecast_Value.toString(),
        importance: it.importance,
        prev_Value: it.prev_Value.toString(),
        actual_Value: it.actual_Value.toString(),
      };
      this.table.push(itemToPourInTable);
    });
    this.tableIsLoading = false;
  }

  showDetails(item: CalendarEventsTable) {
    if (item.active) {
      item.active = false;
    } else {
      this.selectedTr = this.events.find((it) => it.id == item.id)!;
      this.table.forEach((it) => (it.active = false));
      item.active = true;
    }
  }
}
