import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingCheckoutComponent } from './components/landing-checkout/landing-checkout.component';

const routes: Routes = [
  {
    path: '',
    component: LandingCheckoutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckoutRoutingModule {}
