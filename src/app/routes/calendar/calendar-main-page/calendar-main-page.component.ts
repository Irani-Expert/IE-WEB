import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { EcoCalService } from 'src/app/classes/services/eco-cal.service';
import { BehaviorSubject, lastValueFrom } from 'rxjs';
import { importances } from '../importance/importances';
import { Importance } from '../importance/importance.interface';
import { Filter as FilterEvents } from './filter.model';
import { TableCalendar } from 'src/app/shared/table-calendar/table-calendar.component';
import { DatePipe } from '@angular/common';

import { CalEvent } from './cal-event.model';
// import { TradingViewComponent } from 'src/app/components/trading-view/trading-view.component';
import { LinkService } from 'src/app/classes/services/link.service';
import { Utils } from 'src/app/classes/utils';
import { TradingViewComponent } from 'src/app/components/trading-view/trading-view.component';
interface trend_data {
  currency: string;
  percent: string;
  trend: boolean;
}
@Component({
  selector: 'app-calendar-main-page',
  templateUrl: './calendar-main-page.component.html',
  styleUrls: ['./calendar-main-page.component.scss'],
})
export class CalendarMainPageComponent {
  @ViewChild('tradingView') tradingView: ElementRef;

  device: 'md' | 'lg';
  eventsHolder = new Array<CalEvent>();
  @ViewChild(TableCalendar, { static: false }) appTableComponent: TableCalendar;
  filteredModel = new FilterEvents();
  filter = new BehaviorSubject<FilterEvents>(new FilterEvents());
  filter$ = this.filter.asObservable();
  importances = importances;
  today: string | undefined;
  tvStatus: number = 0;
  constructor(
    private ecoCalService: EcoCalService,
    public datepipe: DatePipe,
    private _linkService: LinkService
  ) {
    this.today = this.datepipe.transform(new Date(), 'yyyy/MM/dd')?.toString();
    this._linkService.createLink(
      `https://www.iraniexpert.com/economic-calendar`
    );
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
    this.checkDevice();
    AppComponent.changeMainBg('creamy');
  }
  async ngAfterViewInit() {
    // TradingViewComponent.createView();
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

  ngAfterContentInit() {}
  ngOnDestroy() {
    AppComponent.changeMainBg('white');
  }

  async getCal(filter: FilterEvents, pageIndex: number = 0) {
    const apiData = this.ecoCalService.getCalEvents(
      `pageIndex=${pageIndex}&pageSize=16&accending=true`,
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
    this.appTableComponent.table = [];
    this.getCal(this.filteredModel);
    this.filter.next(this.filteredModel);
  }
  setSymbolServices(event: string[]) {
    this.filteredModel.currencies = event;
    this.appTableComponent.table = [];
    this.getCal(this.filteredModel);
    this.filter.next(this.filteredModel);
  }
  setCalDate(event: Date[]) {
    if (event[1] == undefined || String(event[0]) === String(event[1])) {
      let currentdate = this.datepipe.transform(event[0], 'yyyy.MM.dd');
      this.filteredModel.currentTime = '';
      if (currentdate != null) this.filteredModel.currentTime = currentdate;
      this.today = currentdate?.toString();
      this.today = this.today?.replaceAll('.', '/');
      this.filteredModel.fromTime = null;
      this.filteredModel.toTime = null;
      this.appTableComponent.table = [];
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
      this.appTableComponent.table = [];

      this.getCal(this.filteredModel);
      this.filter.next(this.filteredModel);
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkDevice();
  }
  checkDevice() {
    if (AppComponent.isBrowser.value) {
      if (Utils.isTablet()) {
        this.device = 'md';
      } else {
        this.device = 'lg';
      }
    } else {
      console.log(
        'App is Running On Server ==> Window Resizing Listening Denied'
      );
    }
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    if (AppComponent.isBrowser.value) {
      if (
        Utils.scrollTracker() > this.tradingView.nativeElement.offsetTop &&
        this.tvStatus == 0
      ) {
        this.addTradingView();
      }
    } else {
      console.log('App is On Servers ==>  Tracking the Scroll Denied');
    }
  }

  addTradingView() {
    this.tvStatus = TVStatus.Created;
    setTimeout(() => {
      TradingViewComponent.createView();
    }, 500);
  }
}

enum TVStatus {
  NotCreated,
  Created,
}
