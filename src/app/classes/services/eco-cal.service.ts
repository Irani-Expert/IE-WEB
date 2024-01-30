import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { PageInterface } from '../page.model';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { CurrencyData } from '../interfaces/currency-data';
import { Result } from '../result';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { CalEvent } from 'src/app/routes/calendar/calendar-main-page/cal-event.model';
import { Filter as FilterCalendar } from 'src/app/routes/calendar/calendar-main-page/filter.model';

@Injectable({
  providedIn: 'root',
})
export class EcoCalService extends BaseService<PageInterface<CalEvent[]>> {
  constructor(http: HttpClient, toastr: ToastrService) {
    super(http, toastr);
  }
  getcal(path: string): Observable<Result<PageInterface<CurrencyData[]>>> {
    return this.http.get<Result<PageInterface<CurrencyData[]>>>(path, {});
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
}
