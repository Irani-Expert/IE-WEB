import { Component, ViewEncapsulation } from '@angular/core';
import { Bubble, Maps, MapsTooltip } from '@syncfusion/ej2-angular-maps';
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
}
