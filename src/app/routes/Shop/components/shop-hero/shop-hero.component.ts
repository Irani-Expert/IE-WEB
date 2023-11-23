import { Component , OnInit } from '@angular/core';
import { RatingConfig, StarRating } from 'src/app/shared/rating/rating-config';
import { planInterface } from './interfaces/product-interface';
import { PlanService } from './services/plan.service';
// import { ProductService } from '../product.service';

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
  // ============[سرویس خودم]==================
  plan : planInterface[] ;
  constructor ( private ps : PlanService){
  }
ngOnInit(): void {
    this.plan = this.ps.getPlan();
}
  // ============[سرویس ]==================

  // plan: planInterface[] = [];

  // constructor(private productService : ProductService ){}

  // async ngOnInit() {
  //   if(await this.productService.getProduct(1)) {
  //     this.productService._product?.plans.filter(it=> it.isActive == true).forEach((it,i)=> {
  //       if(i <=3) {
  //         this.plan.push({
  //           productID : it.productID,
  //           description : it.description,
  //           id: it.id,
  //           isActive: false,
  //           price: it.price,
  //           title: it.title
  //         })
  //       }
  //       else {
  //         return
  //       }
  //     })
     
      
  //     this.plan[0].isActive = true
  //     this.loading = false
  //   }
  // }
    
  // ==========={اکتیو}=========
  toggle(index : number){
    this.plan[index].active = !this.plan[index].active;
    this.plan.filter((plan , i)=> i !== index && plan.active)
    .forEach(plan => plan.active = !plan.active);    
  }
}
