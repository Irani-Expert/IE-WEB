import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/classes/services/base.service';
import { HttpClient } from '@angular/common/http';
import {
  SearchArticles,
  SearchBrokers,
  SearchCalendar,
  SearchModel,
  SearchProducts,
} from '../interfaces/search.interface';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, lastValueFrom, map } from 'rxjs';
class SeachModelInit implements SearchModel {
  products: SearchProducts[];
  brokers: SearchBrokers[];
  articles: SearchArticles[];
  calendarEvents: SearchCalendar[];
  success: true;
  message: string;
  itemSearch: string | null;
}
@Injectable({
  providedIn: 'root',
})
export class searchServices extends BaseService<SearchModel> {
  searchModelSubject = new BehaviorSubject(new SeachModelInit());
  searchModel$ = this.searchModelSubject.asObservable();
  constructor(http: HttpClient, toastr: ToastrService) {
    super(http, toastr);
  }

  getItems(someThing: string) {
    let res = this.get(`Search?someThing=${someThing}`).pipe(
      map((data) => {
        this.searchModelSubject.next(data.data!);
        return data.success;
      })
    );
    return lastValueFrom(res);
  }
}
