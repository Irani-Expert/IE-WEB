import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingProductComponent } from '../components/landing-product/landing-product.component';
import { LandingShopComponent } from '../components/landing-shop/landing-shop.component';
// import { LandingShopComponent } from '../components/landing-shop/landing-shop.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'page/1' },
  { path: 'page', redirectTo: 'page/1', pathMatch: 'full' },
  { path: 'page/:id', pathMatch: 'prefix', component: LandingShopComponent },
  {
    path: ':title',
    component: LandingProductComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopRoutingModule {}
