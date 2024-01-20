import { Component, Input } from '@angular/core';
interface trend_data {
  currency: string;
  percent: string;
  trend: boolean;
}

@Component({
  selector: 'app-important-news',
  templateUrl: './important-news.component.html',
  styleUrls: ['./important-news.component.scss'],
})
export class ImportantNewsComponent {
  @Input() currencyTrend: trend_data[];
}
