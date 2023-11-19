import { Component , OnInit } from '@angular/core';
import { planinterface } from './interfaces/plan-interface';
import { PlanService } from './services/plan.service';
import { RatingConfig, StarRating } from 'src/app/shared/rating/rating-config';

@Component({
  selector: 'app-shop-hero',
  templateUrl: './shop-hero.component.html',
  styleUrls: ['./shop-hero.component.scss']
})
export class ShopHeroComponent implements OnInit{

  star : RatingConfig<StarRating> = {
    type:1,
    content:{readonly:true,currentRate:4,rate:5}
  } 


  plan : planinterface[];

  constructor( private ps : PlanService ){}

  ngOnInit(): void {
    this.plan = this.ps.getPlan();
  }
  // ==========={اکتیو}=========
  toggle(index : number){
    this.plan[index].active = !this.plan[index].active;
    this.plan.filter((plan , i)=> i !== index && plan.active)
    .forEach(plan => plan.active = !plan.active);
    
  }
}
