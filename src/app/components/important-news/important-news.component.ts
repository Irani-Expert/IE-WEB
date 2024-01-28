import { Component, Input } from '@angular/core';
import { CurrencyData } from 'src/app/classes/interfaces/currency-data';
// import { PageInterface } from 'src/app/classes/page.model';
// import { Result } from 'src/app/classes/result';
import { EcoCalService } from 'src/app/classes/services/eco-cal.service';
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
  trend_currencies: CurrencyData;

  constructor(private _calService: EcoCalService) {}
  @Input() currencyTrend: trend_data[];
  ngOnInit(): void {
    this._calService.connect();
    // this.getData();
  }

  // async getData() {
  //   this._calService
  //     .getcal(
  //       'https://api.polygon.io/v2/aggs/grouped/locale/global/market/fx/2023-01-09?adjusted=true&apiKey=WRa5fzAd3yFa77fmclb_jRIkkqwKQz_0'
  //     )
  //     .subscribe((res: Result<PageInterface<CurrencyData[]>>) => {
  //       console.log(res.result);
  //       debugger;
  //     });
  // }
}
