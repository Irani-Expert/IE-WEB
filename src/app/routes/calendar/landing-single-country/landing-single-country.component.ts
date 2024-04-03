import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { LinkService } from 'src/app/classes/services/link.service';
import { TableCalendar } from 'src/app/shared/table-calendar/table-calendar.component';
import { Indicatorservice } from 'src/app/classes/services/Indicators.service';
import { lastValueFrom } from 'rxjs';
import { EcoCalService } from 'src/app/classes/services/eco-cal.service';
import { Page, PageInterface } from 'src/app/classes/page.model';
import { CalEvent } from '../calendar-main-page/cal-event.model';
import { IndicatorsModel } from 'src/app/classes/interfaces/indicators.interface';
import { Utils } from 'src/app/classes/utils';
import { importances } from '../importance/importances';
import { Importance } from '../importance/importance.interface';

interface ValueType {
  active: boolean;
  value: string;
  key: number;
}

@Component({
  selector: 'app-landing-single-country',
  templateUrl: './landing-single-country.component.html',
  styleUrls: ['./landing-single-country.component.scss'],
})
export class LandingSingleCountryComponent {
  importances = importances;

  valueTypes: ValueType[] = [
    {
      active: false,
      value: 'آخرین رویداد ها',
      key: 1,
    },
    {
      active: false,
      value: 'هفته‌ی اخیر',
      key: 0,
    },
  ];
  title: string = '';
  language: string = '';
  indicatorsData: IndicatorsModel;

  @ViewChild(TableCalendar, { static: false }) appTableComponent: TableCalendar;

  constructor(
    private indicatorservice: Indicatorservice,
    private _state: ActivatedRoute,
    private _linkService: LinkService,
    private _ecoCalService: EcoCalService
  ) {
    AppComponent.changeMainBg('creamy');
    this._state.url.subscribe((it) => {
      this.title = it[0].path.split('_').join(' ');
    });
  }

  async ngOnInit() {
    this._linkService.createLink(
      `https://www.iraniexpert.com/economic-calendar/${this.title}`
    );

    const req = this.indicatorservice.get(
      `CalendarCountry/GetDetailsAndHistory?browserTitle=${this.title}`
    );
    const res = await lastValueFrom(req);
    if (res.success) {
      this.indicatorsData = res.data!;
      // =======[ جایگذاری changePercent ]=======
      for (let i = 0; i <= 3; i++) {
        this.groupCardPart1.items[i].changePercent =
          res.data!.indicators[i].changePercent;
        this.groupCardPart1.items[i].lastValue =
          res.data!.indicators[i].lastValue;
        if (i <= 1) {
          this.groupCardPart2.items[i].lastValue =
            res.data!.indicators[i + 4].lastValue;
        }
        // this.groupCardPart1.items[i].changePercent = res.data!.indicators[i].changePercent;
        // this.groupCardPart1.items[i].changePercent = res.data!.indicators[i].changePercent;
        // this.groupCardPart1.items[3].changePercent = res.data!.indicators[3].changePercent;
      }
      // =======[ جایگذاری lastvalue ]=======
      // this.groupCardPart1.items[0].lastValue = res.data!.indicators[0].lastValue;
      // this.groupCardPart1.items[1].lastValue = res.data!.indicators[1].lastValue;
      // this.groupCardPart1.items[2].lastValue = res.data!.indicators[2].lastValue;
      // this.groupCardPart1.items[3].lastValue = res.data!.indicators[3].lastValue;
      res.data?.lastValues.forEach((it) => {
        it.code = res.data?.details.code!;
        it.currency = res.data?.details.currency!;
        it.currencySymbol = res.data?.details.currencySymbol!;
      });
      res.data?.lastWeek.forEach((it) => {
        it.code = res.data?.details.code!;
        it.currency = res.data?.details.currency!;
        it.currencySymbol = res.data?.details.currencySymbol!;
      });
      this.appTableComponent.showDate = true;
      this.changeValueType(this.valueTypes[0]);
    }
  }

