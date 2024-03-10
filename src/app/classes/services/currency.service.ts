import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, lastValueFrom, map } from 'rxjs';
import { Currency } from '../interfaces/currency.interface';
import { Result } from '../result';
import { GraphFinance } from '../interfaces/graph.interface';
import { environment } from 'src/environments/environment.dev';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService extends BaseService<any> {
  currenciesSubject = new BehaviorSubject<Currency[]>(new Array<Currency>());
  currenciesPairStatus = new BehaviorSubject<GraphFinance[]>(
    new Array<GraphFinance>()
  );
  constructor(http: HttpClient, toastr: ToastrService) {
    super(http, toastr);
  }

  async getCurrencies() {
    const req = this.get('CurrencyPair').pipe(
      map((data) => {
        if (data.success) this.currenciesSubject.next(data.data);
        return data.success;
      })
    );
    return await lastValueFrom(req);
  }

  async getCurrencyPairStatus(pairs: number[]) {
    let body = {
      currencyPairIDs: pairs,
    };
    this.headers.append('accept', 'text/plain');
    const req = this.http
      .post<Result<GraphFinance[]>>(
        `${environment.apiUrl}CurrencyPairTransaction/Get`,
        body,
        {
          headers: this.headers,
        }
      )
      .pipe(
        map((it) => {
          if (it.data) this.currenciesPairStatus.next(it.data);
          return it.success;
        })
      );
    return await lastValueFrom(req);
  }

  getGraphData(id: number = 14) {
    let data = this.currenciesPairStatus.value.find(
      (it) => it.currencyPairID == id
    );
    return data;
  }
}
