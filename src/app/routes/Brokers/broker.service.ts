import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { BaseService } from 'src/app/classes/services/base.service';
import { ApiBrokerModel } from './components/single-broker/api-broker.model';
import { BehaviorSubject, lastValueFrom, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BrokerService extends BaseService<ApiBrokerModel> {
  singleBrokerBSubject = new BehaviorSubject<ApiBrokerModel>(
    new ApiBrokerModel()
  );
  singleBroker$ = this.singleBrokerBSubject.asObservable();

  constructor(http: HttpClient, toastr: ToastrService) {
    super(http, toastr);
  }
  async getDetails(title: string) {
    this.singleBrokerBSubject.next(new ApiBrokerModel());
    const apiObserve = this.get(`Broker/details?title=${title}`).pipe(
      map((it) => {
        if (it.success && it.data) {
          this.singleBrokerBSubject.next(it.data);
        }
        return it.success;
      })
    );
    const apiRes = lastValueFrom(apiObserve);
    return await apiRes;
  }
}
