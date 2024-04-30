import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { EcoCalService } from 'src/app/classes/services/eco-cal.service';
import { BehaviorSubject, lastValueFrom, map } from 'rxjs';
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
import { ResponsiveTableComponent } from '../responsive-table/responsive-table.component';
import { FileService } from 'src/app/classes/services/file.service';
import { CalendarCountry } from 'src/app/classes/interfaces/calendarcountry';
import { BlogService } from 'src/app/classes/services/blog.service';
import { Meta } from '@angular/platform-browser';

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
  @ViewChild(ResponsiveTableComponent, { static: false })
  appResponsiveTableComponent: ResponsiveTableComponent;
  filteredModel: FilterEvents;
  calendarCountry : CalendarCountry[] ;
  // filter = new BehaviorSubject<FilterEvents>(new FilterEvents());
  // filter$ = this.filter.asObservable();
  importances = importances;
  today: string | undefined;
  tvStatus: number = 0;
  constructor(
    public blogService : BlogService,
    private _fileService: FileService,
    private _ecoCalService: EcoCalService,
    public datepipe: DatePipe,
    private _linkService: LinkService,
    private _meta: Meta
  ) {
    // this._fileService.getFile(1, 6, 0);
    this._ecoCalService.filter.subscribe((data) => {
      this.filteredModel = data;
    });
    this.today = this.datepipe.transform(new Date(), 'yyyy/MM/dd')?.toString();
    this._linkService.createLink(
      `https://www.iraniexpert.com/economic-calendar`
    );
  }
  async ngOnInit() {
    this.checkDevice();
    AppComponent.changeMainBg('creamy');

    if (AppComponent.isBrowser.value) {
      this.getCalendarCountry();
    }
  }


  sendData = false;

  async getDetail(title: string, language: string) {
    const apiRes = await this.blogService.getBlog(title, language);
    return apiRes;
  }

  async ngAfterViewInit() {
    // TradingViewComponent.createView();
    this._ecoCalService.filter$.subscribe({
      next: async (item) => {
        this.appTableComponent.tableIsLoading = true;
        this.appTableComponent.events = [];
        this.appTableComponent.table = [];
        if (item.currentTime !== '' && item.currentTime) {
          await this.getCal(item);
        } else {
          await this.getCal(item, 0, 16);
        }
        this.appTableComponent.tableIsLoading = false;
      },
    });

    if (await this.getDetail('calendar', 'fa')) {

      let keywords = '';
      this.blogService._blog!.linkTags.forEach((item) => {
        keywords += `${item.title.replace(/#/g, '')},`;
      });
    // =======[متاتگ ها]======
    this._meta.updateTag({
      name: 'description',
      content: this.blogService._blog!.metaDescription,
    });
    this._meta.updateTag({
      name: 'author',
      content:
      this.blogService._blog!.updatedByFirstName +
      this.blogService._blog!.updatedByLastName,
    });
    this._meta.updateTag({
      name: 'keywords',
      content: keywords,
    });

      this.sendData = true;
    }

  }

  // =====[هرکشور]====
  sendDataToChild = false;
  async getCalendarCountry(){
    const res = await this._ecoCalService.getCalendarCountry('CalendarCountry?pageIndex=0&accending=false');
    if(res) {
      this.calendarCountry = res;
    }
    this.sendDataToChild = true;
  }

  ngAfterContentInit() {}
  ngOnDestroy() {
    AppComponent.changeMainBg('white');
  }

  async getCal(filter: FilterEvents, pageIndex: number = 0, pageSize?: number) {
    let orderType: 'Time_' | 'Date_';
    if (filter.currentTime !== '' || filter.currentTime) {
      orderType = 'Time_';
    } else {
      orderType = 'Date_';
    }
    const apiData = this._ecoCalService.getCalEvents(
      `pageIndex=${pageIndex}&pageSize=${
        pageSize ? pageSize : null
      }&accending=true&pageOrder=${orderType}`,
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
      this._ecoCalService.filter.next(this.filteredModel);
    } else {
      this.filteredModel.importance.splice(index, 1);
      this._ecoCalService.filter.next(this.filteredModel);
    }
  }

  showMoreOrLess(type: any) {
    if (type == 'more') {
      this.showMore();
    } else {
      this.showLess();
    }
  }
  async showMore() {
    this.appTableComponent.setTable(this.appTableComponent.events);
    this.appResponsiveTableComponent.setTable(
      this.appResponsiveTableComponent.events
    );
  }
  showLess() {
    Utils.scrollToView('tableContainer');
    this.appTableComponent.table.splice(
      16,
      this.appTableComponent.table.length
    );
    this.appResponsiveTableComponent.table?.splice(
      16,
      this.appResponsiveTableComponent.table.length
    );
  }
  // setResTable(items: CalEvent[] = new Array<CalEvent>()) {
  //   console.log(items);
  // }

  // Pagination

  // Show More
  get pageNumber() {
    if (this._ecoCalService.paginatedCalendar.value?.pageNumber) {
      return this._ecoCalService.paginatedCalendar.value?.pageNumber;
    } else {
      return 0;
    }
  }

  get tableLength() {
    let length = this.appTableComponent?.table.length;
    if (length) {
      return length;
    } else {
      return 0;
    }
  }

  // controls

  async setPage(page: number) {
    this.appTableComponent.table = [];
    this.appTableComponent.events = [];
    this.appResponsiveTableComponent.events = [];
    await this.getCal(this.filteredModel, page - 1, 16);
  }

  // Pagination
  ////////////////////////// today

  setSectionServices(event: number[]) {
    var data: number[] = [];
    event.forEach((x) => {
      data.push(x);
    });

    this.filteredModel.sectors = data;
    this.appTableComponent.table = [];

    this._ecoCalService.filter.next(this.filteredModel);
  }
  setSymbolServices(event: string[]) {
    this.filteredModel.currencies = event;
    this.appTableComponent.table = [];

    this._ecoCalService.filter.next(this.filteredModel);
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
      this.appTableComponent.showDate = false;
      this._ecoCalService.filter.next(this.filteredModel);
    } else {
      let fromDate = this.datepipe.transform(event[0], 'yyyy.MM.dd');
      let Todate = this.datepipe.transform(event[1], 'yyyy.MM.dd');
      this.today = Todate?.toString() + '-' + fromDate?.toString();
      this.today = this.today?.replaceAll('.', '/');
      this.filteredModel.currentTime = '';
      if (fromDate != null) this.filteredModel.fromTime = fromDate;
      if (Todate != null) this.filteredModel.toTime = Todate;
      this.appTableComponent.table = [];
      this.appTableComponent.showDate = true;
      this._ecoCalService.filter.next(this.filteredModel);
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
  // countriesList : Array<string> = ['Usa','England','Sweden','Switzerland','Spain','','Australia','Brazil',]
}

enum TVStatus {
  NotCreated,
  Created,
}
