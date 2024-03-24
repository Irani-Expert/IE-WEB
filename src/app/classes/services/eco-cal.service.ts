import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { PageInterface } from '../page.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { CurrencyData } from '../interfaces/currency-data';
import { Result } from '../result';
import { BehaviorSubject, lastValueFrom, map, Observable } from 'rxjs';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { CalEvent } from 'src/app/routes/calendar/calendar-main-page/cal-event.model';
import { Filter as FilterCalendar } from 'src/app/routes/calendar/calendar-main-page/filter.model';
import { environment } from 'src/environments/environment.dev';
import { Country } from 'src/app/routes/calendar/map-components/map-country/country';
import { GraphFinance } from '../interfaces/graph.interface';

@Injectable({
  providedIn: 'root',
})
export class EcoCalService extends BaseService<PageInterface<CalEvent[]>> {
  mapEvents = new BehaviorSubject<Country[]>(new Array<Country>());
  constructor(http: HttpClient, toastr: ToastrService) {
    super(http, toastr);
  }
  getcal(path: string): Observable<Result<CurrencyData[]>> {
    return this.http.get<Result<CurrencyData[]>>(path, {});
  }
  private socket$: WebSocketSubject<any>;

  connect() {
    // Replace the URL with the appropriate TradingView WebSocket URL
    const tradingviewWebSocketUrl =
      'wss://stream.binance.com:9443/ws/ethusdt@trade';

    // Initialize WebSocket connection
    this.socket$ = webSocket(tradingviewWebSocketUrl);

    // Subscribe to symbol information for a specific symbol (replace 'AAPL' with your desired symbol)
    // const symbolSubscribeMsg = {
    //   symbol: 'AAPL',
    //   event: 'subscribe',
    //   params: {
    //     symbol_info: true,
    //   },
    // };

    // Send subscription message
    // this.socket$.next(symbolSubscribeMsg);

    // Subscribe to incoming messages
    this.socket$.subscribe({
      next: (message) => {
        console.log('Received:', message, this.socket$.complete());
      },
      error: (error) => console.error('Error:', error),
      complete: () => console.log('WebSocket closed'),
    });
  }

  disconnect() {
    if (this.socket$) {
      this.socket$.complete(); // Close the WebSocket connection
    }
  }

  paginatedCalendar = new BehaviorSubject<PageInterface<CalEvent[]> | null>(
    null
  );

  getCalEvents(
    params: string = '',
    filterModel: FilterCalendar = new FilterCalendar()
  ) {
    let path = 'CalendarValue/GetDaily?' + params;
    return this.post(path, filterModel).pipe(
      map((it) => {
        if (it.success) {
          this.paginatedCalendar.next(it.data!);
        }
        return it.success!;
      })
    );
  }

  async getActualValByID(id: number) {
    const result = this.http
      .get<Result<string>>(
        `${environment.apiUrl}CalendarValue/GetActualValByID?id=${id}`,
        {
          headers: this.headers,
        }
      )
      .pipe(
        map((it) => {
          return it.data;
        })
      );
    return await lastValueFrom(result);
  }

  async getCountriesByEvents() {
    const apiRes = this.http
      .get<Result<Country[]>>(
        `${environment.apiUrl}CalendarCountry/GetDatailsToday`,
        {
          headers: this.headers,
        }
      )
      .pipe(
        map((item) => {
          this.mapEvents.next(item.data!);
          return item;
        })
      );

    return await lastValueFrom(apiRes);
  }

  getCountryForMapByCode(code: string) {
    let data = this.mapEvents.value;
    let index = data.findIndex((it) => it.code == code);

    return index !== -1 ? data[index] : ({} as Country);
  }

  // private get getItems() {
  //   if (this.paginatedCalendar.value?.items) {
  //     return this.paginatedCalendar.value.items;
  //   }
  //   return new Array<CalEvent>();
  // }

  // async getTimeSeriesData(
  //   currency: string,
  //   interval: 'daily' | 'hourly' | 'minute' = 'hourly',
  //   period: number = 1
  // ) {
  //   if (period == 0) {
  //     period = 1;
  //   }
  //   const today = new Date().toISOString();
  //   const yesterday = this._yesterday.toISOString();
  //   let apiUrl =
  //     'https://marketdata.tradermade.com/api/v1/timeseries?api_key=towIuR6GzzXkN8dp2pZ5';

  //   // &currency=EURUSD&format=records&start_date=2024-02-19&end_date=2024-02-20&interval=hourly&period=1
  //   const options: any = {
  //     currency: currency.toUpperCase(),
  //     format: 'records',
  //     start_date: yesterday.split('T')[0],
  //     end_date: today.split('T')[0],
  //     interval: interval,
  //     period: period,
  //   };
  //   for (let k in options) {
  //     apiUrl += `&${k}=${options[k]}`;
  //   }

  //   const result = this.http.get<GraphFinance>(apiUrl);
  //   return await lastValueFrom(result);
  // }

  // private get _yesterday() {
  //   const date = new Date();
  //   date.setDate(date.getDate() - 1);
  //   return date;
  // }
}
