import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/classes/services/base.service';
import { HttpClient } from '@angular/common/http';
import { SearchModel } from '../interfaces/search.interface';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class searchServices extends BaseService<SearchModel> {
  constructor(http: HttpClient, toastr: ToastrService) {
    super(http, toastr);
  }
}
