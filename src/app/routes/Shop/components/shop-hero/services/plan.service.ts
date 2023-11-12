import { Injectable } from '@angular/core';
import { planinterface } from '../interfaces/plan-interface';

@Injectable({
  providedIn: 'root'
})
export class PlanService {

  constructor() { }

  getPlan() : planinterface[] {
    return [
      {
        id : 1,
        title : "اعتماد",
        active : false
      },
      {
        id : 2,
        title : "1 ماهه",
        active : false

      },
      {
        id : 3,
        title : "3 ماهه",
        active : false

      },
      {
        id : 4,
        title : "6 ماهه",
        active : false

      },
      {
        id : 5,
        title : "1 ساله",
        active : false
      }
    ]};
}
