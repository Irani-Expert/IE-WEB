import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/classes/services/base.service';
import { HttpClient } from '@angular/common/http';
import { SearchModel } from '../interfaces/search.interface';
import { PageInterface } from '../page.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })

export class searchServices extends BaseService<SearchModel> {

  searchItem = new BehaviorSubject<PageInterface<SearchModel> | null>(null);

  constructor(http: HttpClient){
    super(http)
  }
  get _searchItems() {
    return this.searchItem.value
  }
} 