  // =======[ آیکون ها و تایتل های کارت ها ]=======
  groupCardPart1 = {
    type: 1,
    items: [
      {
        changePercent: 0,
        lastValue: 0,
        title: 'تولید ناخالص ملی',
        subTitle: 'نسبت به دوره قبل',
        icon: 'assets/icon/icon-card-2.svg',
        upTrend: false,
      },
      {
        changePercent: 0,
        lastValue: 0,
        title: 'سرانه تولید ناخالص ملی',
        subTitle: 'نسبت به دوره قبل',
        icon: 'assets/icon/icon-card-2.svg',
        upTrend: false,
      },
      {
        changePercent: 0,
        lastValue: 0,
        title: 'واردات',
        subTitle: 'نسبت به دوره قبل',
        icon: 'assets/icon/icon-card-1.svg',
        upTrend: false,
      },
      {
        changePercent: 0,
        lastValue: 0,
        title: 'افزایش جمعیت',
        subTitle: 'نسبت به دوره قبل',
        icon: 'assets/icon/icon-card-3.svg',
        upTrend: false,
      },
    ],
  };

  groupCardPart2 = {
    type: 2,
    items: [
      {
        id: 1,
        changePercent: 0,
        lastValue: 0,
        title: 'میزان بیکاری',
        subTitle1: 'میزان بیکاری',
        subTitle2: 'میزان اشتغال',
        icon: 'assets/icon/icon-card-4.svg',
        color: '#FFC01E',
        color2: '#FBC63D57',
        upTrend: false,
      },
      {
        id: 2,
        changePercent: 0,
        lastValue: 0,
        title: 'افزایش تولید ناخالص ملی',
        subTitle1: 'افزایش تولید ناخالص ملی',
        subTitle2: 'افزایش تولید ناخالص ملی',
        icon: 'assets/icon/icon-card-2.svg',
        color: '#1058ea',
        color2: '#3b90ea',
        upTrend: false,
      },
    ],
  };

  ngOnDestroy() {
    AppComponent.changeMainBg('white');
  }

  changeValueType(item: ValueType) {
    if (item.active) {
      return;
    } else {
      this.setActiveType(item);
      switch (item.key) {
        case 0:
          this.showLastWeek();
          break;
        case 1:
          this.showLastValue();
          break;
        default:
          this.showLastValue();
          break;
      }
    }
  }

  setActiveType(item: ValueType) {
    this.valueTypes.forEach((it) => {
      it.active = false;
    });
    item.active = true;
  }
  setPage(pageNumber: number) {
    // console.log(pageNumber);
    Utils.scrollToView('tableEvents', 'smooth');
    this.appTableComponent.table = [];
    let slicer = pageNumber !== 1 ? (pageNumber - 1) * 16 : 0;
    this.appTableComponent.setTable(
      this.appTableComponent.events.slice(slicer, slicer + 16)
    );
  }

  showLastWeek() {
    this.appTableComponent.events = [];
    this._ecoCalService.paginatedCalendar.next({
      items: this.indicatorsData.lastWeek,
    } as PageInterface<CalEvent[]>);
  }

  showLastValue() {
    this.appTableComponent.events = [];
    this._ecoCalService.paginatedCalendar.next({
      items: this.indicatorsData.lastValues,
    } as PageInterface<CalEvent[]>);
  }

  setImportance(item: Importance) {
    if (item.active) {
      return;
    } else {
      this.appTableComponent.table = [];
      this.importances.forEach((it) => (it.active = false));
      let arr = this.appTableComponent.events.filter(
        (it) => it.importance == item.value
      );
      this.appTableComponent.setTable(arr);
      item.active = true;
    }
  }
  get hasPagaination() {
    if (this.appTableComponent?.events) {
      let length = this.appTableComponent.events.length;
      return length > 16 ? true : false;
    }
    return false;
  }
}
