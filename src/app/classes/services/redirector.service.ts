import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
// import { GuardsCheckStart, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RedirectorService extends BaseService<any> {
  url = '';
  constructor(http: HttpClient) {
    super(http);
  }
}
