import { Component , OnInit } from '@angular/core';
import { RatingConfig, StarRating } from 'src/app/shared/rating/rating-config';
import { Product, SingleProduct } from 'src/app/classes/interfaces/product.interface';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-shop-hero',
  templateUrl: './shop-hero.component.html',
  styleUrls: ['./shop-hero.component.scss']
})
export class ShopHeroComponent implements OnInit{
  loading = true
  star : RatingConfig<StarRating> = {
    type:1,
    content:{readonly:true,currentRate:4,rate:5}
  } 

  plan: any[];

  constructor( public productService : ProductService ){}

  async ngOnInit() {
    if(await this.productService.getProduct(1)) {
      this.loading = false
    }
  }
  // ==========={اکتیو}=========
  toggle(index : number){
    this.plan[index].isActive = !this.plan[index].isActive;
    this.plan.filter((plan , i)=> i !== index && plan.isActive)
    .forEach(plan => plan.isActive = !plan.isActive);
    
  }
}
