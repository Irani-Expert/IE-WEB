import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingCheckoutComponent } from './components/landing-checkout/landing-checkout.component';
import { PaymentResultComponent } from './components/payment-result/payment-result.component';

const routes: Routes = [
  {
    path: '',
    component: LandingCheckoutComponent,
  },
  {
    path: 'payment-result/:id',
    component: PaymentResultComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckoutRoutingModule {}
