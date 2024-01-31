import { Component } from '@angular/core';
import { CalendarEventsTable } from './calendar-events.model';
import { CommonModule } from '@angular/common';
import { EcoCalService } from 'src/app/classes/services/eco-cal.service';
import { CalEvent } from 'src/app/routes/calendar/calendar-main-page/cal-event.model';
import { AppComponent } from 'src/app/app.component';
import { ImportanceComponent } from 'src/app/routes/calendar/importance/importance.component';

@Component({
  selector: 'table-calendar',
  standalone: true,
  templateUrl: './table-calendar.component.html',
  styles: [
    `
      .table-holder {
        height: 814px;
        position: relative;
      }
      .line-h-custom {
        line-height: 0.5rem !important;
      }
    `,
  ],
  imports: [CommonModule, ImportanceComponent],
  animations: [],
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
        country: {
          flag: it.code,
          symbol: it.currency,
          currencySymbol: it.currencySymbol,
        },
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
    if (AppComponent.isBrowser.value) {
      if (item.active) {
        const element = document.getElementById(`event-details-${item.id}`);
        element?.classList.add('de-active');

        item!.active = false;
      } else {
        let activeItem = this.table.find(
          (it) => it.active == true && it.id !== item.id
        );

        if (activeItem?.id) {
          const element = document.getElementById(
            `event-details-${activeItem!.id}`
          );
          element?.classList.add('de-active');
          activeItem!.active = false;
        }
        const element = document.getElementById(`event-details-${item.id}`);
        element?.classList.remove('de-active');
        this.selectedTr = this.events.find((it) => it.id == item.id)!;
        item!.active = true;
      }
    }
  }

  get importance() {
    let importance: { color: string; title: string };
    switch (this.selectedTr.importance) {
      case 0:
        importance = { title: 'نامشخص', color: '#FCF1F1' };

        break;
      case 1:
        importance = { title: 'پایین', color: '#DFFF00' };

        break;
      case 2:
        importance = { title: 'مهم', color: '#FF5B5B' };

        break;
      case 3:
        importance = { title: 'متوسط', color: '#FFD95B' };

        break;
    }
    return importance!;
  }
}
