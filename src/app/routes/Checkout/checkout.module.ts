import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutRoutingModule } from './checkout.routing';
import { LandingCheckoutComponent } from './components/landing-checkout/landing-checkout.component';
import { CheckoutDetailCardComponent } from './components/checkout-detail-card/checkout-detail-card.component';
import { Checkbox } from 'src/app/shared/checkbox/checkbox.component';
import { PaymentResultComponent } from './components/payment-result/payment-result.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

const components = [
  LandingCheckoutComponent,
  CheckoutDetailCardComponent,
  PaymentResultComponent,
];
@NgModule({
  declarations: [components],
  imports: [
    CommonModule,
    CheckoutRoutingModule,
    Checkbox,
    ReactiveFormsModule,
    SharedModule,
  ],
})
export class CheckoutModule {}
