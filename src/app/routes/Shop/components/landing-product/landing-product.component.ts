import { Component } from '@angular/core';
import { config } from '../bot-options/types/config';
import { Facility } from 'src/app/classes/interfaces/facility.interface';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-landing-product',
  templateUrl: './landing-product.component.html',
  styleUrls: ['./landing-product.component.scss']
})
export class LandingProductComponent {

  constructor (private productService : ProductService) {}
  // ===============[گت امکانات]=============
  options: config = { multi: false };
  faqOptions: Facility[];
  // ===============[گت هیرو]==============


  // =======================[گت پروداکت]==========

  async ngOnInit() {

    if (await this.productService.getProduct(1)){
      this.faqOptions = this.productService._product?.facilities!
    }
  }



  
    // =========[اسکرول]=========
    scroll(el: HTMLElement) {
      console.log(el);
      
      el.scrollIntoView({behavior:"smooth"});
    }
    }
