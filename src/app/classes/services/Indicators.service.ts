import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { IndicatorsModel } from '../interfaces/indicators.interface';
import { ToastrService } from 'ngx-toastr';



  @Injectable({
    providedIn: 'root',
  })

export class Indicatorservice extends BaseService<IndicatorsModel> {

    constructor(http: HttpClient, toastr: ToastrService) {
        super(http, toastr);
      }
}
  
