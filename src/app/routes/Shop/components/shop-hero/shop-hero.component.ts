import { Component , OnInit } from '@angular/core';
import { RatingConfig, StarRating } from 'src/app/shared/rating/rating-config';
import { planInterface } from './interfaces/product-interface';
// import { PlanService } from './services/plan.service';
import { ProductService } from '../product.service';
// import { ProductService } from '../product.service';
const planInit: planInterface = {
  active:false,
  id:-1,offPrice:0,price:0,title:''
}
@Component({
  selector: 'app-shop-hero',
  templateUrl: './shop-hero.component.html',
  styleUrls: ['./shop-hero.component.scss']
})
export class ShopHeroComponent implements OnInit{
  // ============[ستاره ها]==================
  loading = true
  star : RatingConfig<StarRating> = {
    type:1,
    content:{readonly:true,currentRate:4,rate:5}
  } 
  // ============[سرویس ]==================
  selectedPlan: planInterface = planInit;
  plan : planInterface[] =new Array<planInterface>;
  constructor ( private productService : ProductService){
  }
async ngOnInit() {
  if(await this.productService.getProduct(1)) {
    this.productService._product?.plans.filter(it=> it.isActive == true).forEach((it,i)=> {
      if(i <=3) {
        this.plan.push({
        
        offPrice:0,
          id: it.id,
          active: false,
          price: it.price,
          title: it.title
        })
      }
      else {
        return
      }
    })
   
    
    this.selectedPlan = this.plan[0]
    this.selectedPlan.active = true

    this.loading = false
  }
}
 
  // ==========={اکتیو}=========
  toggle(plan : planInterface , index : number){
    plan.active = true;
    this.selectedPlan = plan;
    this.plan.filter((plan , i)=> i !== index && plan.active)
    .forEach(plan => plan.active = !plan.active);    
  }
}
