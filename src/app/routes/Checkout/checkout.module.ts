import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutRoutingModule } from './checkout.routing';
import { LandingCheckoutComponent } from './components/landing-checkout/landing-checkout.component';
import { CheckoutDetailCardComponent } from './components/checkout-detail-card/checkout-detail-card.component';
import { ProductProperties } from 'src/app/shared/product-properties/product-properties.component';
import { Checkbox } from 'src/app/shared/checkbox/checkbox.component';

const components = [LandingCheckoutComponent, CheckoutDetailCardComponent];
@NgModule({
  declarations: [components],
  imports: [CommonModule, CheckoutRoutingModule, ProductProperties, Checkbox],
})
export class CheckoutModule {}
