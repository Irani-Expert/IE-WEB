import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { LinkService } from 'src/app/classes/services/link.service';
import { TableCalendar } from 'src/app/shared/table-calendar/table-calendar.component';
import { Indicatorservice } from 'src/app/classes/services/Indicators.service';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-landing-single-country',
  templateUrl: './landing-single-country.component.html',
  styleUrls: ['./landing-single-country.component.scss'],
})
export class LandingSingleCountryComponent {

  title: string = '';
  language: string = '';
  indicatorsData : any;

  @ViewChild(TableCalendar, { static: false }) appTableComponent: TableCalendar;

  constructor(
    private indicatorservice : Indicatorservice,
    private _state: ActivatedRoute,
    private _linkService: LinkService
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
    const req = this.indicatorservice.get(`CalendarCountry/GetDetailsAndHistory?id=840`);
    const res = (await lastValueFrom(req)); 
    if(res.success) {
      this.indicatorsData = res.data;
  // =======[ جایگذاری changePercent ]=======
      this.groupCardPart1.items[0].changePercent = res.data!.indicators[0].changePercent;
      this.groupCardPart1.items[1].changePercent = res.data!.indicators[1].changePercent;
      this.groupCardPart1.items[2].changePercent = res.data!.indicators[2].changePercent;
      this.groupCardPart1.items[3].changePercent = res.data!.indicators[3].changePercent;

  // =======[ جایگذاری lastvalue ]=======
      this.groupCardPart1.items[0].lastValue = res.data!.indicators[0].lastValue;
      this.groupCardPart1.items[1].lastValue = res.data!.indicators[1].lastValue;
      this.groupCardPart1.items[2].lastValue = res.data!.indicators[2].lastValue;
      this.groupCardPart1.items[3].lastValue = res.data!.indicators[3].lastValue;
      this.groupCardPart2.items[0].lastValue =  res.data!.indicators[4].lastValue;
      this.groupCardPart2.items[1].lastValue =  res.data!.indicators[5].lastValue;
    }
    
  }




  // =======[ آیکون ها و تایتل های کارت ها ]=======
  groupCardPart1 = {
    type: 1,
    items: [
      {
        changePercent :0,
        lastValue :0,
        title: 'تولید ناخالص ملی',
        subTitle: 'نسبت به دوره قبل',
        icon: 'assets/icon/icon-card-2.svg',
        upTrend : false
      },
      {
        changePercent :0,
        lastValue :0,
        title: 'سرانه تولید ناخالص ملی',
        subTitle: 'نسبت به دوره قبل',
        icon: 'assets/icon/icon-card-2.svg',
        upTrend : false
      },
      {
        changePercent :0,
        lastValue :0,
        title: 'واردات',
        subTitle: 'نسبت به دوره قبل',
        icon: 'assets/icon/icon-card-1.svg',
        upTrend : false
      },
      {
        changePercent :0,
        lastValue :0,
        title: 'افزایش جمعیت',
        subTitle: 'نسبت به دوره قبل',
        icon: 'assets/icon/icon-card-3.svg',
        upTrend : false
      },
    ],
  };

  groupCardPart2 = {
    type: 2,
    items: [
      {
        id: 1,
        changePercent :0,
        lastValue : 0,
        title: 'میزان بیکاری',
        subTitle1: 'میزان بیکاری',
        subTitle2: 'میزان اشتغال',
        icon: 'assets/icon/icon-card-4.svg',
        color : '#FFC01E',
        color2 : '#FBC63D57',
        upTrend : false
      },
      {
        id: 2,
        changePercent :0,
        lastValue : 0,
        title: 'افزایش تولید ناخالص ملی',
        subTitle1: 'افزایش تولید ناخالص ملی',
        subTitle2: 'افزایش تولید ناخالص ملی',
        icon: 'assets/icon/icon-card-2.svg',
        color : '#1058ea',
        color2 : '#3b90ea',
        upTrend : false
      },
    ],
  };

  ngOnDestroy() {
    AppComponent.changeMainBg('white');
  }
}
