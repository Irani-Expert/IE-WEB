import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/classes/services/base.service';
import { FAQ } from '../interfaces/faq-interfce';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FaqService extends BaseService<FAQ[]> {

  constructor(http: HttpClient) {
    super(http)
   }

}
