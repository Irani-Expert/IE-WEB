import { Component } from '@angular/core';
import { debounceTime } from 'rxjs';
import { AppComponent } from 'src/app/app.component';
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
    'C:AUDCAD',
    'C:AUDJPY',
    'C:AUDSGD',
    'C:CADHKD',
  ];
  constructor(private _calService: EcoCalService) {}

  currencyTrend: trend_data[] = new Array<trend_data>();

  ngOnInit(): void {
    // this._calService.connect();
    if (AppComponent.isBrowser.value){
      this.getData();
    }
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
              currency: currencyInfo.T.slice(2, 6),
              percent: valuec.toString().slice(0, 6),
              trend: valuec > 0 ? true : false,
            };
            this.currencyTrend.push(trend);
            // this.activeZone();

          }
        });
    
      });
  }

  changing : boolean;

  activeZone() {
    // // this.changing = true;
    // setInterval(() => {
      
      // this.currencyTrend = [...this.currencyTrend.slice(1), this.currencyTrend[0]];
    //   // this.changing = false;
    // }, 3000);
    }
  }
