import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutRoutingModule } from './checkout.routing';
import { LandingCheckoutComponent } from './components/landing-checkout/landing-checkout.component';
import { CheckoutDetailCardComponent } from './components/checkout-detail-card/checkout-detail-card.component';
import { Checkbox } from 'src/app/shared/checkbox/checkbox.component';
import { PaymentResultComponent } from './components/payment-result/payment-result.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { ModalComponent } from 'src/app/shared/modal/modal.component';

const components = [
  LandingCheckoutComponent,
  CheckoutDetailCardComponent,
  PaymentResultComponent,
];
@NgModule({
  declarations: [components],
  imports: [
    ModalComponent,
    CommonModule,
    CheckoutRoutingModule,
    Checkbox,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
  ],
})
export class CheckoutModule {}
