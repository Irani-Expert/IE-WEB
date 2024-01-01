import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { IArticle } from '../interfaces/article.interface';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class TagService extends BaseService<IArticle> {
  constructor(http: HttpClient, toastr: ToastrService) {
    super(http, toastr);
  }
  // getTags = new BehaviorSubject<IArticle | null>(null);
  // get _Tags() {
  //   return this.getTags.value;
  // }
}
