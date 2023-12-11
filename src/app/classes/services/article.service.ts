import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { IArticle } from '../interfaces/article.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class articleService extends BaseService<IArticle[]> {
  constructor(http: HttpClient) {
    super(http);
  }
}
