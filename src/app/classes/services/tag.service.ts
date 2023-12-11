import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { IArticle } from '../interfaces/article.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TagService extends BaseService<IArticle> {
  constructor(http: HttpClient) {
    super(http);
  }
  // getTags = new BehaviorSubject<IArticle | null>(null);
  // get _Tags() {
  //   return this.getTags.value;
  // }
}
