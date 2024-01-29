import { Component, ViewEncapsulation } from '@angular/core';
import { Bubble, Maps, MapsTooltip } from '@syncfusion/ej2-angular-maps';
import { AppComponent } from 'src/app/app.component';
import { EcoCalService } from 'src/app/classes/services/eco-cal.service';
import { lastValueFrom } from 'rxjs';
Maps.Inject(Bubble, MapsTooltip);
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
  importances = [
    {
      color: '#FF5B5B',
      value: 2,
      title: 'مهم',
      active: true,
    },
    {
      color: '#FFD95B',
      value: 3,
      title: 'متوسط',
      active: false,
    },
    {
      color: '#DFFF00',
      value: 1,
      title: 'پایین',
      active: false,
    },
    {
      color: '#FCF1F1',
      value: 0,
      title: 'نامشخص',
      active: true,
    },
  ];
  today = new Date();
  constructor(private ecoCalService: EcoCalService) {}
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
    if (await this.getCal()) {
      console.log(this.ecoCalService.paginatedCalendar);
    }
  }
  ngOnDestroy() {
    AppComponent.changeMainBg('white');
  }

  async getCal() {
    const apiData = this.ecoCalService.getCalEvents(
      `pageIndex=0&pageSize=10&accending=true`
    );

    return await lastValueFrom(apiData);
  }
}
