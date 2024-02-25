import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { EcoCalService } from 'src/app/classes/services/eco-cal.service';
import { BehaviorSubject, lastValueFrom } from 'rxjs';
import { importances } from '../importance/importances';
import { Importance } from '../importance/importance.interface';
import { Filter as FilterEvents } from './filter.model';
import { TableCalendar } from 'src/app/shared/table-calendar/table-calendar.component';
import { DatePipe } from '@angular/common';

import { CalEvent } from './cal-event.model';
interface trend_data {
  currency: string;
  percent: string;
  trend: boolean;
}
@Component({
  selector: 'app-calendar-main-page',
  templateUrl: './calendar-main-page.component.html',
  styleUrls: ['./calendar-main-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CalendarMainPageComponent {
  eventsHolder = new Array<CalEvent>();
  @ViewChild(TableCalendar, { static: false }) appTableComponent: TableCalendar;
  filteredModel = new FilterEvents();
  filter = new BehaviorSubject<FilterEvents>(new FilterEvents());
  filter$ = this.filter.asObservable();
  importances = importances;
  today: string | undefined;
  constructor(private ecoCalService: EcoCalService, public datepipe: DatePipe) {
    this.today = this.datepipe.transform(new Date(), 'yyyy/MM/dd')?.toString();
  }
  data: trend_data[] = [
    {
      currency: 'XAU USD',
      percent: '-2',
      trend: false,
    },
    {
      currency: 'USD JPY',
      percent: '+1',
      trend: true,
    },
    {
      currency: 'GBP USD',
      percent: '-0.2',
      trend: false,
    },
    {
      currency: 'AUD USD',
      percent: '+2',
      trend: true,
    },
  ];
  ngOnInit() {
    AppComponent.changeMainBg('creamy');
  }
  async ngAfterViewInit() {
    this.filter$.subscribe({
      next: async (item) => {
        this.appTableComponent.tableIsLoading = true;
        this.appTableComponent.events = [];
        this.appTableComponent.table = [];
        await this.getCal(item);
        this.appTableComponent.tableIsLoading = false;
      },
    });
  }
  ngOnDestroy() {
    AppComponent.changeMainBg('white');
  }

  async getCal(filter: FilterEvents, pageIndex: number = 0) {
    const apiData = this.ecoCalService.getCalEvents(
      `pageIndex=${pageIndex}&pageSize=10&accending=true`,
      filter
    );

    return await lastValueFrom(apiData);
  }

  setImportance(item: Importance) {
    let index = this.filteredModel.importance.findIndex(
      (it) => it == item.value
    );
    if (index == -1) {
      this.filteredModel.importance.push(item.value);
      this.filter.next(this.filteredModel);
    } else {
      this.filteredModel.importance.splice(index, 1);
      this.filter.next(this.filteredModel);
    }
  }
  showMore(index: number = 0, type: 'getted' | 'want-more' = 'want-more') {
    if (type == 'want-more') {
      this.getCal(this.filteredModel, index);
    }
    if (type == 'getted') {
      this.appTableComponent.setTable(this.appTableComponent.events);
      console.log(1);
    }
  }
  showLess() {
    this.appTableComponent.table.splice(9, this.appTableComponent.table.length);
  }
  setResTable(items: CalEvent[] = new Array<CalEvent>()) {
    console.log(items);
  }
  get pageNumber() {
    if (this.ecoCalService.paginatedCalendar.value?.pageNumber) {
      return this.ecoCalService.paginatedCalendar.value?.pageNumber;
    } else {
      return 0;
    }
  }

  ////////////////////////// today

  setSectionServices(event: number[]) {
    var data: number[] = [];
    event.forEach((x) => {
      data.push(x);
    });

    this.filteredModel.sectors = data;
    this.getCal(this.filteredModel);
    this.filter.next(this.filteredModel);
  }
  setSymbolServices(event: string[]) {
    this.filteredModel.currencies = event;
    this.getCal(this.filteredModel);
    this.filter.next(this.filteredModel);
  }
  setCalDate(event: Date[]) {
    if (event[1] == undefined) {
      let currentdate = this.datepipe.transform(event[0], 'yyyy.MM.dd');
      this.filteredModel.currentTime = '';
      if (currentdate != null) this.filteredModel.currentTime = currentdate;
      this.today = currentdate?.toString();
      this.today = this.today?.replaceAll('.', '/');
      this.getCal(this.filteredModel);
      this.filter.next(this.filteredModel);
    } else {
      let fromDate = this.datepipe.transform(event[0], 'yyyy.MM.dd');
      let Todate = this.datepipe.transform(event[1], 'yyyy.MM.dd');
      this.today = Todate?.toString() + '-' + fromDate?.toString();
      this.today = this.today?.replaceAll('.', '/');
      this.filteredModel.currentTime = '';
      if (fromDate != null) this.filteredModel.fromTime = fromDate;
      if (Todate != null) this.filteredModel.toTime = Todate;

      this.getCal(this.filteredModel);
      this.filter.next(this.filteredModel);
    }
  }
}
