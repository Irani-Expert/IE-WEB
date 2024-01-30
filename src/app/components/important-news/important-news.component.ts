import { Component } from '@angular/core';
import { CurrencyData } from 'src/app/classes/interfaces/currency-data';
// import { PageInterface } from 'src/app/classes/page.model';
import { Result } from 'src/app/classes/result';
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
  trend_currencies: CurrencyData[] = new Array<CurrencyData>();
  majorCurencies = [
    'C:EURUSD',
    'C:USDJPY',
    'C:GBPUSD',
    'C:USDCHF',
    'C:USDCAD',
    'C:NZDUSD',
    'C:AUDUSD',
  ];
  constructor(private _calService: EcoCalService) {}
  currencyTrend: trend_data[] = new Array<trend_data>();
  ngOnInit(): void {
    // this._calService.connect();
    this.getData();
  }

  async getData() {
    this._calService
      .getcal(
        'https://api.polygon.io/v2/aggs/grouped/locale/global/market/fx/2023-01-09?adjusted=true&apiKey=WRa5fzAd3yFa77fmclb_jRIkkqwKQz_0'
      )
      .subscribe((res: Result<CurrencyData[]>) => {
        this.trend_currencies = res.results;
        this.trend_currencies.forEach((currencyInfo) => {
          if (
            this.majorCurencies.find((currency) => currencyInfo.T == currency)
          ) {
            let valuec = (currencyInfo.c * 100) / currencyInfo.o - 100;
            let trend: trend_data = {
              currency: currencyInfo.T.slice(2, 8),
              percent: valuec.toString().slice(0, 6),
              trend: valuec > 0 ? true : false,
            };
            this.currencyTrend.push(trend);
          }
        });
      });
  }
}
