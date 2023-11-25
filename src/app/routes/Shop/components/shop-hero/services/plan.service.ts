import { Injectable } from '@angular/core';
import { planInterface } from '../interfaces/product-interface';

@Injectable({
  providedIn: 'root'
})
export class PlanService {

  constructor() { }

  getPlan() : planInterface[] {
    return [
      {
        id : 1,
        title : "اعتماد",
        active : false,
        offPrice : 20,
        price :18
      },
      {
        id : 2,
        title : "1 ماهه",
        active : false,
        offPrice : 30,
        price :25

      },
      {
        id : 3,
        title : "3 ماهه",
        active : false,
        offPrice : 35,
        price :30

      },
      {
        id : 4,
        title : "6 ماهه",
        active : false,
        offPrice : 40,
        price :35

      },
      {
        id : 5,
        title : "1 ساله",
        active : false,
        offPrice : 45,
        price :40

      }
    ]};
}
