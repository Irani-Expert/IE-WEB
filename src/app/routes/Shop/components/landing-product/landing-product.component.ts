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
  // ===============[سرویس امکانات]=============
  constructor (private optionService : ProductService) {}
  options: config = { multi: false };
  faqOptions: Facility[];
  
  async ngOnInit() {
    // ===============[]============
    if(await this.optionService.getProduct(1)) {
      this.faqOptions = this.optionService._product?.facilities!
    }
  }
    // =========[اسکرول]=========
    scroll(el: HTMLElement) {
      console.log(el);
      
      el.scrollIntoView({behavior:"smooth"});
    }
    }
